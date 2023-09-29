
let chatBox=document.querySelector('.chat_box')
let chatInp=document.querySelector('.chat_inp textarea')
let createBtn=document.querySelector('.createBtn')

showChats() // Calling the showChats function
let chats="";
createBtn.addEventListener("click",function(e){
    if(chatInp.value==""){
        alert("field is empty")
        return; 
    }
    chats=localStorage.getItem("chats")
    if(chats==null){
        chatObj=[];
    }else{
        chatObj=JSON.parse(chats)
    }
    chatObj.push(chatInp.value)
    localStorage.setItem("chats",JSON.stringify(chatObj));
   
    let div=document.createElement('div'); 

    chatInp.value=""
    showChats();
})

// function to show the query

function showChats(){
    let chats=localStorage.getItem("chats")
    if(chats==null){
        chatObj=[];
    }else{
        chatObj=JSON.parse(chats)
    }
    let html="";
    chatObj.forEach(function(elem,ind){
        html+=`
        <div class="query_box">
              <div>
                  <p>${elem}</p>
              </div>
              <div>
                  <button id=${ind} onclick="deleteChats(this.id)">delete</button>
                  <button id=${ind} onclick="replyfunc(this.id)">reply</button>
              </div>
              <div class="replies-div">
              <h3>Replies</h3>
              <input class="see-hide" onclick="showReplyUL(true,${ind})" type="button" value="see" /> 
              </div>
             <div>
                <ul  class="replyUL">
                    
                </ul>
            </div>

        </div>
      
        `
    })

        if(chatObj.length!=0){
            chatBox.innerHTML=html
        }
        else{
            chatBox.innerHTML=`<h2>Nothing to show</h2>`
        }
}


function showReplyUL(flag,ind){
    let seeHide=document.querySelectorAll('.see-hide')
    if(seeHide[ind].value=="see")
       flag=true;
    else{
        flag=false;
    }
    if(flag){
        document.querySelectorAll('.replyUL')[ind].style.display="unset"
        seeHide[ind].value="hide"
    }
    if(!flag){
        document.querySelectorAll('.replyUL')[ind].style.display="none"
        seeHide[ind].value="see"
    }
   
    
}
// function to delete the chats

function deleteChats(index){
    localStorage.removeItem("replies")
   let chats=localStorage.getItem("chats")
    if(chats==null){
        chatObj=[];
    }else{
        chatObj=JSON.parse(chats)
    }
    chatObj.splice(index,1);
    localStorage.setItem("chats",JSON.stringify(chatObj));
    showChats()
}

// function for showing the replyPopup

function replyfunc(ind){
    let popPara=document.querySelector('.popPara')
    popPara.innerHTML=ind
    let replyPopup=document.querySelector('.replyPopup')
    replyPopup.style.top="10rem";
    
}



function removePop(){
    let replyPopup=document.querySelector('.replyPopup')
    let replyTarea=document.querySelector('.replyPopup textarea')
    let popPara=document.querySelector('.popPara')
    
    let replyindex=popPara.innerHTML

    var replies=localStorage.getItem(`replies${replyindex}`)

    if(replies==null){
        replyObj=[];
    }else{
        replyObj=JSON.parse(replies)
    }

    

    replyObj.push(replyTarea.value)
    localStorage.setItem(`replies${replyindex}`,JSON.stringify(replyObj));
    
    replyTarea.value=""
    replyPopup.style.top="-10rem";
    showReply(replyindex);
}

    for(let i=0;i<chatObj.length;i++){
        showReply(i);
    }


function showReply(replyindex){

    let replyUL=document.querySelectorAll('.replyUL')
    

    let replies=localStorage.getItem(`replies${replyindex}`)

    if(replies==null){
        listReplyObj=[];
    }else{
        listReplyObj=JSON.parse(replies)
    }
    let innerUl=""

    listReplyObj.forEach(function(elem,ind){
      innerUl+=`
        <li>${elem}</li>
        
      `
    })
  
    if(replyUL[replyindex].length!=0){
        replyUL[replyindex].innerHTML=innerUl
    }
    else{
        replyUL[replyindex].innerHTML=`<h2>Nothing to show</h2>`
    }

}

// Object.keys(localStorage).forEach((keys)=>{
    
//     let div=document.createElement('div'); 
//     div.classList.add("chat_bar")
//     div.innerHTML=`${localStorage.getItem(keys)}`
//     chatBox.appendChild(div);
// })


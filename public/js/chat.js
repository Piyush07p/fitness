
let chatBox=document.querySelector('.chat_box')
let chatInp=document.querySelector('.chat_inp textarea')
let createBtn=document.querySelector('.createBtn')

// showChats() Calling the showChats function
// let chats="";
// createBtn.addEventListener("click",function(e){
//     if(chatInp.value==""){
//         alert("field is empty")
//         return; 
//     }
//     chats=localStorage.getItem("chats")
//     if(chats==null){
//         chatObj=[];
//     }else{
//         chatObj=JSON.parse(chats)
//     }
//     chatObj.push(chatInp.value)
//     localStorage.setItem("chats",JSON.stringify(chatObj));
   
//     let div=document.createElement('div'); 

//     chatInp.value=""
//     showChats();
//     for(let i=0;i<chatObj.length;i++){
//         showReply(i);
//     }
// })

// function to show the query

// function showChats(){
//     let chats=localStorage.getItem("chats")
//     if(chats==null){
//         chatObj=[];
//     }else{
//         chatObj=JSON.parse(chats)
//     }
//     let html="";
//     chatObj.forEach(function(elem,ind){
//         html+=`
//         <div class="query_box">
//               <div class="queryDiv">
//                   <p>${elem}</p>
//               </div>
//               <div>
//                   <button id=${ind} onclick="deleteChats(this.id)">delete</button>
//                   <button id=${ind} onclick="replyfunc(this.id)">reply</button>
//               </div>
//               <div class="replies-div">
//               <h3>Replies</h3>
//               <input class="see-hide" onclick="showReplyUL(true,${ind})" type="button" value="see" /> 
//               </div>
//              <div>
//                 <ul  class="replyUL">
                    
//                 </ul>
//             </div>

//         </div>
      
//         `
//     })

//         if(chatObj.length!=0){
//             chatBox.innerHTML=html
//         }
//         else{
//             chatBox.innerHTML=`<h2>Nothing to show</h2>`
//         }
// }


function showReplyUL(flag,ind){
    let seeHide=document.querySelectorAll('.see-hide')
    if(seeHide[ind].value=="see")
       flag=true;
    else{
        flag=false;
    }
    if(flag){
        document.querySelectorAll('.replyUL')[ind].style.display="unset"
        seeHide[ind].value="hide replies"
    }
    if(!flag){
        document.querySelectorAll('.replyUL')[ind].style.display="none"
        seeHide[ind].value="see replies"
    }
   
    
}
// function to delete the chats

// function deleteChats(index){
//    localStorage.removeItem(`replies${index}`)
//    let chats=localStorage.getItem("chats")
//     if(chats==null){
//         chatObj=[];
//     }else{
//         chatObj=JSON.parse(chats)
//     }
//     chatObj.splice(index,1);
//     localStorage.setItem("chats",JSON.stringify(chatObj));
//     showChats()

//     //calling the function to fetch all the replies
//     // stored in localstorage
//     for(let i=0;i<chatObj.length;i++){
//         showReply(i);
//     }
// }

// function for showing the replyPopup

function replyfunc(ind){

    // let popPara=document.querySelector('.popPara')
    let replyPopup=document.querySelectorAll('.replyPopup')[ind]
    replyPopup.style.top="10rem";

    // let chatSecDiv=document.querySelector('.chat_inp')
    // chatSecDiv.classList.toggle('active')
    
}



function removePop(ind){
    let replyPopup=document.querySelectorAll('.replyPopup')[ind]
    
    // let replyTarea=document.querySelector('.replyPopup textarea')

    
    // let chatSecDiv=document.querySelector('.chat_inp')
    // chatSecDiv.classList.toggle('active')

    // replyTarea.value=""
    replyPopup.style.top="-20rem";


    
}

// function for showing the reply





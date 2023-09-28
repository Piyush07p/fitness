
let chatBox=document.querySelector('.chat_box')
let chatInp=document.querySelector('.chat_inp textarea')
let createBtn=document.querySelector('.createBtn')

showChats()

createBtn.addEventListener("click",function(e){
    if(chatInp.value==""){
        alert("field is empty")
        return; 
    }
    let chats=localStorage.getItem("chats")
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
                  <button>reply</button>
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


function deleteChats(index){
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
// Object.keys(localStorage).forEach((keys)=>{
    
//     let div=document.createElement('div'); 
//     div.classList.add("chat_bar")
//     div.innerHTML=`${localStorage.getItem(keys)}`
//     chatBox.appendChild(div);
// })


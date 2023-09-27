
let chatBox=document.querySelector('.chat_box')
let chatInp=document.querySelector('.chat_inp input')

function createChat(){
    if(chatInp.value==""){
        alert("field is empty")
        return;
    }
    
    let key=Date.now()
    localStorage.setItem(key,chatInp.value);
   
    let div=document.createElement('div'); 
    div.classList.add("chat_bar")
    div.innerHTML=`${localStorage.getItem(key)}`
    chatBox.appendChild(div);

    chatInp.value=""

}
Object.keys(localStorage).forEach((keys)=>{
    
    let div=document.createElement('div'); 
    div.classList.add("chat_bar")
    div.innerHTML=`${localStorage.getItem(keys)}`
    chatBox.appendChild(div);
})

 


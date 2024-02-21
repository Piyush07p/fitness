function loadMore() {
    let mainDiv=document.querySelector('.mainDiv')
    let btn = document.querySelector(".loadMoreBtn");
    if(btn.innerText=="Load More"){
        mainDiv.style.height="unset"
        btn.innerText="Load Less"
    }
    else{
        mainDiv.style.height="280vh"
        btn.innerText="Load More"
    }
    

}

// function openPostPage(n){
//     window.open('posts')
//     localStorage.setItem("articleIndex",n)
// }

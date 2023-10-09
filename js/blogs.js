function loadMore() {
    document.getElementsByClassName("mainDiv")[0].style.maxHeight = "3000px";
    let btn = document.getElementsByClassName("centerloadMoreBtn")[0];
    btn.remove();
}

function openPostPage(n){
    window.open('post.html')
    localStorage.setItem("articleIndex",n)
}

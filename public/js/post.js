

const arr = [
    {
        blogTitle : "Blog 1",
        postAuthor : "Written by Someone 1",
        postDate : "Wednesday Jan 4",
        article : "Article 1 jfajdjnsjfnjdnvnjvnfdjngjnfjgnfnfjnd v mnvfnjgnfgttmktm"
    },
    {
        blogTitle : "Blog 2",
        postAuthor : "Written by Someone 2",
        postDate : "Wednesday Feb 4",
        article : "Article 2 jfajdjnsjfnjdnvnjvnfdjngjnfjgnfnfjnd v mnvfnjgnfgttmktm"
    },
    {
        blogTitle : "Blog 3",
        postAuthor : "Written by Someone 3",
        postDate : "Wednesday Mar 4",
        article : "Article 3 jfajdjnsjfnjdnvnjvnfdjngjnfjgnfnfjnd v mnvfnjgnfgttmktm"
    },
    {
        blogTitle : "Blog 4",
        postAuthor : "Written by Someone 4",
        postDate : "Wednesday Apr 4",
        article : "Article 4 jfajdjnsjfnjdnvnjvnfdjngjnfjgnfnfjnd v mnvfnjgnfgttmktm"
    },
    {
        blogTitle : "Blog 5",
        postAuthor : "Written by Someone 5",
        postDate : "Wednesday May 4",
        article : "Article 5 jfajdjnsjfnjdnvnjvnfdjngjnfjgnfnfjnd v mnvfnjgnfgttmktm"
    },
    {
        blogTitle : "Blog 6",
        postAuthor : "Written by Someone 6",
        postDate : "Wednesday June 4",
        article : "Article 6 jfajdjnsjfnjdnvnjvnfdjngjnfjgnfnfjnd v mnvfnjgnfgttmktm"
    },
    {
        blogTitle : "Blog 7",
        postAuthor : "Written by Someone 7",
        postDate : "Wednesday July 4",
        article : "Article 7 jfajdjnsjfnjdnvnjvnfdjngjnfjgnfnfjnd v mnvfnjgnfgttmktm"
    },
    {
        blogTitle : "Blog 8",
        postAuthor : "Written by Someone 8",
        postDate : "Wednesday Aug 4",
        article : "Article 8 jfajdjnsjfnjdnvnjvnfdjngjnfjgnfnfjnd v mnvfnjgnfgttmktm"
    },
    {
        blogTitle : "Blog 9",
        postAuthor : "Written by Someone 9",
        postDate : "Wednesday Sept 4",
        article : "Article 9 jfajdjnsjfnjdnvnjvnfdjngjnfjgnfnfjnd v mnvfnjgnfgttmktm"
    },
    {
        blogTitle : "Blog 10",
        postAuthor : "Written by Someone 10",
        postDate : "Wednesday Oct 4",
        article : "Article 10 jfajdjnsjfnjdnvnjvnfdjngjnfjgnfnfjnd v mnvfnjgnfgttmktm"
    }

]


let post = document.querySelector(".post-article")
let blogHeading = document.querySelector(".blogHeading")
let postAuthor = document.querySelector(".postAuthor")
let postDate= document.querySelector(".postDate")


let articleIndex = localStorage.getItem("articleIndex")

post.innerHTML = arr[articleIndex].article
blogHeading.innerHTML = arr[articleIndex].blogTitle
postAuthor.innerHTML = arr[articleIndex].postAuthor
postDate.innerHTML = arr[articleIndex].postDate

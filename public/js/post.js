

const arr = [
    {
        blogTitle : "Power of Walking",
        postAuthor : "Written by Someone 1",
        postDate : "Wednesday Jan 4",
        article : "In our fast-paced lives, finding time for exercise can be challenging. But what if I told you that one of the simplest and most accessible forms of exercise is right at your doorstep? Walking, a seemingly basic activity, can unlock a treasure trove of health benefits when practiced daily.Ever noticed how a brisk walk can lift your spirits? Walking triggers the release of endorphins, those feel-good hormones that can help alleviate stress and anxiety. It's a natural mood enhancer that requires no prescription—just a comfortable pair of shoes.Your heart loves a good stroll. Daily walking can contribute to better cardiovascular health by lowering blood pressure and improving blood circulation. It's a simple yet effective way to keep your heart in tip-top shape.If you're looking to shed a few pounds or maintain a healthy weight, walking can be your silent ally. It may not be as intense as some high-intensity workouts, but the calories burned during a daily walk can add up and make a significant impact over time.Stuck in a creative rut? Lace up those shoes and hit the pavement. Studies have shown that walking can boost creativity and cognitive function. So, the next time you find yourself grappling with writer's block or a challenging problem, take a stroll and let the ideas flow.Walking is a weight-bearing exercise, which means it can contribute to the strengthening of bones and muscles. It's particularly beneficial for those who may be looking for a low-impact option to maintain their bone density."
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

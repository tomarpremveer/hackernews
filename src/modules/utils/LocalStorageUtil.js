export function saveNews(posts){
    localStorage.setItem("posts",JSON.stringify(posts))
}

export function getNews(){
    return JSON.parse(localStorage.getItem("posts")) || []
}
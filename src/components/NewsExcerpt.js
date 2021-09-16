import React from "react"
import Vote from "./Vote";

function NewsExcerpt({news}) {
    return (
        <div  className="newsExcerpt"> 
            <div className="title"> <p> {news.title} </p></div>
                <div>
                    <div className="user"> 
                    <p>{`By ${news.by} and Votes are: ${news.score}`}</p>
                    </div>
                    <div className="vote"><Vote newsId={news.id}/></div>
                </div>
        </div>
    )
}

export default NewsExcerpt;
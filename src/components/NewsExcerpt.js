import React from "react"
import Vote from "./Vote";

function NewsExcerpt({news}) {
    return (
        <div className="newsExcerpt">
        <div  className="row1"> 
            <div className="title">
                 <p>
                     <a href={news.url} title={news.title} target="_blank">{news.title}</a>
                </p>
            </div>
        </div>
        <div>
            <div className="row2">
                <div className="user"> 
                    <p>{`By ${news.by} and Votes are: ${news.score}`}</p>
                </div>
                <div className="vote"><Vote newsId={news.id}/></div>
            </div>
        </div>
    </div>
    )
}

export default NewsExcerpt;
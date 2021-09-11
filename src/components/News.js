import React from "react"
import { useSelector } from "react-redux";

const News = function () {
    const newsArray = useSelector(state => state.news.news)
    return (
        <>
        <div>
        { newsArray.length > 0 ?
            newsArray.map((news) => (
                <div key={news.id}> <p> {news.text} </p></div>
            )) : <p>No items was found</p>
        }
        </div>
        </>
    )
}

export default News;
import React from "react"
import NewsHeader from "./NewsHeader"
import News from "./News";

const NewsContainer = function () {
    return (
        <div id="container">
            <div id="header">
                <NewsHeader/>
            </div>
            <div id="news">
                <News/>
            </div>
        </div>
    )
}

export default NewsContainer;
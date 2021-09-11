import React, { useEffect } from "react"
import { maxItemIdFetched, itemsFetched, localItemFetched } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux"
import NewsHeader from "./NewsHeader"
import News from "./News";
import "./index.css";
const NewsContainer = function () {
    const dispatch = useDispatch();
    const maxId = useSelector(state => state.news.maxId)
    
    useEffect(() =>{
        dispatch(localItemFetched())
        dispatch(maxItemIdFetched())
        if(maxId != 0 ) dispatch(itemsFetched(maxId))
        
    },[maxId])
    return (
        <div className="container">
            <div>
                <NewsHeader/>
            </div>
            <div id="news">
                <News/>
            </div>
        </div>
    )
}

export default NewsContainer;
import React, { useEffect } from "react"
import { maxItemIdFetched, itemsFetched, localItemFetched } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux"
import Header from "./Header"
import Footer from "./Footer";
import News from "./News";
import "../assests/css/index.css";

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
                <Header/>
            </div>
            <div id="news">
                <News/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default NewsContainer;
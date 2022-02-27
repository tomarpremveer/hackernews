import React from "react";


function Paginator({
    newsCount, 
    pageClickHandler = (pageNumber) => { console.log(pageNumber)}
    }
    ){
        var pages = [];
        const noOfPages = Math.ceil(newsCount/10);

        for (let i = 1; i <= noOfPages; i++){
            pages.push(i);
        }
        
        return (
            <div className="pagination-row">
                {
                pages.length > 0 ? pages.map(page => (
                    <button
                    key ={page} 
                    className="pagination-element"
                    onClick={() => pageClickHandler(page)}
                    title={page}
                    >{page}</button>   
                    )) : null
                }
            </div>
        )
}


export default Paginator;
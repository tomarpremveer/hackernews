import React from "react";

function Paginator({newsCount}){
    const noOfPages = Math.ceil(newsCount/10);
    return (
        <div>
            `There will be ${noOfPages}`
        </div>
    )
}


export default Paginator;
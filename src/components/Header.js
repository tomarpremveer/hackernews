import React from "react";

const HeaderLinks =[
    {
        title:'',
        href:'',
    },
]

const Header = function () {
    return (
        <>
            <div className="header">
                <ul>
                    <li className="navbar-element">Top Stories</li>
                    <li className="navbar-element">Featured Stories</li>
                </ul>
            </div>
        </>
    )
}

export default Header;
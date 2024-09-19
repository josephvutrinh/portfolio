import React from "react";
import './styles.css';

function TopBar() {
    return (
        <nav className="bg-gradient-to-r from-purple-500 h-12 flex items-center top-0 left-0 right-0 z-50">
                <div className="container mx-auto flex justify-end">
                    <div>
                        <button className="px-3 text-white-100 font-thin ">Home</button>
                        <button className="px-3 text-white-100 font-thin">About</button>
                        <button className="px-3 text-white-100 font-thin">Projects</button>
                        <button className="px-3 text-white-100 font-thin">Contact</button>
                        <button className="px-3 text-white-100 font-thin">Resume</button>
                    </div>
                </div>
            </nav>
    )
}

export default TopBar
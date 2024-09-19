import React from "react";
import './styles.css';
import TopBar from './TopBar.jsx';

function HomePage() {
    return (
        <>
            <div class='hero' className="w-full h- flex flex-col h-screen text-center">
                <TopBar />
                <div className="flex-grow flex items-center justify-center px-10 py-10">
                    <div className="text-center font-mono font-thin">
                        <h1 className="text-6xl text-white-100">Hello, I'm <span className="text-purple-100">Joseph</span>.</h1>
                        <h1 className="text-base text-white-100">I am a full stack developer and currently a student at Virginia Tech. I am passionate about 
                        problem solving and designing with software.</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePage
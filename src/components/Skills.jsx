import React from "react";
import './styles.css';
import './box.css';
import JavaScriptImage from '../assets/JavaScriptImage.png';
import ReactImage from '../assets/ReactImage.png';
import TypeScriptImage from '../assets/TypeScriptImage.png';
import NodeJsImage from '../assets/NodeJsImage.png';
import TailwindImage from '../assets/TailwindImage.png';
import GitImage from '../assets/GitImage.png';
import VueImage from '../assets/VueImage.png';
import AngularImage from '../assets/AngularImage.png';
import MongoDBImage from '../assets/MongoDBImage.png';
import ExpressImage from '../assets/ExpressImage.png';

function Skills() {
    return (
        <div>
            <div>
                <h1 className="text-center text-6xl font-thin">Skills</h1>
                <h2 className="text-center text-2xl font-thin">Here are some of the technologies I have worked with.</h2>
            </div>
            <div className="flex flex-row justify-center px-5 py-5 mx-5 my-5">
                <div className="box">
                    <img src={JavaScriptImage} alt="JavaScript" className="object-contain rounded-xl"/>
                </div>
                <div className="box">
                    <img src={TypeScriptImage} alt="TypeScript" className="object-contain rounded-xl"/>
                </div>
                <div className="box">
                    <img src={ReactImage} alt="React" className="object-contain rounded-xl"/>
                </div>
                <div className="box">
                    <img src={NodeJsImage} alt="Node" className="w-full h-full object-contain rounded-xl"/>
                </div>
                <div className="box flex items-center justify-center">
                    <img src={TailwindImage} alt="Tailwind" className="max-w-full max-h-full object-contain rounded-xl"/>
                </div>
                <div className="box">
                    <img src={GitImage} alt="Git" className="object-contain rounded-xl"/>
                </div>
                <div className="box flex items-center justify-center">
                    <img src={VueImage} alt="Vue" className="object-contain rounded-xl"/>
                </div>
                <div className="box">
                    <img src={AngularImage} alt="Angular" className="object-contain rounded-xl"/>
                </div>
                <div className="box">
                    <img src={MongoDBImage} alt="MongoDB" className="object-contain rounded-xl"/>
                </div>
                <div className="box">
                    <img src={ExpressImage} alt="Express" className="object-contain rounded-xl"/>
                </div>
            </div>
        </div>
    )
}

export default Skills
import React from "react";
import './styles.css';
import Skills from './Skills.jsx';
import Projects from './Project.jsx';

function MainContentScreen() {
    return (
        <div>
            <div>
                <Skills />
                <Projects />
            </div>
        </div>
    ) 
}

export default MainContentScreen

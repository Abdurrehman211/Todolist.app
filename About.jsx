import React from "react";
import ReactDOM from "react-dom/client";
import "./about.css";
import Phone from "./images/phone-image.jpg";

function About(){
    return(
        <>
        <section id="About">
            <div className="block1">
            <h1 id="h1">About App</h1>
                <div className="mai1">
                    <div className="child1-1">
                    <p>A to-do list app is a digital tool designed to help users organize and manage their tasks efficiently. It allows users to create lists of tasks, set deadlines, prioritize items, and track progress.</p>
                        <h2 id="h2">To-Do List:</h2>
                        <ul>
                            <li><span>Grocery Shopping:</span> Buy milk, eggs, bread, and fruits.</li>
                            <li><span>Work Project: </span> Complete the draft report by Thursday.</li>
                            <li><span>Exercise: </span> 30-minute run in the morning.</li>
                            <li><span>Call Mom: </span>Check in and see how she's doing.</li>
                        </ul>
                    </div>
                    <div className="child2-1">
                        <div className="container">
                        <img src={Phone} alt="Phone" id="Phone-logo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default About;
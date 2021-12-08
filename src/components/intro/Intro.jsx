import "./intro.scss"
import {init} from "ityped"
import {useEffect, useRef} from "react"

export default function Intro() {
    const textRef =useRef()
    useEffect(()=>{
        init(textRef.current, {
            showCursor: true,
            strings: ["Embedded","Frontend"],
            backDelay: 1500,
            backSpeed: 60,
        });
    },[])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgcontainer">
                    <img src="./assets/Felix.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I am</h2>
                    <h1> Yap Xuan Yu, Felix</h1>
                    <h3> Software <span ref={textRef}></span> Engineer</h3>
                <a href="#portfolio">
                    <img src="./assets/arrow-down-sign-to-navigate.png" alt="" />
                </a>
                </div>
            </div>
        </div>
    )
}

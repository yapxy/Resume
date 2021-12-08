import "./education.scss"
import {useState} from 'react';

export default function Education() {
    const [currentSlide,setCurrentSlide]=useState(0)
    const data=[
        {
            id:1,
            icon:"",
            title:"Dummy",
            desc:"",
        },
        {
            id:2,
            icon: "./assets/education.png",
            title: "Education",
            desc:<div>
            <dl><dt><b>National University of Singapore (NUS)</b></dt><dt><b>Master of Science (Electrical and Computer Engineering)</b></dt>
            <p>Specialization: <b>Information Systems</b>
            <dt>Relevant Modules:</dt>
            <li>Visual Computing (Matlab)</li>
            <li>Neural Networks (Matlab)</li>
            <li>Deep Learning (Python)</li>
            <li>Pattern Recognition (Matlab)</li></p></dl>
            <dl><dt><b>Nanyang Technological University (NTU)</b></dt>
            <dt><b>Bachelors (Electrical and Electronic Engineering)</b></dt>
            <p>Relevant Modules:
            <li>Software Engineering</li>
            <li>Data Structure and Algorithms</li></p></dl>
            <b>Singapore Polytechnic (SP), Diploma in Aerospace Electronics</b>
            <li>Multi-Disciplinary Project, automation of aircraft battery refilling system (C#)</li>
        </div>,
        },
        {
            id:3,
            icon:"./assets/achievements.png",
            title:"Achievements",
            desc:<div>
            <li><b>Singapore Industry Scholar</b></li>
            <li><b>EEE Partial Financial Awardee</b></li>
            <li><b>National Youth Achievement Gold Awardee</b></li>
            <li><b>Engineering Show Silver Awardee, SP School of Electrical & Electronic Engineering</b></li>
            <li><b>Director's Honours Roll Awardee, SP School of Electrical & Electronic Engineering</b></li>
        </div>,
        },
        {
            id:4,
            icon:"./assets/leadership.png",
            title:"Leadership",
            desc:<div><li>Mediatek, <u>Welfare Committee Member</u></li>
            <li>NTU-Inline Skating Club, <u>Publicity & Publications Officer</u></li>
            <li>NTU-Hall 13, <u>Recreational Secretary</u>(Junior Common Room Committee)</li>
            <li>Soul Funky Club, <u>Member</u>(Dance)</li>
            <li>EEE Club Main Committee, <u>Chief Group Leader</u>(Efinity Camp)</li></div>,
        },
        {
            id:5,
            icon:"./assets/skills.png",
            title:"Skills",
            desc:<div>
            <li><b>Software Programming</b>: Python, Linux, C++, TCL, JavaScript, HTML, CSS, C#</li>
            <li><b>Software Applications</b>: Pycharm, Jupyter Notebook, Visual Studio Code, Anaconda, Innovus, Fusion Compiler, Arduino, React</li>
            </div>,
        },
        {
            id:6,
            icon:"./assets/exchange.png",
            title: "Exchange",
            desc:<div><b>University of Strathclyde</b>
            <li>Enhanced interpersonal skills when interacting with members from 2 different co-curricular activity groups and
                enhanced cross-cultural knowledge within mixed groups.
            </li>
            <li>Accomplished 4 academic modules with understanding of electromagnetism, semiconductor fundamentals, engineering
                project and microprocessors.
            </li>
            </div>,
        },
    ]
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide>0? currentSlide-1 : 4) :
        setCurrentSlide(currentSlide<data.length-2?currentSlide+1:0);
    }
    return (
        <div className="education" id="education">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftcontainer">
                                <div className="imgcontainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/right-arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/right-arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}

import "./works.scss";
import {useState, useEffect} from 'react'

export default function Works() {
    const [currentSlide,setCurrentSlide]=useState(0)
    const data=[
        {
            id: 1,
            icon: "",
            title: "Dummy",
            desc:"",
            img: "",
        },
        {
            id: 2,
            icon:"./assets/cpu.png",
            title:"6nm smartphone chip design",
            desc:<div>
                <dl><dt><b>Mediatek Project 1: 6nm Smartphone Chip Design</b> (Team of 4 members)</dt>
            <li>Studied and resolved TSMC Chip Integrity Checker issues for N6 process.</li>
            <li>Applied <b>Innovus Programming</b> for <i>Physical Design</i> Owners to resolve issues.</li>
            <li>Successfully reduced runtime from 2 days to 2 hours upon script implementation.</li>
            <li>Cleaned physical violations of chip to speed up runtime of flow.</li></dl></div>,
        },
        {
            id:3,
            icon:"./assets/cpu.png",
            title: "6nm smartphone chip design",
            desc:<div><dl><dt><b>Mediatek Project 2: 6nm Smartphone Chip Design</b> (Team of 4 members)</dt>
            <li>Successfully designed visual processing chip unit.</li>
            <li>Contributed to hone and resolve power issue in artificial intelligence processing unit.</li></dl></div>,
        },
        {
            id: 4,
            icon:"./assets/cpu.png",
            title:"5nm smartphone chip design",
            desc:<div><dl><dt><b>Mediatek Project 3: 5nm Smartphone Chip Design</b> (Team of 4 members)</dt>
            <li>Responsible for designing APU complex block in artificial intelligence processing unit that integrated machine
                ,deep learning accelerator and visual processing unit</li>
            <li>Studied and resolved TSMC Chip Integrity Checker issues and Physical violations for N5 process during early phase of
                project to pull in schedule</li>
            <li>Improved timing results for Root complex unit in artificial intelligence processing unit</li>
            <li>Successfully achieved 8% power improvement and increased 10% utilization rate of artificial intelligence processing
                unit.</li></dl></div>,
        },
        {
            id:5,
            icon:"./assets/cpu.png",
            title: "4nm smartphone chip design",
            desc:<div><dl><dt><b>Mediatek Project 4: 4nm Smartphone Chip Design</b> (Team of 4 members)</dt>
            <li>Execute new N4 process</li>
            <li>Responsible for Neural Complex unit and APU complex unit in AI processing unit.</li>
            <li>Implemented <i>Neural Vision Enabler</i> to resolve physical violations and TSMC Chip integrity checker violations.</li>
            <li>Kickstarted Neural Complex unit and mentored new staff to take over neural complex unit.</li></dl></div>,
        },
        {
            id:6,
            icon:"./assets/cpu.png",
            title: "Physical Design Intern",
            desc: <div><dl><dt><b>Mediatek Inc.</b>, <u>Physical Design Intern</u></dt>
            <li>Prepared scripts to resolve user issues in Innovus (TCL) and Linux</li>
            <li>Assisted <u>Design Owners</u> to prepare scripts to improve project schedules.</li></dl></div>,
        },
    ]
    const handleClick = (way) => {
        way === "left" ? setCurrentSlide(currentSlide>0? currentSlide-1 : 4) :
        setCurrentSlide(currentSlide<data.length-2?currentSlide+1:0);
    }
    const [fadeProp, setFadeProp] = useState('fade-in');

    useEffect(()=> {
        const timeout = setInterval(() => {
            if (fadeProp === 'fade-in'){
                setFadeProp('fade-out')
            } else {
                setFadeProp ('fade-in')
            }
        },8000);
        return () => clearInterval(timeout)
    },[fadeProp])
    return (
        <div className ="works" id="works">
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map((d)=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftcontainer">
                                <div className="imgcontainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2><div className={fadeProp}>(Physical Design)</div>
                                <p>{d.desc}</p>
                            </div>
                        </div>
                        {/*<div className="right">
                            <img src="" alt="" />
                </div>*/}
                    </div>
                </div>))}
            </div>
            <img src="assets/right-arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/right-arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    )
}
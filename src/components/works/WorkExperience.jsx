import React from "react";
import "../App.css";

function Experience() {
    return (
        <div className="Section">
            <h4>Work Experience and Projects</h4>
            <dl><dt><b>Mediatek Inc.</b>, <u>Physical Design Engineer</u></dt>
            <li>Responsible for Physical design of integrated circuits for <u>artificial intelligence</u> processing unit using
            <u>software programming and tools</u> (e.g. Innovus (Cadence), Primetime(Sypnosys)).</li>
            <li>Utilized <b>software scripting and programming</b> to resolve issues found from debugging log files
            to improve chip performance.</li>
            <li>Contributed to 4 Smartphone Projects in planning, executing and implementing.</li></dl>
            <dl><dt><b>Mediatek Project 1: 6nm Smartphone Chip Design</b> (Team of 4 members)</dt>
            <li>Studied and resolved TSMC Chip Integrity Checker issues for N6 process.</li>
            <li>Applied <b>Innovus Programming</b> for <i>Physical Design</i> Owners to resolve issues.</li>
            <li>Successfully reduced runtime from 2 days to 2 hours upon script implementation.</li>
            <li>Cleaned physical violations of chip to speed up runtime of flow.</li></dl>
            <dl><dt><b>Mediatek Project 2: 6nm Smartphone Chip Design</b> (Team of 4 members)</dt>
            <li>Successfully designed visual processing chip unit.</li>
            <li>Contributed to hone and resolve power issue in artificial intelligence processing unit.</li></dl>
            <dl><dt><b>Mediatek Project 3: 5nm Smartphone Chip Design</b> (Team of 4 members)</dt>
            <li>Responsible for designing APU complex block in artificial intelligence processing unit that integrated machine
                ,deep learning accelerator and visual processing unit</li>
            <li>Studied and resolved TSMC Chip Integrity Checker issues and Physical violations for N5 process during early phase of
                project to pull in schedule</li>
            <li>Improved timing results for Root complex unit in artificial intelligence processing unit</li>
            <li>Successfully achieved 8% power improvement and increased 10% utilization rate of artificial intelligence processing
                unit.</li></dl>
            <dl><dt><b>Mediatek Project 4: 4nm Smartphone Chip Design</b> (Team of 4 members)</dt>
            <li>Execute new N4 process</li>
            <li>Responsible for Neural Complex unit and APU complex unit in AI processing unit.</li>
            <li>Implemented <i>Neural Vision Enabler</i> to resolve physical violations and TSMC Chip integrity checker violations.</li>
            <li>Kickstarted Neural Complex unit and mentored new staff to take over neural complex unit.</li></dl>
            <dl><dt><b>Mediatek Inc.</b>, <u>Physical Design Intern</u></dt>
            <li>Prepared scripts to resolve user issues in Innovus (TCL) and Linux</li>
            <li>Assisted <u>Design Owners</u> to prepare scripts to improve project schedules.</li></dl>
        </div>
    );
}
export default Experience;
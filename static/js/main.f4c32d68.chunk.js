(this.webpackJsonpresume2=this.webpackJsonpresume2||[]).push([[0],{18:function(e,i,t){},19:function(e,i,t){},25:function(e,i,t){},26:function(e,i,t){},27:function(e,i,t){},28:function(e,i,t){},29:function(e,i,t){},30:function(e,i,t){},31:function(e,i,t){},32:function(e,i,t){},33:function(e,i,t){"use strict";t.r(i);var c=t(1),s=t(8),n=t.n(s),r=t(2),l=(t(18),t(19),t(46)),a=t(47),j=t(0);function d(e){var i=e.menuOpen,t=e.setMenuOpen;return Object(j.jsx)("div",{className:"topbar "+(i&&"active"),children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsxs)("div",{className:"left",children:[Object(j.jsx)("a",{href:"#intro",className:"logo",children:"Resum\xe9"}),Object(j.jsxs)("div",{className:"itemcontainer",children:[Object(j.jsx)(l.a,{className:"icon"}),Object(j.jsx)("span",{children:"+65 94309790"})]}),Object(j.jsxs)("div",{className:"itemcontainter",children:[Object(j.jsx)(a.a,{className:"icon"}),Object(j.jsx)("span",{children:"felixyapofficial@gmail.com"})]})]}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"hamburger",onClick:function(){return t(!i)},children:[Object(j.jsx)("span",{className:"line1"}),Object(j.jsx)("span",{className:"line2"}),Object(j.jsx)("span",{className:"line3"})]})})]})})}t(25);var o=t(10);function h(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){Object(o.a)(e.current,{showCursor:!0,strings:["Embedded","Frontend"],backDelay:1500,backSpeed:60})}),[]),Object(j.jsxs)("div",{className:"intro",id:"intro",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("div",{className:"imgcontainer",children:Object(j.jsx)("img",{src:"./assets/Felix.png",alt:""})})}),Object(j.jsx)("div",{className:"right",children:Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)("h2",{children:"Hi there, I am"}),Object(j.jsx)("h1",{children:" Yap Xuan Yu, Felix"}),Object(j.jsxs)("h3",{children:[" Software ",Object(j.jsx)("span",{ref:e})," Engineer"]}),Object(j.jsx)("a",{href:"#education",children:Object(j.jsx)("img",{src:"./assets/arrow-down-sign-to-navigate.png",alt:""})})]})})]})}t(26),t(27);function b(e){var i=e.id,t=e.title,c=e.active,s=e.setSelected;return Object(j.jsx)("li",{className:c?"portfolioList active":"portfolioList",onClick:function(){return s(i)},children:t})}var O=[{id:1,title:"Social Media App",img:""},{id:2,title:"Rampa UI Design",img:""}],u=[{id:1,title:"Web Social Media App",img:""}],m=[{id:1,title:"Web Social Media App",img:""}],x=[{id:1,title:"Web Social Media App",img:""}],p=[{id:1,title:"Web Social Media App",img:""}];function g(){var e=Object(c.useState)("featured"),i=Object(r.a)(e,2),t=i[0],s=i[1],n=Object(c.useState)([]),l=Object(r.a)(n,2),a=l[0],d=l[1];return Object(c.useEffect)((function(){switch(t){case"featured":default:d(O);break;case"web":d(u);break;case"mobile":d(m);break;case"design":d(x);break;case"content":d(p)}}),[t]),Object(j.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(j.jsx)("h1",{children:"Portfolio"}),Object(j.jsx)("ul",{children:[{id:"featured",title:"Featured"},{id:"web",title:"Web App"},{id:"mobile",title:"Mobile App"},{id:"design",title:"Design"},{id:"content",title:"Content"}].map((function(e){return Object(j.jsx)(b,{title:e.title,active:t===e.id,setSelected:s,id:e.id})}))}),Object(j.jsx)("div",{className:"container",children:a.map((function(e){return Object(j.jsxs)("div",{className:"item",children:[Object(j.jsx)("img",{src:e.img,alt:""}),Object(j.jsx)("h3",{children:e.title})]})}))})]})}t(28);function f(){var e=Object(c.useState)(0),i=Object(r.a)(e,2),t=i[0],s=i[1],n=[{id:1,icon:"",title:"Dummy",desc:"",img:""},{id:2,icon:"./assets/cpu.png",title:"6nm smartphone chip design",desc:Object(j.jsx)("div",{children:Object(j.jsxs)("dl",{children:[Object(j.jsxs)("dt",{children:[Object(j.jsx)("b",{children:"Mediatek Project 1: 6nm Smartphone Chip Design"})," (Team of 4 members)"]}),Object(j.jsx)("li",{children:"Studied and resolved TSMC Chip Integrity Checker issues for N6 process."}),Object(j.jsxs)("li",{children:["Applied ",Object(j.jsx)("b",{children:"Innovus Programming"})," for ",Object(j.jsx)("i",{children:"Physical Design"})," Owners to resolve issues."]}),Object(j.jsx)("li",{children:"Successfully reduced runtime from 2 days to 2 hours upon script implementation."}),Object(j.jsx)("li",{children:"Cleaned physical violations of chip to speed up runtime of flow."})]})})},{id:3,icon:"./assets/cpu.png",title:"6nm smartphone chip design",desc:Object(j.jsx)("div",{children:Object(j.jsxs)("dl",{children:[Object(j.jsxs)("dt",{children:[Object(j.jsx)("b",{children:"Mediatek Project 2: 6nm Smartphone Chip Design"})," (Team of 4 members)"]}),Object(j.jsx)("li",{children:"Successfully designed visual processing chip unit."}),Object(j.jsx)("li",{children:"Contributed to hone and resolve power issue in artificial intelligence processing unit."})]})})},{id:4,icon:"./assets/cpu.png",title:"5nm smartphone chip design",desc:Object(j.jsx)("div",{children:Object(j.jsxs)("dl",{children:[Object(j.jsxs)("dt",{children:[Object(j.jsx)("b",{children:"Mediatek Project 3: 5nm Smartphone Chip Design"})," (Team of 4 members)"]}),Object(j.jsx)("li",{children:"Responsible for designing APU complex block in artificial intelligence processing unit that integrated machine ,deep learning accelerator and visual processing unit"}),Object(j.jsx)("li",{children:"Studied and resolved TSMC Chip Integrity Checker issues and Physical violations for N5 process during early phase of project to pull in schedule"}),Object(j.jsx)("li",{children:"Improved timing results for Root complex unit in artificial intelligence processing unit"}),Object(j.jsx)("li",{children:"Successfully achieved 8% power improvement and increased 10% utilization rate of artificial intelligence processing unit."})]})})},{id:5,icon:"./assets/cpu.png",title:"4nm smartphone chip design",desc:Object(j.jsx)("div",{children:Object(j.jsxs)("dl",{children:[Object(j.jsxs)("dt",{children:[Object(j.jsx)("b",{children:"Mediatek Project 4: 4nm Smartphone Chip Design"})," (Team of 4 members)"]}),Object(j.jsx)("li",{children:"Execute new N4 process"}),Object(j.jsx)("li",{children:"Responsible for Neural Complex unit and APU complex unit in AI processing unit."}),Object(j.jsxs)("li",{children:["Implemented ",Object(j.jsx)("i",{children:"Neural Vision Enabler"})," to resolve physical violations and TSMC Chip integrity checker violations."]}),Object(j.jsx)("li",{children:"Kickstarted Neural Complex unit and mentored new staff to take over neural complex unit."})]})})},{id:6,icon:"./assets/cpu.png",title:"Physical Design Intern",desc:Object(j.jsx)("div",{children:Object(j.jsxs)("dl",{children:[Object(j.jsxs)("dt",{children:[Object(j.jsx)("b",{children:"Mediatek Inc."}),", ",Object(j.jsx)("u",{children:"Physical Design Intern"})]}),Object(j.jsx)("li",{children:"Prepared scripts to resolve user issues in Innovus (TCL) and Linux"}),Object(j.jsxs)("li",{children:["Assisted ",Object(j.jsx)("u",{children:"Design Owners"})," to prepare scripts to improve project schedules."]})]})})}],l=function(e){s("left"===e?t>0?t-1:4:t<n.length-2?t+1:0)},a=Object(c.useState)("fade-in"),d=Object(r.a)(a,2),o=d[0],h=d[1];return Object(c.useEffect)((function(){var e=setInterval((function(){h("fade-in"===o?"fade-out":"fade-in")}),8e3);return function(){return clearInterval(e)}}),[o]),Object(j.jsxs)("div",{className:"works",id:"works",children:[Object(j.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*t,"vw)")},children:n.map((function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"item",children:Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"leftcontainer",children:[Object(j.jsx)("div",{className:"imgcontainer",children:Object(j.jsx)("img",{src:e.icon,alt:""})}),Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("div",{className:o,children:"(Physical Design)"}),Object(j.jsx)("p",{children:e.desc})]})})})})}))}),Object(j.jsx)("img",{src:"assets/right-arrow.png",className:"arrow left",alt:"",onClick:function(){return l("left")}}),Object(j.jsx)("img",{src:"assets/right-arrow.png",className:"arrow right",alt:"",onClick:function(){return l("right")}})]})}t(29);function v(){return Object(j.jsxs)("div",{className:"testimonials",id:"testimonials",children:[Object(j.jsx)("h1",{children:"Testimonials"}),Object(j.jsx)("div",{className:"container",children:[{id:1,name:"Choon Kian",title:"Skate mentor",img:"./assets/CK.png",icon:"./assets/skates.png",desc:"Felix needs to improve more on his form when doing wheeling"},{id:2,name:"Sharlene",title:"Girlfriend",img:"./assets/Sharlene.png",icon:"./assets/love.png",desc:"Felix is a hardworking and dedicated boyfriend who enjoys serving me every weekend",featured:!0},{id:3,name:"Jake",title:"Fellow Skater",img:"./assets/Jake.png",icon:"./assets/skates.png",desc:"Felix loves to skate during odd hours, it makes me motivated to join him at times"}].map((function(e){return Object(j.jsxs)("div",{className:e.featured?"card featured":"card",children:[Object(j.jsxs)("div",{className:"top",children:[Object(j.jsx)("img",{src:"assets/arrow-right.png",className:"left",alt:""}),Object(j.jsx)("img",{src:e.img,className:"user",alt:""}),Object(j.jsx)("img",{src:e.icon,className:"right",alt:""})]}),Object(j.jsx)("div",{className:"center",children:e.desc}),Object(j.jsxs)("div",{className:"bottom",children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("h4",{children:e.title})]})]})}))})]})}t(30);function N(){var e=Object(c.useState)(!1),i=Object(r.a)(e,2),t=i[0],s=i[1];return Object(j.jsxs)("div",{className:"contact",id:"contact",children:[Object(j.jsx)("div",{className:"left",children:Object(j.jsx)("img",{src:"assets/shake-hand.png",alt:""})}),Object(j.jsxs)("div",{className:"right",children:[Object(j.jsx)("h2",{children:"Contact"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(!0)},children:[Object(j.jsx)("input",{type:"text",placeholder:"Email"}),Object(j.jsx)("textarea",{placeholder:"Message"}),Object(j.jsx)("button",{type:"",children:"send"}),t&&Object(j.jsx)("span",{children:"Thanks, I will reply ASAP :)"})]})]})]})}t(31);function S(e){var i=e.menuOpen,t=e.setMenuOpen;return Object(j.jsx)("div",{className:"menu "+(i&&"active"),children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{onClick:function(){return t(!1)},children:Object(j.jsx)("a",{href:"#intro",children:"Home"})}),Object(j.jsx)("li",{onClick:function(){return t(!1)},children:Object(j.jsx)("a",{href:"#education",children:"background"})}),Object(j.jsx)("li",{onClick:function(){return t(!1)},children:Object(j.jsx)("a",{href:"#portfolio",children:"portfolio"})}),Object(j.jsx)("li",{onClick:function(){return t(!1)},children:Object(j.jsx)("a",{href:"#works",children:"works"})}),Object(j.jsx)("li",{onClick:function(){return t(!1)},children:Object(j.jsx)("a",{href:"#testimonials",children:"testimonials"})}),Object(j.jsx)("li",{onClick:function(){return t(!1)},children:Object(j.jsx)("a",{href:"#contact",children:"contact"})})]})})}t(32);function k(){var e=Object(c.useState)(0),i=Object(r.a)(e,2),t=i[0],s=i[1],n=[{id:1,icon:"",title:"Dummy",desc:""},{id:2,icon:"./assets/education.png",title:"Education",desc:Object(j.jsxs)("div",{children:[Object(j.jsxs)("dl",{children:[Object(j.jsx)("dt",{children:Object(j.jsx)("b",{children:"National University of Singapore (NUS)"})}),Object(j.jsx)("dt",{children:Object(j.jsx)("b",{children:"Master of Science (Electrical and Computer Engineering)"})}),Object(j.jsxs)("p",{children:["Specialization: ",Object(j.jsx)("b",{children:"Information Systems"}),Object(j.jsx)("dt",{children:"Relevant Modules:"}),Object(j.jsx)("li",{children:"Visual Computing (Matlab)"}),Object(j.jsx)("li",{children:"Neural Networks (Matlab)"}),Object(j.jsx)("li",{children:"Deep Learning (Python)"}),Object(j.jsx)("li",{children:"Pattern Recognition (Matlab)"})]})]}),Object(j.jsxs)("dl",{children:[Object(j.jsx)("dt",{children:Object(j.jsx)("b",{children:"Nanyang Technological University (NTU)"})}),Object(j.jsx)("dt",{children:Object(j.jsx)("b",{children:"Bachelors (Electrical and Electronic Engineering)"})}),Object(j.jsxs)("p",{children:["Relevant Modules:",Object(j.jsx)("li",{children:"Software Engineering"}),Object(j.jsx)("li",{children:"Data Structure and Algorithms"})]})]}),Object(j.jsx)("b",{children:"Singapore Polytechnic (SP), Diploma in Aerospace Electronics"}),Object(j.jsx)("li",{children:"Multi-Disciplinary Project, automation of aircraft battery refilling system (C#)"})]})},{id:3,icon:"./assets/achievements.png",title:"Achievements",desc:Object(j.jsxs)("div",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("b",{children:"Singapore Industry Scholar"})}),Object(j.jsx)("li",{children:Object(j.jsx)("b",{children:"EEE Partial Financial Awardee"})}),Object(j.jsx)("li",{children:Object(j.jsx)("b",{children:"National Youth Achievement Gold Awardee"})}),Object(j.jsx)("li",{children:Object(j.jsx)("b",{children:"Engineering Show Silver Awardee, SP School of Electrical & Electronic Engineering"})}),Object(j.jsx)("li",{children:Object(j.jsx)("b",{children:"Director's Honours Roll Awardee, SP School of Electrical & Electronic Engineering"})})]})},{id:4,icon:"./assets/leadership.png",title:"Leadership",desc:Object(j.jsxs)("div",{children:[Object(j.jsxs)("li",{children:["Mediatek, ",Object(j.jsx)("u",{children:"Welfare Committee Member"})]}),Object(j.jsxs)("li",{children:["NTU-Inline Skating Club, ",Object(j.jsx)("u",{children:"Publicity & Publications Officer"})]}),Object(j.jsxs)("li",{children:["NTU-Hall 13, ",Object(j.jsx)("u",{children:"Recreational Secretary"}),"(Junior Common Room Committee)"]}),Object(j.jsxs)("li",{children:["Soul Funky Club, ",Object(j.jsx)("u",{children:"Member"}),"(Dance)"]}),Object(j.jsxs)("li",{children:["EEE Club Main Committee, ",Object(j.jsx)("u",{children:"Chief Group Leader"}),"(Efinity Camp)"]})]})},{id:5,icon:"./assets/skills.png",title:"Skills",desc:Object(j.jsxs)("div",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Software Programming"}),": Python, Linux, C++, TCL, JavaScript, HTML, CSS, C#"]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("b",{children:"Software Applications"}),": Pycharm, Jupyter Notebook, Visual Studio Code, Anaconda, Innovus, Fusion Compiler, Arduino, React"]})]})},{id:6,icon:"./assets/exchange.png",title:"Exchange",desc:Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"University of Strathclyde"}),Object(j.jsx)("li",{children:"Enhanced interpersonal skills when interacting with members from 2 different co-curricular activity groups and enhanced cross-cultural knowledge within mixed groups."}),Object(j.jsx)("li",{children:"Accomplished 4 academic modules with understanding of electromagnetism, semiconductor fundamentals, engineering project and microprocessors."})]})}],l=function(e){s("left"===e?t>0?t-1:4:t<n.length-2?t+1:0)};return Object(j.jsxs)("div",{className:"education",id:"education",children:[Object(j.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*t,"vw)")},children:n.map((function(e){return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"item",children:Object(j.jsx)("div",{className:"left",children:Object(j.jsxs)("div",{className:"leftcontainer",children:[Object(j.jsx)("div",{className:"imgcontainer",children:Object(j.jsx)("img",{src:e.icon,alt:""})}),Object(j.jsx)("h2",{children:e.title}),Object(j.jsx)("p",{children:e.desc})]})})})})}))}),Object(j.jsx)("img",{src:"assets/right-arrow.png",className:"arrow left",alt:"",onClick:function(){return l("left")}}),Object(j.jsx)("img",{src:"assets/right-arrow.png",className:"arrow right",alt:"",onClick:function(){return l("right")}}),Object(j.jsx)("a",{href:"#portfolio",children:Object(j.jsx)("img",{src:"./assets/arrow-down-sign-to-navigate.png",alt:""})})]})}var w=function(){var e=Object(c.useState)(!1),i=Object(r.a)(e,2),t=i[0],s=i[1];return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)(d,{menuOpen:t,setMenuOpen:s}),Object(j.jsx)(S,{menuOpen:t,setMenuOpen:s}),Object(j.jsxs)("div",{className:"sections",children:[Object(j.jsx)(h,{}),Object(j.jsx)(k,{}),Object(j.jsx)(g,{}),Object(j.jsx)(f,{}),Object(j.jsx)(v,{}),Object(j.jsx)(N,{})]})]})};n.a.render(Object(j.jsx)(w,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.f4c32d68.chunk.js.map
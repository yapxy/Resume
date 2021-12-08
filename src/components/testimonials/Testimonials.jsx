import "./testimonials.scss"

export default function Testimonials() {
    const data =[
    {
        id: 1,
        name: "Choon Kian",
        title: "Skate mentor",
        img:"./assets/CK.png",
        icon:"./assets/skates.png",
        desc:"Felix needs to improve more on his form when doing wheeling",
    },
    {
        id:2,
        name:"Sharlene",
        title:"Girlfriend",
        img:"./assets/Sharlene.png",
        icon:"./assets/love.png",
        desc:"Felix is a hardworking and dedicated boyfriend who enjoys serving me every weekend",
        featured: true,
    },
    {
        id:3,
        name:"Jake",
        title:"Fellow Skater",
        img:"./assets/Jake.png",
        icon:"./assets/skates.png",
        desc:"Felix loves to skate during odd hours, it makes me motivated to join him at times",
    },
];
    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map((d)=>(
                <div className={d.featured? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/arrow-right.png" className="left" alt="" />
                        <img src={d.img} className="user" alt="" />
                        <img src={d.icon} className="right" alt="" />
                    </div>
                    <div className="center">{d.desc}</div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>))}
            </div>
        </div>
    )
}

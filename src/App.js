import "./App.css";
import emo from "../src/assets/img1.png";
function App() {

  return (
    
    <div className="App">
      <Header />
      <div className="Cards-container">

        {employees.map((dveloper)=>(
          <Card
            name={dveloper.Name}
            title={dveloper.Title}
            code={dveloper.Code}
            Skills={dveloper.Skills}
            img={dveloper.image}
          />
        ))}
     
      </div>
    </div>
  );
}

const employees = [
  {
    Name: "Jonas",
    Title: "Frontend Developer",
    Code: "E1",
    Skills: ["React", "JS", "Html", "Css"],
    emailAddress: "fe@gmail.com",
    image:
      "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zMjgtMzY2LXRvbmctMDhfMS5qcGc.jpg.jpg",
  },
  {
    Name: "Morgan",
    Title: "Backend Developer",
    Code: "E2",
    Skills: ["React", "Node", "Php"],
    emailAddress: "be@gmail.com",
    image:
      "https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg",
  },
  {
    Name: "Rayan",
    Title: "Developer",
    Code: "E3",
    Skills: ["React", "JS", "Node", "Php"],
    emailAddress: "fs@gmail.com",
    image:
      "https://media.istockphoto.com/id/1351060234/photo/shot-of-a-young-businessman-in-his-office.jpg?s=612x612&w=0&k=20&c=i-09UeAMza1Li0cEY2TOVzlkrRMyu49e0j4WW8chw0M=",
  },
];
function Header() {
  return (
    <div className="header">
      <h1>Our Technical Team</h1>
    </div>
  );
}
function Card({name , title , Skills , code , img}) {
    // console.log(Skills);
  return (
    <div className="card">
      <Avatar photo={img} name={name} />
      <Intro name={name.Name} title={title.Title} code={code.Code} />
      <SkillsList performance={Skills} />
     {/* { console.log(Skills)} */}
    </div>
  );

}

function Avatar({photo , name}) {
  console.log(photo,name)
  return (
    <div className="avatar">
      <div className="avatar-img">
        <img src={photo} alt={name} height="190px" />
      </div>
    </div>
  );
}

function Intro(props) {
  return (
    <div className="content">
      <h1>{props.name}</h1>
      <h3>{props.code}</h3>
      <h2>{props.title}</h2>
      <p>
        A full-stack developer is a developer or engineer who can build both the
        front end and the back end of a website. The front end (the parts of a
        website a user sees and interacts with) and the back end (the
        behind-the-scenes data storage and processing) require different skill
        sets.
      </p>
    </div>
  );
}
function SkillsList({performance}) {
  console.log(performance)
  return (
    <div className="skills">
          {performance.map((singleSkill)=>(
            <Skill myskill={singleSkill} emothon={emo}/>
          ))}
      {/* <Skill myskill={performance[0]} emothon={emo} />
      <Skill myskill={performance[1]} emothon={emo} />
      <Skill myskill={performance[2]} emothon={emo} />
      <Skill myskill={performance[3]} emothon={emo} /> */}
      {/* <Skill myskill={props.skills[0]}/>
      <Skill myskill={props.skills[1]} />
      <Skill myskill={props.skills[2]} />
      <Skill myskill={props.skills[3]} />  */}
 
    </div>
  );
}
function Skill({myskill , emothon}) {
  console.log(myskill);
  return (
    <div className="skill">
      <span>{myskill}</span>
      <div className="skill-img">
        <img src={emothon} alt={myskill} />
      </div>
    </div>
  );
}
export default App;

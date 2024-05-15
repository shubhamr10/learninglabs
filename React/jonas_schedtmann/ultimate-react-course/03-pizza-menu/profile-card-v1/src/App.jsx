import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Armur.png" alt="pic" />;
}

function Intro() {
  return (
    <p>
      Hi, I am Armur. I am a web developer. I have experience in HTML, CSS, and
      JavaScript. I am a quick learner and a team player. I am looking for a job
      as a web developer.
    </p>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML5🫷" bgColor="red" txtColor="white" />
      <Skill skill="CSS3" bgColor="green" txtColor="white" />
      <Skill skill="JavaScript🫷" bgColor="blue" txtColor="white" />
      <Skill skill="React🫷" bgColor="yellow" txtColor="blue" />
      <Skill skill="Node🫷" bgColor="violet" txtColor="white" />
      <Skill skill="Go🫷" bgColor="indigo" txtColor="white" />
      <Skill skill="Java🫷" bgColor="red" txtColor="white" />
      <Skill skill="C🫷" bgColor="red" txtColor="white" />
      <Skill skill="C++🫷" bgColor="red" txtColor="white" />
    </div>
  );
}

const Skill = (props) => {
  return (
    <div
      style={{ backgroundColor: props.bgColor, color: props.txtColor }}
      className="skill"
    >
      {props.skill}
    </div>
  );
};

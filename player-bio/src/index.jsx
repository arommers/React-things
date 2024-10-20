import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <div className="profile">
        <Avatar />
        <PlayerName name="Adri Rommers" />
      </div>
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Longpig.png" alt="Adri Rommers" />;
}

function PlayerName({ name }) {
  return <h1 className="player-name">{name}</h1>;
}

function Intro() {
  return (
    <div>
      <p>Loves to program, play video games, and take naps with my cat</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="cats " emoji="🐈" color="pink" />
      <Skill skill="naps " emoji="😴" color="lightblue" />
      <Skill skill="games " emoji="🎮" color="lightgreen" />
      <Skill skill="horror " emoji="👻" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

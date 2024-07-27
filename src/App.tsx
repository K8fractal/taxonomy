import { useState } from "react";
import "./App.css";
import { exampleOrganisms } from "./organisms/organism";
import { Question } from "./ui/Question";
import { randomIndex } from "./domain/randomElement";

function App() {
  const [ai, setAi] = useState(0);
  const [bi, setBi] = useState(1);

  const nextQuestion = () => {
    setAi(randomIndex(exampleOrganisms.length));
    setBi(randomIndex(exampleOrganisms.length));
  };

  return (
    <>
      <h1>Taxonomy Quiz</h1>
      <p>
        <a
          href="https://en.wikipedia.org/wiki/Taxonomy_(biology)"
          target="_blank"
        >
          What is Taxonomy?
        </a>
      </p>
      <div className="card">
        <p>
          What is the smallest classification that has both of these organisms?
        </p>
        <Question a={exampleOrganisms[ai]} b={exampleOrganisms[bi]} />
      </div>
      <button onClick={() => nextQuestion()}>New Question</button>
    </>
  );
}

export default App;

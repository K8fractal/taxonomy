import "./App.css";

function App() {
  return (
    <>
      <h1>Taxonomy Quiz</h1>
      <div className="card">
        <button onClick={() => alert("Coming soon!")}>New Game</button>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Taxonomy_(biology)"
            target="_blank"
          >
            What is Taxonomy?
          </a>
        </p>
      </div>
    </>
  );
}

export default App;

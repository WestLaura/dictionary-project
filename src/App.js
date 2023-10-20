import logo from "./logo.jpg";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="badger" />
        </main>
        <footer className="text-center">
          Coded by Laura W, open-sourced on
          <a
            href="https://github.com/WestLaura/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            Github{" "}
          </a>{" "}
          and hosted on
          <a
            href="https://sweet-hamster-ce0bd2.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

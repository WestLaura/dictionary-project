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
        <footer className="text-center">Coded by Laura W</footer>
      </div>
    </div>
  );
}

export default App;

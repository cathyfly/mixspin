import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import logo from "./logo.svg";
import Voicesearch from "./components/voicesearch.js";
import Mixcloud from "./components/mixcloud.js"





function App() {

  return (
    <div className="App">
       
      <header className="App-header">
      </header>
      <Voicesearch />
      <Mixcloud />
    </div>
  );
}

export default App;

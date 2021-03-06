import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect, Component } from "react";
/*import Button from "react-bootstrap/Button";*/
import logo from "./logo.svg";
import Voicesearch from "./components/voicesearch.js";
import Mixcloud from "./components/mixcloud.js";
import Genrestext from "./components/genrestext.js";
import Blob from "./components/blob.js";




class App extends Component {

  constructor(props){
    super(props);
    var genreHandler = this.genreHandler.bind(this);
    //var genre = "";
    this.state = {genre:""};
  }
  
    //const [genre, setGenre] = useState("");
    genreHandler(newGenre)
    {console.log(newGenre)
    this.setState({genre:newGenre});}; //object this.state - holds the current state of the component ie. the genre

  render() {

    document.body.style.background = "black";
    var genreHandler = this.genreHandler; 
    //var genre = this.genre;

    //pass genre to mixcloud "child" component 
   return (
     <div className="App">
       <Blob />
       <Genrestext />

       <Voicesearch genreHandler={genreHandler.bind(this)} />

       <Mixcloud genre={this.state.genre} />
     </div>
   );
}
}

export default App;

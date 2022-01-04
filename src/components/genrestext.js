import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const texts = [
  "Spin",
  "Pop",
  "Hip-hop",
  "Spin",
  "House",
  "Ukg",
  "Spin",
  "Hyperpop",
  "Funk",
  "Chillout",
  "Spin",
  "Jungle",
  "90s",
  "Spin",
  "Gqom",
  "Techno",
  "Reggae",
  "Trance",
  "Spin",
  "Soul",
  "Disco",
];

class Genrestext extends Component {
  state = {
    textIndex: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        
        textIndex: this.state.textIndex + 1,
        
      });
    }, 4000);
    
  }

  render() {
    return (
      
          <div  id="genrestext">
            <React.Fragment>
              <section className="inline">
                Mix
                <ReactTextTransition
                  text={texts[this.state.textIndex % texts.length]}
                  springConfig={presets.gentle}
                  style={{ margin: "0 4px" }}
                  inline
                />
              </section>
            </React.Fragment>
            <h5> MixSpin | Find something new to listen to </h5>
            <h6> Click the button | Say "Play" and a genre </h6>
         
      </div>
    );
  }
}

export default Genrestext;

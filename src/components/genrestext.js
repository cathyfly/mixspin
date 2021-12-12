import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const texts = [
  "pop",
  "hip hop",
  "house",
  "ukg",
  "hyperpop",
  "funk",
  "chillout",
  "jungle",
  "90s",
  "gqom",
  "techno",
  "trance",
  "soul",
  "disco",
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
      <div className="row">
        <div className="container-fluid d-flex justify-conetent-center">
          <div className="col-md-12" id="genrestext">
            <React.Fragment>
              <section>
                <ReactTextTransition
                  text={texts[this.state.textIndex % texts.length]}
                  springConfig={{ stiffness: 50, damping: 20 }}
                />
              </section>
            </React.Fragment>
          </div>
        </div>
      </div>
    );
  }
}

export default Genrestext;

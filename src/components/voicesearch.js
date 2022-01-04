import React from "react";
import { useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import microPhoneIcon from "./microphone.svg";


function Voicesearch(props) {

  const commands = [
    {
        
      command: "Play *" ,
      callback: (genre) => {
          
        props.genreHandler(genre);
        

        //
        
        
      },
    }
    
      /*command: "open *",
      callback: (website) => {
        window.open("http://" + website.split(" ").join(""));
      },
    },
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },*/
    ,{
      command: "reset",
      callback: () => {
        handleReset();
      },
    },
    
    
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser does not Support Speech Recognition.
      </div>
    );
  }
  const handleListing = () => {
    setIsListening(true);
    //microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening(/*{
      //continuous: true,
    }*/);
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };
  return (
    <div className="microphone-wrapper">
      <div className="mircophone-container">
        <button id="microphonebutton">
          <div
            className="microphone-icon-container"
            ref={microphoneRef}
            onClick={handleListing}
          >
            <img src={microPhoneIcon} className="microphone-icon" />
            Discover mixes
          </div>
        </button>
        <div className="microphone-status">{isListening ? "" : ""}</div>
        {isListening && (
          <button id="microphone-stop-reset" onClick={stopHandle}>
            Stop
          </button>
        )}
      </div>
      {transcript && (
        <div className="microphone-result-container">
         
           
              <div className="microphone-result-text">{transcript}
          </div>
          <button id="microphone-stop-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
    </div>
  );
}


export default Voicesearch;

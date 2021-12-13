import React, { useState, useRef, useEffect } from "react";
import axios from "axios";


/*props = {
    mixcloudurl: "https://api.mixcloud.com",
    mixcloudembed: "embed-html"
}*/







function Mixcloud(props) {
  
  const [show, setShow] = useState(null);
  //const [random] = useState(Math.floor(Math.random() * 19));

  //const genre = useRef(props.genre);

  //const url = "https://api.mixcloud.com/search/?q=" + {this.props.genreinput} + "&type=cloudcast";

  //const url = "https://api.mixcloud.com/search/?q=" + props.genre + "&type=cloudcast";

 
 
 
 
  useEffect(() => { //gets called eveytime the mixcloud component gets rendered
      console.log(props);

      if (props.genre != "")  {
      console.log(props.genre);
    axios.get("https://api.mixcloud.com/search/?q=" + props.genre + "&type=cloudcast").then((response) => {
        //random = Math.random() * 19;
       console.log(response.data); 
      setShow(response.data);
    }); }

    
  }, [props]); // if "props" ever changes ie if a new genre is input via voice, a new call is sent to the api with the new genre
  


    //function getRandom() {
      //setRand((rand) => Math.random() * 19);
    //}

   //rand = 0 + Math.random() * (19 - 0);
    //this.setState({ random: this.state.random + rand });
  //this.setState({ random: this.state.random + Math.random()*19 });

  if (show) {
    //random = Math.random() * 19;
      
      if (show.data.length > 0){
        var rand = Math.floor(Math.random() * 19);
    return (
      <div>
        <h4>{show.data[rand].name}</h4>

        <iframe
          src={
            "https://api.mixcloud.com" + show.data[rand].key + "embed-html/"
          }
          allowtransparency={"true"}
          width={"100%"}
          height={"180"}
          allow="autoplay 'src'"
        />
      </div>
      
    );
      }else{

        return (
          <div>
            <h4>
              oh oh! please try another genre, or spell the genre letter by
              letter
            </h4>
          </div>
        );
      }
  } else {

    return (
    <div>
      <h4>
        Welcome!
      </h4>
    </div>
    );
  }

 

  
}

export default Mixcloud;

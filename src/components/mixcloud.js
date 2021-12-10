import React, { useState, useEffect } from "react";
import axios from "axios";

/*props = {
    mixcloudurl: "https://api.mixcloud.com",
    mixcloudembed: "embed-html"
}*/



const url = "https://api.mixcloud.com/search/?q=pcmusic&type=cloudcast";



function Mixcloud() {
  
  const [show, setShow] = useState(null);
  const [random] = useState(Math.floor(Math.random() * 19));

 

 

  useEffect(() => {
    axios.get(url).then((response) => {
        //random = Math.random() * 19;
       console.log(response.data); 
      setShow(response.data);
    });
  }, [url]);


    //function getRandom() {
      //setRand((rand) => Math.random() * 19);
    //}

   //rand = 0 + Math.random() * (19 - 0);
    //this.setState({ random: this.state.random + rand });
  //this.setState({ random: this.state.random + Math.random()*19 });

  if (show) {
      //random = Math.random() * 19;
    return (
      <div>
        <h4>{show.data[random].name}</h4>
        
        

        <iframe
          src={
            "https://api.mixcloud.com" + show.data[random].key + "embed-html/"
          }
        />
      </div>
    );
  }

  return (
  <div></div>
  )

  
}

export default Mixcloud;

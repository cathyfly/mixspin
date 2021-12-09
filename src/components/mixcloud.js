import React, { useState, useEffect } from "react";
import axios from "axios";

/*props = {
    mixcloudurl: "https://api.mixcloud.com",
    mixcloudembed: "embed-html"
}*/

const url = "https://api.mixcloud.com/search/?q=irish&type=cloudcast";

function Mixcloud() {
  
  const [show, setShow] = useState(null);
 

  useEffect(() => {
    axios.get(url).then((response) => {
       console.log(response.data); 
      setShow(response.data);
    });
  }, [url]);

  

  if (show) {
    return (
      <div>
        <h1>{show.data[19].key}embed-html/</h1>
        <iframe src={show.data[19].url} embed-json />

        <iframe src="https://api.mixcloud.com"{show.data[19].key}"embed-html/"/>

        <iframe
          width="100%"
          height="120"
          src="{show.data[19].url}"
          frameborder="0"
        ></iframe>
      </div>
    );
  }

  return (
  <div></div>
  )

  return (
    <div>
      <h1> sounds go here </h1>
    </div>
  );
}

export default Mixcloud;

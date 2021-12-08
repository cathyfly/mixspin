import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Mixcloud(){

    const url = "https://api.mixcloud.com/spartacus/party-time/";
    const [show,setShow] = useState (null)

    useEffect(() => {
    axios.get(url)
        .then(response => {

            setShow(response.data)

        })
    }, [url])

    if(show){
        return (
          <div>
            <h1>{show.url}embed-html/</h1>
            <iframe src={show.url} embed-json />
            <iframe src= "https://api.mixcloud.com/spartacus/party-time/embed-html/" />
           
          </div>
        );
    }

    return (
        <div>
        </div>
    )



    return (
        <div>
        <h1> sounds go here </h1>
        </div>
    )
}

export default Mixcloud
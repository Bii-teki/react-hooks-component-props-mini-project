import React from "react";
function About(props){  
    const cover = props.image 
    return (
       
            <aside>
            <img src={cover? cover : "https://via.placeholder.com/215"} alt="blog logo"/>
            <p>{props.about}</p>
            </aside>
            
      
    );
}
export default About

import React from "react";
function Article({title, preview, date, minutes}){  
    
      
    return (
       <article>
        <h3>{title}</h3>
        <small> {date ? date : "January 1, 1970"} .  {minutes} min read</small>
        <p>{preview}</p>
        
         </article>
      
    );
}
export default Article
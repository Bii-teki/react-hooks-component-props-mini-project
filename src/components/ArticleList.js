import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  console.log(posts);
  
  const content = posts.map((post) =>

  <Article 
    key={post.id}
    id={post.id}
    title={post.title} 
    date={post.date}
    preview={post.preview}
    minutes={post.minutes}
   
    />
);

  return (
    <main>      
      {content}
    </main>
   
  );
}

export default ArticleList;
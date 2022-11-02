import React from "react";
import Navigation from "./Navigation";


function GithubRepos() {
  
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("https://api.github.com/users/emmanuel")
  //   }
  // })


  return (
    <section>
        <Navigation/>
      <h1>My GitHub Repos</h1>
    </section>
  );
}

export default GithubRepos;

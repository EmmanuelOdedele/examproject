import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axios from "axios";

function GithubRepos() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const results = await axios(
          "https://api.github.com/users/EmmanuelOdedele/repos"
        );
        setData(results.data);
      } catch (error) {
        setHasError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  console.log(data);


  return (
    <section>
      <Navigation />
      <h1>My GitHub Repos</h1>
      {hasError && (
        <p>
          Unable load repositories.
          <br />
          Error might be due to poor internet connection.
        </p>
      )}
      {isLoading ? (
        <p>Loading repositories</p>
      ) : (
        <ul>
          {data.map((repo) => (
            <li key={repo.id}>
              {repo.name}
              <a href={repo.html_url} rel="noreferrer" target="_blank">Code</a>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default GithubRepos;

import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import axios from "axios";
import Pagination from "./Pagination";
import MyRepos from "./MyRepos";
import "../styles/repopage.css";
import { Helmet } from "react-helmet-async";

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
    <div id="repopage-container">
      <Helmet>
        <title>Emmanuel Odedele - Portfolio</title>
        <meta
          name="description"
          content="See a list of projects that has been done by Emmanuel Odedele."
        />
        <link rel="canonical" href="/githubrepos" />
      </Helmet>

      <Navigation />
      <div id="repopage-content">
        <h1>My GitHub Repos</h1>
        {hasError && (
          <p className="isloading">
            Unable to load repositories.
            <br />
            Error might be due to poor internet connection.
          </p>
        )}
        {isLoading ? (
          <p className="isloading">Loading repositories</p>
        ) : (
          <div id="repo-main-container">
            {data.length > 0 ? (
              <div id="repo-container">
                <Pagination
                  data={data}
                  RenderComponent={MyRepos}
                  pageLimit={3}
                  dataLimit={4}
                />
              </div>
            ) : (
              <p className="isloading">No Repos to display.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default GithubRepos;

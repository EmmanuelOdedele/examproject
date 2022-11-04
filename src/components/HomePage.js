import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "./Navigation";
import "../styles/homepage.css";
import GitHubAvatar from "./GitHubAvatar";

function HomePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setHasError(false);
      try {
        const results = await axios(
          "https://api.github.com/users/EmmanuelOdedele"
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
    <div id="homepage-container">
      <Navigation />

      <div id="homepage-content">
        <div id="avatar">
          {hasError && <img alt="Avatar" />}
          {isLoading ? <img alt="Avatar" /> : <GitHubAvatar data={data} />}
        </div>
        <p>Hello, my name is</p>
        <h1>EMMANUEL ODEDELE</h1>
        <p>
          I am a Frontend Engineer skilled with some knowledge on UI designs.
          <br />
          I'm usually curious and I really like to find out the "Why" of things.
          <br />
          I'm able to build functional web applications and easily convert UI
          designs
          <br />
          into pixel perfect responsive web pages.
          <br />I learn fast and can adapt to a new technology quickly.
        </p>
      </div>
    </div>
  );
}

export default HomePage;

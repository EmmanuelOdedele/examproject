import React from "react";
import Navigation from "./Navigation";
import "../styles/repoinfo.css";

function RepoInfo() {
  return (
    <div id="repo-info-container">
      <Navigation />
      <div id="repo-info-content">
        <h1>Repo Info</h1>
      </div>
    </div>
  );
}

export default RepoInfo;

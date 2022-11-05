import React from "react";
import Navigation from "./Navigation";
import "../styles/repoinfo.css";
import { Helmet } from "react-helmet-async";

function RepoInfo() {
  return (
    <div id="repo-info-container">
      <Helmet>
        <title>Emmanuel Odedele - Repo Info</title>
        <meta
          name="description"
          content="More information about projects done by Emmanuel Odedele."
        />
        <link rel="canonical" href="/githubrepos/repoinfo" />
      </Helmet>

      <Navigation />
      <div id="repo-info-content">
        <h1>Repo Info</h1>
      </div>
    </div>
  );
}

export default RepoInfo;

import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import GithubRepos from "./components/GithubRepos";
import RepoInfo from "./components/RepoInfo";
import NotFound from "./components/NotFound";
import ContactMe from "./components/ContactMe";
import { ErrorBoundary } from "react-error-boundary";
import TestError from "./components/TestError";

function App() {
  return (
    <section>
      <ErrorBoundary >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/githubrepos" element={<GithubRepos />} />
          <Route path="/githubrepos/repoinfo" element={<RepoInfo />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/testerror" element={<TestError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </section>
  );
}

export default App;

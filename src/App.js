import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import GithubRepos from "./components/GithubRepos";
import NotFound from "./components/NotFound";

// Error Boundary below
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
// Error Boundary at the top

function App() {
  return (
    <section>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/githubrepos" element={<GithubRepos/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </ErrorBoundary>
    </section>
  );
}

export default App;

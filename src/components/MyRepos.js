import React from "react";
import "../styles/myrepos.css";
import { NavLink } from "react-router-dom";

function MyRepos(props) {
  // eslint-disable-next-line
  const { id, name, html_url, homepage } = props.data;
  return (
    <div id="each-repo">
      <ul>
        <li key={id}>
            {name}
          <NavLink className="view-more" to="/githubrepos/repoinfo">
            &#9094;
          </NavLink>
          {/* <div>
            <a href={html_url} rel="noreferrer" target="_blank">
              Code
            </a>
            {homepage !== null ? (
              <a href={`https://${homepage}`} rel="noreferrer" target="_blank">
                Site
              </a>
            ) : (
              <div></div>
            )}
          </div> */}
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
}

export default MyRepos;

/* <ul>
{data.map((repo) => (
  <li key={repo.id}>
    {repo.name}
    <a href={repo.html_url} rel="noreferrer" target="_blank">Code</a>
  </li>
))}
</ul> */

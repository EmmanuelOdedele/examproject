import React from "react";

function MyRepos(props) {
  const { id, name, html_url, homepage } = props.data;
  return (
    <div>
      <ul>
        
        <li key={id}>
          {name}
          <div>
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
          </div>
        </li>
        {/* ))} */}
      </ul>
    </div>
  );
}

export default MyRepos;

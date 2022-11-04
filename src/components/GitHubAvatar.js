import React from "react";
import "../styles/avatar.css"

function GitHubAvatar(props) {
  const { avatar_url } = props.data;
  return <img id="avatar-image" alt="Avatar" src={avatar_url} />;
}

export default GitHubAvatar;

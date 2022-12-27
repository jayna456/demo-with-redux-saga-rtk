import React from "react";

function Welcome(props) {
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log("user data ", userData);

  if (Object.keys(userData).includes("name")) {
    const name = userData.name;
    return <div>Welcome {name}</div>;
  }

  if (!Object.keys(userData).includes("name")) {
    return (
      <h1>No user available. As this is the demo project for redux-saga</h1>
    );
  }
}

export default Welcome;

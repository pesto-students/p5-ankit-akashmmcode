import React from "react";

function About() {
  return (
    <>
      <h1>About</h1>
      <p style={{ color: "red" }}></p>
      <div style={{ display: "flex", justifyContent: "center", backgroundColor:"#001420"}}>
        <img
          src={
            "https://www.successmantra.in/assets/assestsnew/images/contact-us.png"
          }
          alt="about"
        ></img>
      </div>
    </>
  );
}

export default About;

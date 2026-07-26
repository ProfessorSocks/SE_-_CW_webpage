import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import NavBar from "../components/NavBar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />

      <div
        style={{
          display: "flex",
          justifyContent: "center", // Centers left/right
          alignItems: "center",     // Centers up/down
          minHeight: "100px",
          border: "3px dashed green",
          backgroundColor: "palegreen",
          position: "relative",
          zIndex: 9999,
          fontSize: "64px",
          color: "forestgreen",
        }}
      >
        Hello!
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100px",
          border: "3px dashed green",
          backgroundColor: "palegreen",
          position: "relative",
          zIndex: 9999,
        }}
      >
        <h1
          style={{
            color: "forestgreen",
            opacity: 1,
            visibility: "visible",
            fontSize: "24px",
            position: "static",
          }}
        >
          Welcome to our website!
        </h1>
      </div>
    </>
  );
}


export default App;

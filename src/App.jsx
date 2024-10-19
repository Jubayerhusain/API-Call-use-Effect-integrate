/* eslint-disable no-unused-vars */
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Students from "./Students";
import AllPost from "./AllPost";

function App() {
  return (
    <>
      <h1>lets Start useEffect With Dynamic API Calling</h1>
      <br />
      <br />
      <AllPost></AllPost>
      <br />
      <br />
      <Students></Students>

      <br />
      <br />
    </>
  );
}

export default App;

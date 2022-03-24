import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import "./styles.css";

function App() {
  const buttons = ["Home", "Contact", "About"];
  const [page, setPage] = React.useState("Home");

  function handleClick(event) {
    setPage(event.target.name);
  }

  return (
    <div>
      <nav>
        {buttons.map((buttonText) => (
          <button name={buttonText} key={buttonText} onClick={handleClick}>
            {buttonText}
          </button>
        ))}
      </nav>
      {page == "Home" && <Home title="Home" />}
      {page == "About" && <About title="About" />}
      {page == "Contact" && <Contact title="Contact" />}
    </div>
  );
}

export default App;

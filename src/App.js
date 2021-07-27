import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Equipamentos from "./pages/Equipamentos";
import Home from "./pages/Home/";
import Openday from "./pages/Openday";
import ReactPageScroller from "react-page-scroller";
import Utilidades from "./pages/Utilidades";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [windowSize, setWidth] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth({ width: window.innerWidth, height: window.innerHeight });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);

    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return windowSize.width < 1024 ? (
    <div className="App">
      <ReactPageScroller
        animationTimer={1000}
        blockScrollUp={true}
        containerHeigh={"fit-content"}
      >
        <Home />
        <>
          <About />
          <Openday />
          <Equipamentos />
          <Utilidades />
        </>
      </ReactPageScroller>
    </div>
  ) : windowSize.height < 760 ? (
    <div className="App">
      <Home />
      <About />
      <Openday />
      <Equipamentos />
      <Utilidades />
    </div>
  ) : (
    <div className="App">
      <ReactPageScroller animationTimer={1000}>
        <Home />
        <About />
        <Openday />
        <Equipamentos />
        <Utilidades />
      </ReactPageScroller>
    </div>
  );
}

export default App;

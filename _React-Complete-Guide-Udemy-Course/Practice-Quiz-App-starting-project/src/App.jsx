import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  useEffect(() => {
    console.log("Effect");
  }, []);

  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
}

export default App;

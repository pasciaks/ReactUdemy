import { /* useState, */ Fragment } from "react";

import Header from "./components/Header/Header.jsx";

// import CoreConcept from "./components/CoreConcept.jsx";
// import { CORE_CONCEPTS } from "./data.js";

// import TabButton from "./components/TabButton.jsx";

// import { EXAMPLES } from "./data.js";

import CoreConcepts from "./components/CoreConcepts.jsx";
import ExamplesSection from "./components/Examples.jsx";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <ExamplesSection />
      </main>
    </Fragment>
  );
}

export default App;

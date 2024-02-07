import { useState } from "react";
import "./App.css";
import Number12 from "./components/number12";
import ConditionalRendering from "./components/ConditionalRendering";
import ObjectState1 from "./components/ObjectState1";
import ObjectState2 from "./components/ObjectState2";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <>
      <div>
        <h1>1. Incrémenter </h1>
        <Number12 />
      </div>
      <div>
        <h1> 2. Rendu conditionnel (Conditional rendering) </h1>
        <ConditionalRendering id={"1"} />
      </div>
      <div>
        <h1> 3. État de l'objet 1 (Object state) </h1>
        <ObjectState1 />
      </div>

      <div>
        <h1>
          {" "}
          3. État de l'objet 2 (Object state instead of multiple smaller one){" "}
        </h1>
        <ObjectState2 />
      </div>

      <div>
        <h1> 4. Article de blog </h1>
        <BlogPost />
      </div>
    </>
  );
}

export default App;

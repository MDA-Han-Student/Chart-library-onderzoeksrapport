import "./App.css";
import Nav from "./components/Nav";
import React, { useState } from "react";
import RenderChart from "./components/RenderChart";

const App = () => {
  const [chart, setChart] = useState("Recharts");
  
  return (
    <div className="App">
      <header className="App-header">
        <Nav setChart={setChart} />
      </header>
      <div className={'App-body'}>
          <RenderChart chart={chart}/>
      </div>
    </div>
  );
};

export default App;

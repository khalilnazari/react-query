import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BasicRQFetch from "./components/BasicRQFetch";
import RQSideEffect from "./components/RQSideEffect";
import RQSideEffectAssignment from "./components/RQSideEffectAssignment";
import RQDataTransoform from "./components/RQDataTransoform";
import FetchByHook from "./components/FetchByHook";
import { Route, Routes } from "react-router-dom";
import SuperHeros from "./pages/SuperHeros";
import SuperHero from "./pages/SuperHero";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ParallelQuery from "./components/ParallelQuery";
import DynamicParallelQuery from "./pages/DynamicParallelQuery";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      {/* <BasicRQFetch /> */}
      {/* <RQSideEffect /> */}
      {/* <RQSideEffectAssignment /> */}
      {/* <RQDataTransoform /> */}
      {/* <FetchByHook /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-heros" element={<SuperHeros />} />
        <Route path="/super-heros/:heroId" element={<SuperHero />} />
        <Route path="/parallel-query" element={<ParallelQuery />} />
        <Route
          path="/dynamic-parallel-query"
          element={<DynamicParallelQuery heroIds={[1, 3]} />}
        />
        <Route path="*" element={<div>Not found...</div>} />
      </Routes>
    </div>
  );
}

export default App;

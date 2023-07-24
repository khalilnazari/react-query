import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BasicRQFetch from "./components/BasicRQFetch";
import RQSideEffect from "./components/RQSideEffect";
import RQSideEffectAssignment from "./components/RQSideEffectAssignment";
import RQDataTransoform from "./components/RQDataTransoform";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      {/* <BasicRQFetch /> */}
      {/* <RQSideEffect /> */}
      {/* <RQSideEffectAssignment /> */}
      <RQDataTransoform />
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import BasicRQFetch from "./components/BasicRQFetch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="main-container">
      <BasicRQFetch />
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <main className="App">
      <h1>Zoom React Integration</h1>
      <div className="distance">
        <Link to={"/client"}>Client View</Link>
        <Link to={"/component"}>Component View</Link>
      </div>
    </main>
  );
}

export default App;

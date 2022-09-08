import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/todos">Todos</Link> |{" "}
          <Link to="/newsletter">Newsletter</Link>
        </nav>
      </header>
    </div>
  );
}

export default App;

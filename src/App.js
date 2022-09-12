import Navbar from "./components/Navbar";
import React, { useEffect } from "react";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Footer />
    </div>
  );
}

export default App;

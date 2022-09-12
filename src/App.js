import Navbar from "./components/Navbar";
import React from "react";
import Footer from "./components/Footer";
import "./App.css";

function App() {
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

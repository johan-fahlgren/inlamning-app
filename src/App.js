import Navbar from "./components/Navbar";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const name = "Johan";
  const email = "johanfahlgren89@gmail.com";

  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar /> */}
        <Modal mName={name} mEmail={email} />
      </header>
    </div>
  );
}

export default App;

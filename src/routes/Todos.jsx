import React from "react";
import TodoList from "../components/TodoList.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Todos = () => {
  return (
    <div>
      <Navbar />
      <h1>TODO's</h1>
      <TodoList />
      <Footer />
    </div>
  );
};

export default Todos;

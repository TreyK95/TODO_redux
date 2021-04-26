import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

const App = () => (
  <div className="App">
    <TodoForm />
    <TodoList />
    <Footer />
  </div>
);

export default App;

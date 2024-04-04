import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {id:1, title: "แก้บัคโปรแกรม"},
    {id:2, title: "คู่มือการใช้งานโปรแกรม"},
    {id:3, title: "กดเงินที่ธนาคาร"},
  ])
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm />
        <Item />
      </div>
    </div>
  );
}

export default App;

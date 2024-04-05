import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "แก้บัคโปรแกรม" },
    { id: 2, title: "คู่มือการใช้งานโปรแกรม" },
    { id: 3, title: "กดเงินที่ธนาคาร" },
  ]);

  function deleteTask(id) {
    const result = tasks.filter(Item=>Item.id !==id);
    setTasks(result);
  }

  const [title, setTitle] = useState("");

  function saveTask(e) {
    e.preventDefault();
    console.log("บันทึกข้อมูล");
    if (!title) {
      alert("กรุณาป้อนข้อมูล");
    } else {
      const newTask = {
        id: Math.floor(Math.random())*1000,
        title: title
      }
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask}/>
        <section>
          {tasks.map((data) => (
            <Item key={data.id} data={data} deleteTask={deleteTask}/>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;

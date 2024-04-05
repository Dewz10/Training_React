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

  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  function deleteTask(id) {
    const result = tasks.filter(Item=>Item.id !==id);
    setTasks(result);
  }

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

  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item)=>item.id === id);
    setTitle(editTask.title);
  }

  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
        <section>
          {tasks.map((data) => (
            <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask}/>
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;

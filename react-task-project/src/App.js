import "./App.css";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "แก้บัคโปรแกรม" },
    { id: 2, title: "คู่มือการใช้งานโปรแกรม" },
    { id: 3, title: "กดเงินที่ธนาคาร" },
  ]);
  // const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("task")) || []);

  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);
  const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   localStorage.setItem("task", JSON.stringify(tasks));
  // }, [tasks]);

  function deleteTask(id) {
    const result = tasks.filter((Item) => Item.id !== id);
    setTasks(result);
  }

  function saveTask(e) {
    e.preventDefault();
    console.log("บันทึกข้อมูล");
    if (!title) {
      alert("กรุณาป้อนข้อมูล");
    } else if (editId) {
      const updateTask = tasks.map((item) => {
        if (item.id === editId) {
          return { ...item, title: title };
        }
        return item;
      });
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
    } else {
      const newTask = {
        id: Math.floor(Math.random()) * 1000,
        title: title,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
    }
  }

  function editTask(id) {
    setEditId(id);
    const editTask = tasks.find((item) => item.id === id);
    setTitle(editTask.title);
  }

  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          saveTask={saveTask}
          editId={editId}
        />
        <section>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;

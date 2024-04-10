import { useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState("");

  function searchImage(e) {
    e.preventDefault();
    if (!word) {
      alert("กรุณาป้อนข้อมูล");
    } else {
      // Call API
      console.log(word);
    }
  }
  return (
    <>
      <h1>ระบบค้นหารูปภาพด้วย API</h1>
      <form onSubmit={searchImage}>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="รูปภาพที่ต้องการค้นหา"
        />
        <button type="submit">ค้นหา</button>
      </form>
    </>
  );
}

export default App;

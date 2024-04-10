import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>ระบบค้นหารูปภาพด้วย API</h1>
      <form>
        <input type="text" placeholder="รูปภาพที่ต้องการค้นหา"/>
        <button type="submit">ค้นหา</button>
      </form>
    </>
  )
}

export default App

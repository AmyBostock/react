import { useState } from 'react'
import './App.css'
// import the Counter component
import Counter from './Counter.jsx'

// main app
function App() {
  return (
    <div>
      <h1>My First React Counter</h1>
      <Counter />
    </div>
  )
}

// export App so main.jsx can render it
export default App

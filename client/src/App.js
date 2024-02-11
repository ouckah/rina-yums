import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import Choose from "./pages/Choose"

function App() {
  return (
    <Router>
      <div className="w-screen h-screen">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/choose" element={<Choose />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

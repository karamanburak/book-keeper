import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewBookModal from "./pages/NewBookModal";
import Navbar from "./components/Navbar";

// import './App.css'
function App() {
  return (
    <div className=' bg-main-blue min-h-screen text-center'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<NewBookModal />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

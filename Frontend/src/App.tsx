import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewBookModal from "./pages/NewBookModal";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./app/store";

// import './App.css'
function App() {
  return (
    <div className=' bg-main-blue min-h-screen'>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<NewBookModal />} />

          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App

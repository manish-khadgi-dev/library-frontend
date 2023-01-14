import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";

import "react-toastify/dist/ReactToastify.css";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";

import "animate.css/animate.min.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, cssTransition } from "react-toastify";
import AddBooks from "./pages/AddBooks";

const bounce = cssTransition({
  enter: "animate__animated animate__bounceIn",
  exit: "animate__animated animate__bounceOut",
});

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/add" element={<AddBooks />} />
          <Route
            path="*"
            element={
              <h1 className="text-danger"> 404 Page not found....... </h1>
            }
          />
        </Routes>
      </BrowserRouter>
      <ToastContainer transition={bounce} />
    </div>
  );
}

export default App;

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddRestaurant from "./restaurants/AddRestaurant";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addrestaurant" element={<AddRestaurant />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

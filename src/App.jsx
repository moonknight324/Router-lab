import "./App.css";
import { Routes, Route } from "react-router-dom";
import Kalvium from "./components/Kalvium";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Heading from "./components/Heading";

function App() {
  return (
    <>
      <Heading />
      <div>
        <Routes>
          <Route path="/" element={<Kalvium />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

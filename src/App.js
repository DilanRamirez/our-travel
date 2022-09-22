import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.jsx";
import TopCarousel from "./components/carousel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Header />
      <TopCarousel />
      {/* <TopCarousel /> */}
    </div>
  );
}

export default App;

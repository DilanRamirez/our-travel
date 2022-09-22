import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header.jsx";
import TopCarousel from "./components/carousel";

function App() {
  return (
    <div className="app-container">
      <Header />
      <TopCarousel />
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CardDetail from "./components/CardDetail/CardDetail";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai/:slug" element={<CardDetail />} />
      </Routes>
    </div>
  );
}
export default App;

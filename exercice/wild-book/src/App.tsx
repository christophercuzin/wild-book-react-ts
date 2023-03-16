import { WildersProvider } from "./contexts/WildersContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddWilder from "./pages/Addwilder";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
          <a href={`/add-wilder`}>Add new wilder</a>
        </div>
      </header>
      <WildersProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-wilder" element={<AddWilder />} />
        </Routes>
      </WildersProvider>
      <footer>
        <div className="container">
          <p>&copy; 2023 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

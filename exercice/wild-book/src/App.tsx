import { WildersProvider } from "./contexts/WildersContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddWilder from "./pages/AddwilderForm";
import "./App.css";
import AddSkill from "./pages/AddSkillForm";
import LinkList from "./components/headerLink";

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
          <LinkList />
        </div>
      </header>
      <WildersProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-wilder" element={<AddWilder />} />
          <Route path="/add-skill" element={<AddSkill />} />
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

/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import { Route, Routes } from "react-router-dom";
import PageRoyalAssets from "./pages/PageRoyalAssets";
import RoyalFamily from "./components/royalFamily/RoyalFamily";
import HomePage from "./components/homePage/HomePage";
import NavBar from "./components/navBar/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assets" element={<PageRoyalAssets />} />
        <Route path="/royal-family" element={<RoyalFamily />} />
      </Routes>
    </div>
  );
}

export default App;

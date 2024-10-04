import "./App.css";
import "./assets/stylebaru.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profil from "./pages/Profil";
import Navbar from "./components/Navbar";
import Beranda from "./pages/beranda/Beranda";
import Footer from "./components/Footer";
import Detail from "./pages/detail/Detail";
import Error from "./pages/Error";
import Product from "./pages/product/Product";
import Negara from "./pages/negara/Negara";
import ThemeContext from "./components/context/ThemeContext";
import { useState } from "react";

function App() {
  const theme = useState("Light");

  return (
    <BrowserRouter>
    <ThemeContext.Provider value={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Profil />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/Beranda" element={<Beranda />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Negara" element={<Negara />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
      </ThemeContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
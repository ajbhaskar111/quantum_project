import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primeflex/primeflex.scss";
import "primeicons/primeicons.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Overview from "./pages/Overview";
import History from "./pages/History";
import Assing_managment from "./pages/Assing_managment";
import { Header } from "./container/Header";
import { Footer } from "./container/Footer";
import { OurPeople } from "pages/OurPeople";
import ContactUs from "pages/ContactUs";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="//our-people" element={<OurPeople />}></Route>
        <Route path="/history" element={<History />} />
        <Route path="/assignmen_managment" element={<Assing_managment />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

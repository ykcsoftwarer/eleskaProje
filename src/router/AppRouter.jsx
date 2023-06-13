import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Orbit from "../components/pizza/Orbit";
import Slider from "../components/pizza/slider/Slider";
import Steps from "../components/header/Steps";
import Connect from "../components/footer/Connect";
import Footer from "../components/footer/Footer";
import Menu from "../pages/Menu";
import About from "../components/about/About";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="" element={}/>  */}
        {/* <Route path="" element={}/>  */}
        {/* <Header /> */}
        {/* <Menu /> */}
        {/* <Home /> */}
        {/* <Steps /> */}
        {/* <Orbit radius={400} /> */}
        {/* <Slider /> */}
        {/* <About /> */}
        {/* <Connect /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

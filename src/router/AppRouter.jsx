import { BrowserRouter } from "react-router-dom";

import Header from "../components/header/Header";
import Navbar from "../components/navbar/Navbar";
import Orbit from "../components/pizza/Orbit";
import Slider from "../components/pizza/slider/Slider";
import Steps from "../components/header/Steps";
import Connect from "../components/footer/Connect";
import Footer from "../components/footer/Footer";
import Menü from "../components/menü/Menü";
import About from "../components/about/About";
import Home from "../components/category/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Menü/>
      <Home/>
      <Steps/>
      <Orbit radius={400} />
      <Slider/>
      <About/>
      <Connect/>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;

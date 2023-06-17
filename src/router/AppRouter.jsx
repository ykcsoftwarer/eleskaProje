import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home";
import Footer from "../components/footer/Footer";
import Menu from "../pages/Menu";
import About from "../pages/About";
import MultiStepForm from "../components/stepper/MultiStepForm";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={ <MultiStepForm  />} />
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

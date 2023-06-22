import React from "react";
import Header from "../components/header/Header";
import Steps from "../components/header/Steps";
import Menü from "../components/circles/Circles";
import Category from "../components/category/Category";
import HomeCategory from "../components/category/Home";
import Orbit from "../components/pizza/Orbit";
import Slider from "../components/pizza/slider/Slider";
import Connect from "../components/footer/Connect";
import CampaignSlider from "../components/campaignSlider/CampaignSlider";
const Home = () => {
  return (
    <>
      <Header />
      <Menü />
      <CampaignSlider/>
      <HomeCategory />
      <Steps />
      <Orbit radius={400} />
      <Slider/>
      <Connect/>
    </>
  );
};

export default Home;

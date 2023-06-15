import React from "react";
import cook from "../../helper/about.jpg";
import location from "../../helper/local.png";
import stars from "../../helper/star.png";
import clock from "../../helper/time.png";

const AboutC = () => {
  return (
    <div className="flex justify-between h-screen  w-[100vw] ">
      <div className="About-left w-1/2 relative pl-10  md:w-[50vw] md:h[50vh]">
        <img
          src={cook}
          className="py-6 px-10 h-[90vh]    object-cover"
          alt=""
        />
        <div className="bg-red-600 h-60 w-20 absolute left-0 bottom-48"></div>
      </div>

      <div className="w-1/2 relative  flex items-center ">
        <div className="bg-red-600 h-96 w-20 absolute right-0 top-52 "></div>
        <div className="">
          <h2 className=" font-roboto w-[50vw]  mb-3 text-5xl text-left xxls:text-8xl ">
            Eleska Pizza Restaurantı
          </h2>
          <p className="font-open-sans text-left w-[40vw] md:w-[300px] text-gray-600 mr-60 text-xl leading-10 xxls:text-4xl  ">
            2000 yılında pizza servisine başlayan Eleska,2023 yılı itibari ile
            Türkiye'nin her yerinde şube açmıştır.Hala ilk günkü istek ve
            heyecanla en lezzetli pizzaları müşterilerimize sunabilmek için
            çalışıyoruz.
          </p>

          <div className="flex justify-between md:mt-8 lg:justify-around ">
            <div className="inline xxls:mt-10 h-12 my-4">
              <img className="w-8 inline " src={location} alt="" />
              <p className=" inline text-3xl text-gray-600 xxls:text-4xl">
                {" "}
                İzmir / Türkiye
              </p>
            </div>

            <div className="inline mr-48  w-20 xxls:w-40">
              <img className=" " src={stars} alt="" />
            </div>
          </div>

          <div className="flex justify-between mb-5 lg:justify-around ">
            <p className=" text-xl text-gray-600 xxls:text-4xl">
              📞+1(234)567-8910
            </p>

            <div className=" mr-48 ">
              <img className="w-8 inline mr-2" src={clock} alt="" />
              <p className="inline text-2xl text-gray-600 xxls:text-4xl">
                25-45 Min
              </p>
            </div>
          </div>

          {/* <button className="bg-white hover:bg-gray-100 w-40  text-gray-800 font-semibold mb-5  py-2 px-4 border border-red-400  shadow block  xxls:text-4xl xxls:w-80">
            MENÜ
          </button> */}

          {/* <button className="bg-white hover:bg-gray-100 w-40 text-gray-800 font-semibold py-2 px-4 border border-black  shadow block  xxls:text-4xl xxls:w-80">
            HAKKIMIZDA
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AboutC;

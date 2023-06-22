import { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


const slides = [
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PCSP/DE_PCSP_all_hero_11910.jpg?v-910499353",
    title: "This is title 1",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PSSA/DE_PSSA_all_hero_10571.jpg?v-377603643",
    title: "This is title 2",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PDUT/DE_PDUT_all_hero_11734.png?v-124775118",
    title: "This is title 3",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PBOS/DE_PBOS_all_hero_11872.png?v-2113143995",
    title: "This is title 4",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PPON/DE_PPON_all_hero_11872.png?v1872079273",
    title: "This is title 5",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PMEA/DE_PMEA_all_hero_11910.jpg?v1167088276",
    title: "This is title 6",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/PCON/DE_PCON_all_hero_11734.png?v1493403577",
    title: "This is title 7",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/EPCUR/DE_EPCUR_all_hero_9880.jpg?v752410959",
    title: "This is title 8",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/EPVEG/DE_EPVEG_all_hero_11910.jpg?v789189983",
    title: "This is title 9",
  },
  {
    image:
      "https://www.dominos.de/ManagedAssets/DE/product/EPORL/DE_EPORL_all_hero_9880.jpg?v916554548",
    title: "This is title 10",
  },
];

const CampaignSlider = () => {
  const sliderLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  // useEffect hook'unu kullanarak bir zamanlayıcı oluşturuyoruz
  useEffect(() => {
    // setInterval fonksiyonunu kullanarak 5 saniyede bir sliderRight işlevini çağırıyoruz
    const interval = setInterval(() => {
      sliderRight();
    }, 1000);

    // useEffect hook'unun geri dönüş fonksiyonu aracılığıyla zamanlayıcıyı temizliyoruz
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex justify-center ">
      <div className="my-5  w-[80%] h-[400px] flex justify-center items-center shadow-sliderShadow">
        <div className=" w-[100%]  relative flex items-center">
          <MdChevronLeft
            size={40}
            className=" rounded-full absolute left-0 opacity-50 hover:opacity-100 hover:cursor-pointer hover:shadow-Cs hover:duration-300"
            onClick={sliderLeft}
          />

          <div id="slider">
            {slides.map((slide, index) => {
              return (
                <div
                  className={`w-[250px] h-[250px] rounded-[10px] inline-block mx-[1rem]
                  `}
                  key={index}
                  role="button"
                >
                  <div
                    className="w-full h-[210px] bg-gray-600 rounded-t-[10px] bg-cover"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  ></div>
                  <div className="flex flex-col items-center">
                    <p className="text-center my-2 font-medium">
                      {slide.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <MdChevronRight
            size={40}
            className=" rounded-full absolute  right-0 opacity-50 hover:opacity-100 hover:cursor-pointer hover:shadow-Cs hover:duration-300"
            onClick={sliderRight}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignSlider;

import React, { useState } from "react";
import { useAutoAnimate } from '@formkit/auto-animate/react'

const DropDown = () => {
  const [animationParent] = useAutoAnimate()
  const Categories = [
    {
      id: "1",
      name: "Pizza",
      img: "assest/iconlar/pizza.png",
      ok: "assest/iconlar/ok.png",
      items: [
        {
          id: `1`,
          img: "assest/pizzaimg/3981417.jpg",
          name: "Pizza Kebap",
          ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
          price: "100 TL",
        },
        {
          id: `2`,
          img: "assest/pizzaimg/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg",
          name: "Karışık Pizza ",
          ingredients: "Sucuk, zeytin, mozzarella, mantar",
          price: "200 TL",
        },
        {
          id: `3`,
          img: "assest/pizzaimg/pizza-dark-background-classic-italian-pizza-with-tomatoes-pepper-vegetables-sauce-mozarella-cheese-dark-kitchen-table-copy-space_90380-947.jpg",
          name: "Kekiklim",
          ingredients: "Kekik, mozzarella, zeytin, kokteyl sos, mantar",
          price: "300 TL",
        },
        {
          id: `4`,
          img: "assest/pizzaimg/sdw.jpg",
          name: "Kavurma Festivali",
          ingredients: "Kavurma, mozzarella, sucuk, kekik",
          price: "250 TL",
        },
      ],
    },
    {
      id: "2",
      name: "Pide ",
      img: "assest/iconlar/pide.png",
      items: [
        {
          id: `1`,
          img: 'assest/pizzaimg/cheese-pita.jpg',
          name: "Peyaz Peynirli Pide",
          ingredients: "Mozzarella, beyaz peynir, tereyağ",
          price: "150 TL",
        },
        {
          id: `2`,
          name: "Mozzarellalı, Yumurtalı Pide",
          img: 'assest/pizzaimg/egg-pita.jpg',
          ingredients: "Mozzarella, yumurta, tereyağ",
          price: "120 TL",
        },
      ],
    },
    {
      id: "3",
      name: "Izgaralar",
      img: "assest/iconlar/ızgara.png",
      items: [
        {
          id: `1`,
          name: "Tavuk Izgara",
          img: 'assest/pizzaimg/tvk-hero.jpg',
          ingredients: "Tavuk ızgara, karışık salata ve sos",
          price: "115 TL",
        },
      ],
    },
    {
      id: "4",
      name: "Makarna",
      img: "assest/iconlar/makarna.png",
      items: [
        {
          id: `1`,
          name: "Fırında Lazanya",
          ingredients: "",
          price: "65 TL",
        },
      ],
    },
    {
      id: "5",
      name: "Atıştırmalık",
      img: "assest/iconlar/atıştırmalık.png",
      items: [
        {
          id: `1`,
          name: "Patates Kızartması",
          ingredients: "",
          price: "35 TL",
        },
      ],
    },
    {
      id: "6",
      name: "Salata",
      img: "assest/iconlar/salata.png",
      items: [
        {
          id: `1`,
          name: "Sezar Salata",
          ingredients: "Domates, marul, tavuk, sos",
          price: "100 TL",
        },
      ],
    },
    {
      id: "7",
      name: "Tatlı",
      img: "assest/iconlar/tatlı.png",
      items: [
        {
          id: `1`,
          name: "Tiramusu",
          ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
          price: "7.5 TL",
        },
      ],
    },
    {
      id: "8",
      name: "İçecek",
      img: "assest/iconlar/içecekler.png",
      items: [
        {
          id: `1`,
          name: "Su",
          ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
          price: "10 TL",
        },
      ],
    },
    {
      id: "9",
      name: "Alkol",
      img: "assest/iconlar/alkol.png",
      items: [
        {
          id: `1`,
          name: "Bira",
          ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
          price: "95 TL",
        },
      ],
    },
  ];
  const [showDropDown, setShowDropDown] = useState(
    Array(Categories.length).fill(false)
  );
  const toggleDropdown = (index) => {
    const newShowDropdown = [...showDropDown];
    newShowDropdown[index] = !newShowDropdown[index];
    setShowDropDown(newShowDropdown);
  };
  return (
    <div className="flex justify-center min-h-screen " >
      <div className="container "  >
        <h1 className=" my-8 text-3xl text-center font-extrabold">MENÜ</h1>
        {Categories.map((categori, index) => {
          return (
            <div
              className="py-2   md:w-96 lg:w-10/12 xl:w-9/12  mx-auto "
              key={categori.id} 
            >
              <div 
                className={`dropdown flex p-5 bg-gray-200 hover:bg-red-300 w-full  justify-between ${
                  showDropDown[index] ? "dropdown-open" : ""
                }`}
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex gap-3 place-items-center" >
                  <img src={categori.img} alt="" className="w-8 h-8" />
                  <h2 className="font-bold text-lg tracking-wide">
                    {categori.name}
                  </h2>
                </div>
                <div className="flex place-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
              </div>
              <div ref={animationParent}>
                {categori.items && showDropDown[index] && (
                  <ul className="flex flex-wrap justify-between">
                    {categori.items.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className="w-1/2 flex flex-wrap md:w-full"
                        >
                          <div className="flex mt-8 ">
                            <div>
                              <img
                                src={item.img}
                                alt=""
                                className="w-52 lg:w-52 h-52 lg:h-48 object-cover "
                              />
                            </div>
                            <div className=" tracking-widen flex flex-col ml-3 ">
                              <h3 className="font-bold text-2xl  ">
                                {item.name}
                              </h3>
                              <p className="mt-3 italic w-40 text-xl">
                                {item.ingredients}
                              </p>
                              <p className="mt-6 font-bold text-red-600">
                                {item.price}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropDown;

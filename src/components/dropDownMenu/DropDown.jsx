import React, { useState } from "react";

const DropDown = () => {
    const Categories = [
        {
          id: "1",
          name: "Pizza",
          img: "assest/iconlar/pizza.png",
          ok: "assest/iconlar/ok.png",
          items: [
            {
              id: `1`,
              img:"assest/pizzaimg/3981417.jpg",
              name: "Pizza Kebap",
              ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
              price: "100 TL",
            },
            {
              id: `1`,
              img:"assest/pizzaimg/mixed-pizza-with-olive-bell-pepper-tomato_140725-183.jpg",
              name: "Pizza Karışık",
              ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
              price: "200 TL",
            },
            {
              id: `1`,
              img:"assest/pizzaimg/pizza-dark-background-classic-italian-pizza-with-tomatoes-pepper-vegetables-sauce-mozarella-cheese-dark-kitchen-table-copy-space_90380-947.jpg",
              name: "Pizza Kekikli",
              ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
              price: "300 TL",
            },
            {
              id: `1`,
              img:"assest/pizzaimg/sdw.jpg",
              name: "Pizza Kavurma",
              ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
              price: "500 TL",
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
              name: "Kaşarlı  Pide",
              ingredients: "Kaşar,kokteyl sos",
              price: "50 TL",
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
              name: "ouygfouyı",
              ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
              price: "100 TL",
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
              name: "ouygfouyı",
              ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
              price: "100 TL",
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
              name: "ouygfouyı",
              ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
              price: "100 TL",
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
              name: "ouygfouyı",
              ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
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
              name: "ouygfouyı",
              ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
              price: "100 TL",
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
              name: "ouygfouyı",
              ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
              price: "100 TL",
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
              name: "ouygfouyı",
              ingredients: "Domates, mozzarella, kebap, kokteyl sos, kekik",
              price: "100 TL",
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
    <div className="flex justify-center">
      <div className="container ">
        {Categories.map((categori, index) => {
          return (
            <div className="py-2 w-3/5  mx-auto " key={categori.id}>
              <div
                className={`dropdown flex p-5 bg-gray-200 hover:bg-red-300 w-full  justify-between ${
                  showDropDown[index] ? "dropdown-open" : ""
                }`}
                onClick={() => toggleDropdown(index)}
              >
                <div className="flex gap-3 place-items-center">
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
              <div>
                {categori.items && showDropDown[index] && (
                  <ul className="flex flex-wrap justify-between">
                    {categori.items.map((item) => {
                      return (
                        <li key={item.id} className="">
                          <div className="flex mt-8">
                            <div > 
                               <img src={item.img} alt="" className="w-80 lg:w-52 h-40 lg:h-48"/>
                            </div>
                          <div className="ml-3 tracking-widen flex flex-col ">
                            <h3 className="font-bold text-2xl -mt-2">{item.name}</h3>
                            <p className="mt-3 italic w-40 text-xl" >{item.ingredients}</p>
                            <p className="mt-6 font-bold text-red-600"> {item.price}</p>
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
    
  )
}

export default DropDown

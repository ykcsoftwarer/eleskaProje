import React, { useState } from "react";
import "../../index.css";
import pizza from "../../helper/pizza1.jpg";
import Popup from "reactjs-popup";
import Modal from "./Modal";
import Slider from "./slider/Slider";

const Orbit = ({ radius }) => {
  const menu = [
    { title: "Pizza 1" },
    { title: "Pizza 2" },
    { title: "Pizza 3" },
    { title: "Pizza 4" },
    { title: "Pizza 5" },
    { title: "Pizza 6" },
    { title: "Pizza 7" },
    { title: "Pizza 8" },
    { title: "Pizza 9" },
    { title: "Pizza 10" },
    { title: "Pizza 11" },
  ];
  const [orbits] = useState(() =>
    Array.from({ length: menu.length }, (_, index) => {
      const angle = (index / (menu.length - 1)) * Math.PI;
      const x = Math.cos(angle) * radius * 1.18;
      const y = Math.sin(angle) * radius * 1.1;
      const menuItem = index % menu.length;
      return { x, y, menuItem };
    })
  );
  const getOrbitClassName = (index) => {
    if (index === (menu.length - 1) / 2) {
      return "orbit flex flex-row-reverse pr-10 justify-end";
    } else if (index < menu.length / 2) {
      return "orbit flex flex-row-reverse pr-6 text-right";
    } else {
      return "orbit flex flex-row pl-6";
    }
  };
  return (
    <>
      <div className=" h-[80vh] self-center">
        <div className="flex justify-center">
          <div className=" relative  h-[510px] w-[1100px] ">
            <img
              className="w-96 circle-container left-0 mx-auto  rounded-full"
              src={pizza}
              alt="imic"
            />
            <div className="relative -bottom-16 ">
              {orbits.map((orbit, index) => (
                <div
                  key={index}
                  className={getOrbitClassName(index)}
                  style={{
                    bottom: orbit.y,
                    right: orbit.x,
                    marginRight: 540,
                    marginBottom: 150,
                  }}
                >
                  <div className="hover:text-2xl hover:cursor-pointer text-xl">
                    <Popup
                      trigger={
                        <p className="w-44 font-bold font-sans ">
                          {menu[orbit.menuItem].title}
                        </p>
                      }
                      position="center center"
                      className=" "
                    >
                      <Modal menu={menu[orbit.menuItem].title} />
                    </Popup>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Slider/> */}
    </>
  );
};
export default Orbit;

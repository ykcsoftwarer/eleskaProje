import { useState } from "react";

const CampaignFilter = () => {
  const [buttons, setButtons] = useState([
    { id: 1, title: "Tek Kişilik", bgcolor: "white", textColor: "black" },
    { id: 2, title: "2-3 Kişilik", bgcolor: "white", textColor: "black" },
    { id: 3, title: "3-4 Kişilik", bgcolor: "white", textColor: "black" },
    { id: 4, title: "+5 Kişilik", bgcolor: "white", textColor: "black" },
  ]);
  const kategori = [
    "İçecekli Menüler",
    "2-3 Kişilik Menüler",
    "Tek Kişilikler Kampanyalar",
    "Izgara Menüler",
    "Atıştırmalıklar",
    "Pide Keyfi",
  ];

  const handleClick = (id) => {
    const updatedButtons = buttons.map((button) =>
      button.id === id
        ? {
            ...button,
            bgcolor: button.bgcolor === "white" ? "#E12A32" : "white",
            textColor: button.textColor === "black" ? "white" : "black",
          }
        : button
    );
    setButtons(updatedButtons);
  };
  return (
    <div className="h-max ">
      <div className="  bg-[#f4cbd87f] block divide-y divide-gray-100  shadow w-60 rounded-[2rem] ">
        <div className="p-3 space-y-1 text-sm text-black">
          <div>
            <h5 className="text-center">KATEGORİ</h5>
            {kategori.map((item, index) => (
              <div
                className="flex py-3 rounded hover:bg-[#e12a3368] "
                key={index}
              >
                <div className="flex items-center h-5 px-2">
                  <input
                    id="helper-radio-4"
                    name="helper-radio"
                    type="radio"
                    className="w-4 h-4  text-[#E12A32] bg-gray-100 border-gray-300  appearance-none rounded-full checked:bg-red-500  "
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label
                    htmlFor="helper-radio-4"
                    className="font-medium text-black "
                  >
                    <h5>{item}</h5>
                    {/* <p
                      id="helper-radio-text-4"
                      className="text-xs font-normal text-black"
                    >
                      Some helpful instruction goes over here.
                    </p> */}
                  </label>
                </div>
              </div>
            ))}
          </div>
          <div className=" border-b-2 border-gray-300"></div>
          <div className="py-3">
            <h5 className="text-center">Fiyat</h5>
            <input
              type="range"
              min={100}
              max="500"
              // value="25"
              className="range  accent-red-500"
              step="100"
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span>100</span>
              <span>200</span>
              <span>300</span>
              <span>400</span>
              <span>500</span>
            </div>
          </div>
          <div className=" border-b-2 border-gray-300"></div>
          <div className="py-3">
            <h5 className="text-center">Porsiyonlar</h5>
            <div className="w-full flex flex-wrap gap-2 items-center justify-center">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  style={{
                    backgroundColor: button.bgcolor,
                    color: button.textColor,
                  }}
                  onClick={() => handleClick(button.id)}
                  className="w-24 text-black font-bold py-2 px-3 rounded  "
                >
                  {button.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignFilter;

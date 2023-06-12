// import resim1 from "../assets/image/kahvalti.png";
// import resim2 from "../assets/image/patates.png";
// import resim3 from "../assets/image/pizza.png";
// import resim4 from "../assets/image/salata.png";
// import resim5 from "../assets/image/gece.png";
// import resim6 from "../assets/image/person.png";
// import resim7 from "../assets/image/people.png";
// import resim8 from "../assets/image/makarna.png";

const Menü = () => {
  const Materials = [
    {
      id: "1",
      name: "Hızlı Kahvaltı",
      img: "assest/kahvalti.png",
    },

    {
      id: "2",
      name: "Atıştırmalık  ",
      img: "assest/patates.png",
    },

    {
      id: "3",
      name: "Pizza Partisi",
      img: "assest/pizza.png",
    },

    {
      id: "4",
      name: "Salata Sevenler",
      img: "assest/salata.png",
    },

    {
      id: "5",
      name: "Gece Acıktıysan",
      img: "assest/gece.png",
    },

    {
      id: "6",
      name: "Tek Kişilik Menüler",
      img: "assest/person.png",
    },

    {
      id: "7",
      name: "Üç Kişilik Menüler",
      img: "assest/people.png",
    },

    {
      id: "8",
      name: "Makarna Severler",
      img: "assest/makarna.png",
    },
  ];

  return (
    <section className="flex justify-center items-center h-40 ">
      <div className="">
        <div className="flex justify-center items-start gap-3 flex-wrap  ">
          {Materials.map((material) => {
            return (
              <div className="flex flex-col justify-between items-center  ">
                <img
                  className=" w-16 border-2 p-3 border-gray-600 border-solid rounded-full"
                  src={material.img}
                  alt=""
                />
                <div className="max-w-[80px] min-h-[40px] text-center break-normal">
                  <p className="">{material.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menü;

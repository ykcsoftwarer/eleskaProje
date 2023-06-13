// import resim1 from "../assets/image/kahvalti.png";
// import resim2 from "../assets/image/patates.png";
// import resim3 from "../assets/image/pizza.png";
// import resim4 from "../assets/image/salata.png";
// import resim5 from "../assets/image/gece.png";
// import resim6 from "../assets/image/person.png";
// import resim7 from "../assets/image/people.png";
// import resim8 from "../assets/image/makarna.png";

const Circles = () => {
  const Materials = [
    {
      id: "1",
      name: "Hızlı Kahvaltı",
      img: "assest/story/kahvalti.png",
    },

    {
      id: "2",
      name: "Atıştırmalık  ",
      img: "assest/story/patates.png",
    },

    {
      id: "3",
      name: "Pizza Partisi",
      img: "assest/story/pizza.png",
    },

    {
      id: "4",
      name: "Salata Sevenler",
      img: "assest/story/salata.png",
    },

    {
      id: "5",
      name: "Gece Acıktıysan",
      img: "assest/story/gece.png",
    },

    {
      id: "6",
      name: "Tek Kişilik Menüler",
      img: "assest/story/person.png",
    },

    {
      id: "7",
      name: "Üç Kişilik Menüler",
      img: "assest/story/people.png",
    },

    {
      id: "8",
      name: "Makarna Severler",
      img: "assest/story/makarna.png",
    },
  ];

  return (
    <section className="flex justify-center items-center mt-10 sm:mt-0 flex-wrap  ">
      <div className="">
        <div className="flex justify-center items-start gap-10 flex-wrap  ">
          {Materials.map((material) => {
            return (
              <div className="flex flex-col justify-between items-center sm:col-auto  ">
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

export default Circles;

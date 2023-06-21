import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center bgc-img md:bg-left slide-background">
      <div className="flex flex-col gap-12 w-[80%] mx-auto ">
        <div className="flex flex-col gap-12">
          <h1
            className="text-8xl font-extrabold text-red-600  header-title-font leading-tight 
          xsm:text-7xl sm:text-8xl"
          >
            PİZZA VE <br /> IZGARA
          </h1>
          <div className="border-4 border-red-600 max-w-[25rem] xsm:max-w-[12rem] "></div>
          <h4 className=" xsm:text-md sm:text-xl sm:tracking-widest sm:word-spacing  xsm:font-bold text-gray-700 xl:text-2xl md:xl ">
            ACIKTIYSAN ANINDA KAPINDA
          </h4>
        </div>
        <div className="flex xsm:gap-4 sm:gap-6 ">
          <button
            onClick={() => navigate("/menu")}
            className=" w-32 font-extrabold tracking-widest bg-red-primary text-white p-2 px-3 border-2 border-transparent hover:border-red-primary hover:bg-transparent hover:text-red-primary "
          >
            MENÜ
          </button>
          <button
            onClick={() => navigate("/campaigns")}
            className="w-40 font-extrabold tracking-widest  border-2 border-black  text-black p-2 px-3  hover:bg-black hover:text-white "
          >
            Kampanyalar
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

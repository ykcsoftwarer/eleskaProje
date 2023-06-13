const Header = () => {
  return (
    <header className="flex items-center bgc-img md:bg-left slide-background">
      <div className="flex flex-col gap-12 w-[80%] mx-auto ">
        <div className="flex flex-col gap-12">
          <h1
            className="text-7xl font-extrabold text-red-600  header-title-font leading-tight 
          xsm:text-6xl "
          >
            PİZZA VE <br /> IZGARA
          </h1>
          <div className="border-4 border-red-600 max-w-[25rem] xsm:max-w-[12rem] "></div>
          <h4 className=" xsm:text-md sm:text-xl sm:tracking-widest sm:word-spacing  xsm:font-bold text-gray-700 xl:text-9xl  ">
            ACIKTIYSAN ANINDA KAPINDA
          </h4>
        </div>
        <div className="flex xsm:gap-4 sm:gap-6 ">
          <button className=" w-32 font-extrabold tracking-widest bg-red-primary text-white p-2 px-3 border-2 border-transparent hover:border-red-primary hover:bg-transparent hover:text-red-primary ">
            MENÜ
          </button>
          <button className="w-32 font-extrabold tracking-widest  border-2 border-black  text-black p-2 px-3 text-sm hover:bg-black hover:text-white ">
            Kampanyalar
          </button>
        </div>
        {/* <div className=" flex flex-row ">
          <form className="bg-white p-4 w-[28rem] inputBoxShadow ">
            <input
              type="text"
              list="list_one"
              placeholder="Teslimat Zamanını Seç"
              className="p-4 border-2 border-gray-600 w-full outline-0  text-2xl text-black placeholder:text-black placeholder:font-bold "
            />
            <datalist id="list_one" className="listOne">
              <option value="Edge" />
              <option value="Edge" />
              <option value="Edge" />
              <option value="Edge" />
              <option value="Edge" />
              <option value="Edge" />
              <option value="Edge" />
            </datalist>
          </form> 
        </div> */}
        <div className="flex xsm:gap-5 sm:gap-16  ">
          {/* <button className="bg-black p-3 w-48  text-white  tracking-widest">
            Gel Al Servis
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;


const Header = () => {
  return (
    <header className="flex items-center  bgc-img">
      <div className="flex flex-col gap-12 w-[80%] mx-auto ">
        <div className="flex flex-col gap-12">
          <h1 className="text-9xl font-extrabold text-red-600  header-title-font leading-tight smx:text-6xl ">
            PİZZA VE <br /> IZGARA
          </h1>
          <div className="border-4 border-red-600 max-w-[25rem] smx:max-w-[12rem] "></div>
          <h4 className=" smx:text-md sm:text-3xl sm:tracking-widest sm:word-spacing  smx:font-bold text-gray-700   "> ACIKTIYSAN ANINDA KAPINDA </h4>
        </div>
        <div className="">
          <button className="bg-red-600 p-4 w-32 font-extrabold text-xl text-white tracking-widest">
            MENÜ
          </button>
        </div>
        <div className=" flex flex-row ">
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
        </div>
        <div className="flex smx:gap-5 sm:gap-16 text-xl ">
          <button className="bg-black p-3 w-48  text-white tracking-widest ">Kampanyalar</button>
          <button className="bg-black p-3 w-48  text-white  tracking-widest">
            Gel Al Servis
          </button>
        </div>
      
      </div>
    </header>
  
  );
};

export default Header;

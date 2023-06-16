import { Link } from "react-router-dom";

import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import { AiFillInfoCircle } from "react-icons/ai";

import { RiLoginBoxFill } from "react-icons/ri";
import { FiCheckCircle } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { CiGps } from "react-icons/ci";

const Navbar = () => {
  const sideBarMenü = [
    { icon: <RxAvatar />, title: "Profile", url: "/" },
    { icon: <AiFillInfoCircle />, title: "Hakında", url: "/" },
    { icon: <MdOutlineRestaurantMenu />, title: "Menü", url: "/" },
    { icon: <FiPhoneCall />, title: "İletişim", url: "/" },
    { icon: <RiLoginBoxFill />, title: "Giriş Yap", url: "/" },
    { icon: <FiCheckCircle />, title: "Üye Ol", url: "/" },
  ];
  const navbarMenü = ["Hakkında", "Menü", "İletişim", "Giriş Yap", "Üye Ol"];
  const navbarLinks = ["/about", "/menu", "/contact", "/login", "/register"];

  function renderLink(item) {
    let link;

    switch (item) {
      case "hakkında":
        link = "/about";
        break;
      case "Üye Ol":
        link = "/registerg";
        break;
      default:
        link = "/";
    }
  }
  return (
    <>
      <nav className="sticky p-4 top-0 z-50 w-full bg-[#E12A32] border-b border-gray-200 flex-wrap xsm:text-xs">
        <div className=" flex-wrap ">
          <div className="flex items-center justify-between  gap-2   ">
            <div className="flex items-center justify-start gap-x-6 ">
              <button
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-1 text-sm text-white rounded-lg hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden "
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>

              <div className="flex w-full ">
                <Link to="/">
                  <span className="self-center text-xl font-semibold sm:text-xl whitespace-nowrap text-white sm:hidden">
                    DOLGE VİTA
                  </span>
                </Link>
              </div>
            </div>

            <div className=" xl:ml-44">
              <div className=" flex justify-center items-center lg:gap-2 text-white text-lg  ">
                <CiGps className="mr-1" />
                <button
                  id="dropdownDefaultButton"
                  data-dropdown-toggle="dropdown"
                  className="text-white bg-transparent font-medium rounded-lg text-base text-center inline-flex items-center sm:text-sm"
                  type="button"
                >
                  Adres Seç
                  <svg
                    className="w-4 h-4 ml-2"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdown"
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    className="py-2 text-sm text-gray-700"
                    aria-labelledby="dropdownDefaultButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        Ev adresi
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        iş Adresi
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        Diğer
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        istanbul
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="flex gap-6 items-center">
                <div className=" md:hidden lg:flex gap-6 text-white text-base xl:text-lg  ">
                  {/* {navbarMenü.map((items, index) => (
                    <Link className="px-2">{items}</Link>
                  ))} */}

                  {/* <ul>
                    {navbarMenü.map((item, index) => (
                      <li key={index}>
                        {
                          <Link to={`/${item.toLowerCase().replace(" ", "-")}`}>
                            {renderLink}
                          </Link>
                        }
                      </li>
                    ))}
                  </ul> */}
                  <ul className="flex">
                    {navbarMenü.map((item, index) => (
                      <li key={index}>
                        <Link to={navbarLinks[index]} className="mr-4">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className=" relative text-white  " role="button">
                  <GiShoppingCart className="text-3xl" />
                  <span className="absolute bottom-5 left-6 text-[0.75rem] font-thin">
                    0
                  </span>
                </div>
                <div className="smx:hidden sm:hidden lg:block">
                  <button
                    type="button"
                    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 "
                    aria-expanded="false"
                    data-dropdown-toggle="dropdown-user"
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="user photo"
                    />
                  </button>
                </div>
                <div
                  className=" z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow "
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p className="text-sm text-gray-900 " role="none">
                      Neil Sims
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate "
                      role="none"
                    >
                      neil.sims@flowbite.com
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 "
                        role="menuitem"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <div className="h-[99px]"></div> */}
      <aside
        id="logo-sidebar"
        className="bg-[#E12A32] lg:hidden fixed smx:top-12 sm:top-10
         z-40 w-64 h-screen pt-20 transition-transform -translate-x-full border-r border-gray-200  "
        aria-label="Sidebar"
      >
        <div className="  h-full px-3  overflow-y-auto bg-[#E12A32]">
          <ul className="space-y-2 font-medium ">
            {sideBarMenü.map((event) => (
              <li>
                <a
                  hreventf="#"
                  className="flex items-center p-2 text-white  rounded-lg hover:bg-gray-100   hover:text-[#E12A32]"
                >
                  {/* <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-white transition duration-75  group-hover:text-gray-900 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg> */}
                  {event.icon}

                  <span className="flex-1 ml-3 whitespace-nowrap">
                    {event.title}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Navbar;

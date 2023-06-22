import { Link } from "react-router-dom";
import errorImg from "./error404.jpg";

const Error = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 w-full min-h-screen">
      <div className="flex justify-center items-center flex-col gap-5  ">
        <h1 className="smx:text-9xl font-bold text-[10rem]">404</h1>
        <h4 className=" smx:text-xl font-bold text-2xl">
          SORRY, PAGE NOT FOUND
        </h4>
        <p className="smx:text-xl text-gray-500 text-2xl">
          The page you are looking for was moved,
          <br /> removed, renamed or might never existed
        </p>
        <div>
          <Link
            to={"/"}
            className="smx:w-44 text-sm bg-black p-3 w-48 text-white  tracking-widest"
          >
            GO TO HOMEPAGE
          </Link>
        </div>
      </div>
      <div className="flex justify-center ">
        <img src={errorImg} alt="error image" className="w-60 h-60 " />
      </div>
    </div>
  );
};

export default Error;

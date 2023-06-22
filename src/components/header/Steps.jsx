import Login from "../../helper/login.png";
import Shop from "../../helper/online-shopping.png";
import Order from "../../helper/order.png";
import Motokurye from "../../helper/motokurye.png";
const Steps = () => {
  return (
    <div>
      <div className="w-96 h-8 ml-auto bg-red-primary mt-5"></div>
      <div className="container mx-auto p-10">
        <div className="flex justify-center flex-row sm:flex-row">
          <div className=" basis-1/3  shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="p-6 text-center">
              <img src={Login} alt="" className="w-10 mx-auto" />
              <h5 className="my-3 text-xl font-medium leading-tight">
                Üye Girişi Yap
              </h5>
              <p>Üyelik oluştur veya oturum aç.</p>
            </div>
          </div>

          <div className=" basis-1/3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="p-6 text-center">
              <img src={Shop} alt="" className="w-10 mx-auto" />
              <h5 className="my-3 text-xl font-medium leading-tight">
                Siparişini Oluştur
              </h5>
              <p>
                En lezzetli yiyecekler arasında seçtiklerini sepetine ekle.
                Sparişini tamamlamadan önce kampanyalara göz atmayı unutma!
              </p>
            </div>
          </div>

          <div className=" basis-1/3 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="p-6 text-center">
              <img src={Order} alt="" className="w-10 mx-auto" />
              <h5 className="my-3 text-xl font-medium leading-tight">
                Tek Tıkla Kapında
              </h5>
              <p>Siparişini en kısa sürede teslim etmek için yola çıkıyoruz.</p>
            </div>
          </div>
        </div>
      </div>
      <img src={Motokurye} alt="" className="w-80" />
      <div className="w-96 h-8  bg-red-primary "></div>
    </div>
  );
};

export default Steps;

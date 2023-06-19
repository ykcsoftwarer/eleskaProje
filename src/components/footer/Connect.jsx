import React from "react";

const Connect = () => {
  return (
    <div className="bg-slate-100 p-8 lg:flex-col sm:p-0">
      <h1 className="text-center font-bold text-2xl">İLETİŞİM</h1>
      <div className="flex justify-center items-center p-5 sm:flex-col sm :p-0">
        <div className="flex flex-col w-1/2 mb-2">
          <h2 className="m-2 font-bold text-xl">BİZE ULAŞIN </h2>
          <p className="m-2">
            Lütfen bu formu doldurun, en kısa zamanda sizinle iletişime geçelim.
          </p>
          <input
            className="m-2 border-solid border-2 w-10/12 sm:w-44"
            type="text"
            placeholder="Adınız Soyadınız"
          />
          <input
            className="m-2 border-solid border-2 w-10/12 sm:w-44"
            type="text"
            placeholder="E-Posta Adresiniz Giriniz  "
          />
          <textarea
            className="m-2 w-10/12 h-[9.5rem] border-solid border-2 sm:w-44"
            placeholder="Lütfen Mesajınızı Buraya Yazınız..."
          ></textarea>
          <button className=" w-1/4 m-2 sm:w-44 border-solid border-2 star bg-red-primary text-white p-2 px-3 text-sm hover:bg-red-700 active:bg-red-900">
            Gönder
          </button>
        </div>
        <div className="p-5 w-1/2 mb-10 ">
          <div className="w-[100%] text-left mb-6">
            <h1 className="font-bold mb-4">BİZ BURDAYIZ!</h1>
            <p className="mb-2 ">
              PAZARTESİ-CUMA 8:30- 17:00/ TELEFONLAR AÇIK 7/24
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d385396.33245141635!2d28.681853707378234!3d41.005368268469454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2zxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1684841644974!5m2!1str!2str"
              width="100%"
              height="250px"
              className="sm:w-44"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;

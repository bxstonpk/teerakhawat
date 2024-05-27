import React, { useEffect } from "react";
import "../App.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <section id="footer" className="block">
        <div className="w-full py-4 md:py-6 xl:py-8 md:text-2xl lg:text-3xl 2xl:text-4xl text-black bg-gray-300 content-center text-center">
          <span>Don't waste another minute, get yours now.</span>
        </div>
        <div className="w-full h-fit md:h-fit lg:h-fit bg-primary-800 grid-row-4 md:inline-grid md:grid-cols-2 md:gap-8 lg:flex justify-between px-5 md:px-16 lg:px-32 py-5 md:py-10 lg:py-10">
          <div>
            <div className="text-white text-xl md:text-xl">
              <span>บริษัท ธีรฆวัฒน์ แคน จำกัด</span>
            </div>
            <div className="">
              <a
                href="https://maps.app.goo.gl/MbW5zt45UB3d1P7g9"
                className="flex py-2"
              >
                <div>
                  <img
                    src="./home-address.png"
                    alt="address"
                    className="mr-3 h-9 my-3 md:h-9 lg:h-10"
                  />
                </div>
                <div className="text-white">
                  <span>62/55 หมู่ที่ 2 ตำบลนาดี อำเภอเมือง</span>
                  <br />
                  <span>สมุทรสาคร จังหวัดสมุทรสาคร 74000</span>
                </div>
              </a>
            </div>
          </div>
          <div className="text-white mt-4 md:mt-0">
            <div className="text-xl md:text-xl">
              <span>ติดต่อเรา</span>
            </div>
            <div className="">
              <a
                href="tel:034410659"
                className="flex mr-3 h-6 my-3 md:h-7 lg:h-8"
              >
                <img src="customer-service.png" alt="contactSer" className="" />
                <p className="px-3">034 410 659-660</p>
              </a>
            </div>
            <div className="">
              <a
                href="tel:0828394189"
                className="flex mr-3 h-6 my-3 md:h-7 lg:h-8"
              >
                <img src="./phone-call.png" alt="phone" className="" />
                <span className="px-3">082 839 4189 (ฝ่ายขาย)</span>
              </a>
            </div>
            <div className="flex mr-3 h-6 my-3 md:h-7 lg:h-8">
              <img src="./printer.png" alt="fax" className="" />
              <span className="px-3">034 410 659</span>
            </div>
            <div className="">
              <a
                href="mailto: teerakhawat.can@gmail.com"
                className="flex mr-3 h-6 my-3 md:h-7 lg:h-8"
              >
                <img src="./mail.png" alt="email" className="" />
                <span className="px-3">teerakhawat.can@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="text-white mt-8 md:mt-0">
            <div className="text-xl md:text-xl">
              <span>เวลาทำการ</span>
            </div>
            <div className="my-3">
              <span className="">วันจันทร์ - วันเสาร์ 8.00 - 17.00 น.</span>
            </div>
          </div>
          <div className="text-white mt-8 md:mt-0">
            <div className="text-xl md:text-xl">
              <span>ติดตามข่าวสาร</span>
            </div>
            <div className="flex">
              <a href="https://www.facebook.com/teerakhawatcan">
                <img
                  src="./facebook.png"
                  alt="facebook"
                  className="mr-5 h-14 my-3 md:h-12 lg:h-12"
                />
              </a>
              <a href="https://lin.ee/WJb3Fds">
                <img
                  src="./line.png"
                  alt="line"
                  className="mr-5 h-14 my-3 md:h-12 lg:h-12"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full h-12 text-white text-xs lg:h-16 md:text-base lg:text-xl bg-gray-900 content-center text-center">
          <span>
            Copyright © 2024 Teerakhawat Can Co.,LTD. Powered by Prasit K.
          </span>
        </div>
      </section>
    </>
  );
}

export default Footer;

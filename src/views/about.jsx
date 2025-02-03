import React from "react";

import data from "../data/data";

function About() {
  return (
    <section id="aboutpage" className="lg:px-20 xl:px-48 2xl:px-72">
      <div className="text-center my-4 md:my-8 md:text-xl lg:text-2xl">
        <span className="">ABOUT US</span>
        <br />
        <span>Teerakhawat Can Company Limited</span>
      </div>
      <div className="flex justify-center items-center">
      <video 
        src="/companyprofile.mp4" 
        controls 
        autoPlay 
        loop 
        muted 
        className="w-full max-w-3xl rounded-lg shadow-lg"
      />
    </div>
      <br />
      <br />
      <div className="bg-[url('./background.svg')] bg-cover">
        <div className="flex justify-between">
          <div></div>
          <div>
            <div className="">
              <img
                src="./location.jpg"
                alt="location"
                className="border-4 border-white w-40 h-40 rounded-full md:w-52 md:h-52 lg:w-72 lg:h-72"
              />
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-full h-full">
          <div
            className="w-59 h-fit mx-2 lg:mx-0 rounded-2xl content-center"
            id="bgbur"
          >
            <div className="text-center text-white pt-24 md:pt-32 lg:pt-44 md:text-2xl lg:text-3xl text-xl">
              <span>
                <b>ABOUT US</b>
              </span>
            </div>
            <div className="mx-8 mt-4 md:mt-8 lg:mt-10 text-white md:text-xl lg:text-2xl md:mx-10 lg:mx-36">
              <span>
                &emsp; บริษัท ธีรฆวัฒน์ แคน จำกัด ก่อตั้งปี 2564 ที่ตั้งสำนักงาน
                62/55 หมู่ที่ 2 ตำบลนาดี อำเภอเมืองสมุทรสาคร จังหวัดสมุทรสาคร
                บริษัทฯ ประกอบกิจการผลิต จำหน่าย และรับจ้างผลิตภัณฑ์บรรจุ เช่น
                ปี๊บ แกลลอน
              </span>
            </div>
            <div className="mx-8 mt-4 text-white md:text-xl lg:text-2xl md:mx-10 lg:mx-36">
              <p className="">วิสัยทัศน์</p>
              <span className="">&emsp;{data.vision}</span>
            </div>
            <div className="mx-8 mt-4 text-white md:text-xl lg:text-2xl md:mx-10 lg:mx-36">
              <p className="">พันธกิจ</p>
              <span className="">&emsp;{data.mission1}</span>
              <br />
              <span className="">&emsp;{data.mission2}</span>
              <br />
              <span className="">&emsp;{data.mission3}</span>
              <br />
              <span className="">&emsp;{data.mission4}</span>
            </div>
            <div className="h-8 md:h-10 lg:h-16"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

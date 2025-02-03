import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ImgSlice from "../component/ImgSlice";
import TextSlice from "../component/TextSlice";

import data from "../data/data";

/*
  lg:px-20 xl:px-48 2xl:px-72
*/

var images = ["./GallonSim.png", "./bucketSim.png"];
var text = ["GALLON", "---> BUCKET"];
var interval = 2000;

function Content() {
  return (
    <>
      <section id="Home" className="block">
        <div className="flex mx-4 mt-4 lg:px-20 xl:px-48 2xl:px-72 content-center">
          <div className="">
            <div className="">
              <span className="text-base border-l-2 border-l-primary-1000 pl-6">
                Teerakhawat ATLAS
              </span>
            </div>
            <div className="mt-6 lg:mt-10">
              <span className="text-xs md:text-base lg:text-4xl">
                Our product are made with meticulous care.
              </span>
              <br />
              <span className="text-xs md:text-base lg:text-3xl">
                in order to have quality products and is trusted by customers.
              </span>
            </div>
            <TextSlice text={text} interval={interval}></TextSlice>
            <div className="">
              <span className=" md:text-xl lg:text-3xl">
                บริษัท ธีรฆวัฒน์ แคน จำกัด
              </span>
              <div
                className="pt-1 md:pt-2 lg:pt-4 md:pr-56 lg:pr-60 2xl:pr-72"
                id="context-gride"
              >
                <span className="text-sm md:text-xl lg:text-3xl">
                  ผู้ผลิต จำหน่าย และรับจ้างผลิต ปี๊บเหลี่ยมฝาเกลียว
                  ปี๊บเหลี่ยมฝาป๊อบอัพ ปี๊บเหลี่ยมฝาเกลียวสีทอง แกลลอนเหลี่ยม
                </span>
                <span className="hidden">
                  โรงงานผลิตปี๊บ โรงงานผลิตแกลลอน โรงงานผลิตแกลลอนเหลี่ยม แกลลอน ปี๊บ ขายปี๊บ ขายแกลลอน
                </span>
              </div>
            </div>
            <div className="mt-10 flex">
              <Link to="/quotation">
                <div className="border-2 w-32 h-10 md:w-48 border-primary-700 md:h-12 lg:w-52 lg:h-16 text-center content-center bg-primary-700 text-white rounded-lg hover:border-red-300 hover:rounded-3xl hover:bg-primary-800">
                  ขอใบเสนอราคา
                </div>
              </Link>
              <div className="w-32 h-10 md:w-48 md:h-12 lg:w-52 lg:h-16 text-center content-center hover:text-blue-700">
                <Link to="/product">
                  <p className="md:text-xl lg:text-2xl">See More</p>
                </Link>
              </div>
            </div>
          </div>
          <ImgSlice images={images} interval={interval}></ImgSlice>
        </div>
        <div
          className="bg-primary-700 w-full h-fit rounded-3xl my-8"
          id="con-box"
        >
          <div className="flex justify-between lg:px-20 2xl:px-48">
            <div className="text-white text-xl md:text-4xl lg:text-6xl content-center">
              <div className="ml-5 md:ml-10 lg:ml-20 mt-10 md:mt-16">
                <span>Teerakhawat Can</span>
              </div>
              <div className="ml-8 md:ml-28 lg:ml-48">
                <span>Company Limited</span>
              </div>
            </div>
            <div className="lg:mr-24 lg:mt-8">
              <img
                src="./location.jpg"
                alt="บริษัท ธีรฆวัฒน์ แคน จำกัด"
                className="m-8 w-32 h-32 md:w-52 md:h-52 lg:w-72 lg:h-72 border-double border-2 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="px-4 md:px-10 xl:px-48 2xl:px-72 text-xs md:text-xl lg:text-3xl">
            <div>
              <div className="pb-4 text-white">
                <span>
                  ก่อตั้งปี พ.ศ. 2564 ตั้งอยู่เลขที่ 62/55 หมู่ที่ 2 ตำบลนาดี
                  อำเภอเมืองสมุทรสาคร จังหวัดสมุทรสาคร
                </span>
                <br />
                <br />
                <span>วิสัยทัศน์ (VISION)</span>
                <div className="ml-4 md:ml-8 lg:ml-24">
                  <span>
                    {data.vision}
                  </span>
                </div>
              </div>
              <div
                className="flex justify-end mr-8 my-8 lg:mr-24"
                id="read-more"
              >
                <div></div>
                <div></div>
                <div className="border-2 w-24 h-8 md:w-36 md:h-12 lg:w-52 lg:h-14 bg-primary-1000 text-center content-center rounded-2xl hover:border-red-400">
                  <Link to="/about">
                    <p>อ่านเพิ่มเติม</p>
                  </Link>
                </div>
              </div>
              <div className="h-1 md:h-4 lg:h-8 xl:h-10"></div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex">
          <div className="w-2 md:w-12"></div>
          <div
            className="bg-gray-300 w-full h-fit rounded-2xl"
            id="product-items"
          >
            <div className="text-lg pt-4 content-center text-center">
              <span className="text-xl md:text-2xl lg:text-4xl">
                ผลิตภัณฑ์ของเรา
              </span>
            </div>
            <div className="flex justify-between mx-3 md:mx-32 my-4 md:my-8 lg:mx-72">
              <div className="border w-40 py-2 lg:py-4 lg:w-72 bg-white text-center text-xl lg:text-3xl rounded-xl cursor-pointer">
                <span>ปี๊บ</span>
              </div>
              <div className="border w-40 py-2 lg:py-4 lg:w-72 bg-white text-center text-xl lg:text-3xl rounded-xl cursor-pointer">
                <span>แกลลอน</span>
              </div>
            </div>
          </div>
          <div className="w-2 md:w-12"></div>
        </div>
        <div className="grid grid-cols-2 md:mx-32 gap-2 lg:flex lg:justify-between mx-6 my-6 lg:mx-48 md:my-10">
          <div className="border border-gray-400 rounded-2xl bg-white py-2 md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./gallonreal.png"
                alt="แกลลอน แกลลอนเหลียม"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2 text-yellow-500">
              <span className="text-sm lg:text-lg">Gallon Items</span>
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  แกลลอนเหลี่ยมฝาเกลียว
                </span>
                <br />
                <span className="text-xs md:text-sm lg:text-xl"></span>
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-red-500 md:text-xl lg:text-2xl">
                  Price : TBA
                </p>
                <img
                  src="./shopping-cart.png"
                  alt=""
                  className="w-8 md:w-8 lg:w-10 object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-400 rounded-2xl bg-white py-2 md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketreal.png"
                alt="ปี๊บ ปี๊บเหลี่ยม"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2 text-yellow-500">
              <span className="text-sm lg:text-lg">Bucket Items</span>
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมฝาเกลียว
                </span>
                <br />
                <span className="text-xs md:text-sm lg:text-xl"></span>
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-red-500 md:text-xl lg:text-2xl">
                  Price : TBA
                </p>
                <img
                  src="./shopping-cart.png"
                  alt=""
                  className="w-8 md:w-8 lg:w-10 object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-400 rounded-2xl bg-white py-2 md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketpopup.png"
                alt="ปี๊บ ปี๊บเหลี่ยม"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2 text-yellow-500">
              <span className="text-sm lg:text-lg">Bucket Items</span>
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมฝาป๊อบอัพ
                </span>
                <br />
                <span className="text-xs md:text-sm lg:text-xl"></span>
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-red-500 md:text-xl lg:text-2xl">
                  Price : TBA
                </p>
                <img
                  src="./shopping-cart.png"
                  alt=""
                  className="w-8 md:w-8 lg:w-10 object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="border border-gray-400 rounded-2xl bg-white py-2 md:w-56 lg:w-72 cursor-pointer">
            <div className="">
              <img
                src="./bucketgold.png"
                alt="ปี๊บ ปี๊บเหลี่ยม"
                className="w-32 h-32 object-cover content-center justify-center md:w-48 md:h-48 lg:w-56 lg:h-56"
              />
            </div>
            <div className="mx-2 text-yellow-500">
              <span className="text-sm lg:text-lg">Bucket Items</span>
            </div>
            <div className="mx-2">
              <div>
                <span className="text-xs md:text-sm lg:text-xl">
                  ปี๊บเหลี่ยมฝาเกลียวสีทอง
                </span>
                <br />
                <span className="text-xs md:text-sm lg:text-xl"></span>
              </div>
              <div className="flex justify-between mt-1">
                <p className="text-red-500 md:text-xl lg:text-2xl">
                  Price : TBA
                </p>
                <img
                  src="./shopping-cart.png"
                  alt=""
                  className="w-8 md:w-8 lg:w-10 object-cover cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;

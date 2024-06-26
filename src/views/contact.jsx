import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_f8yj02h", "template_41792hj", form.current, {
        publicKey: "4PsKRkfJbztNwccWO",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully");
          window.location.href("/contact")
        },
        (error) => {
          console.log("FAILED >>>", error.text);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section id="contactpage">
      <div className="text-center my-4 md:my-8 md:text-xl lg:text-2xl">
        <span className="">CONTACT US</span>
        <br />
        <span>Teerakhawat Can Company Limited</span>
      </div>
      <div className="bg-[url('./background.svg')] bg-cover">
        <div className="flex justify-between">
          <div></div>
          <div>
            <div className="">
              <img
                src="./customer-service.png"
                alt="contact"
                className="border-4 border-black bg-white w-40 h-40 rounded-full md:w-52 md:h-52 lg:w-72 lg:h-72"
              />
            </div>
          </div>
          <div></div>
        </div>
        <div className="text-center text-black pt-4 md:pt-8 lg:pt-10 md:text-2xl lg:text-3xl text-xl">
          <span>
            <b>CONTACT US</b>
          </span>
        </div>
        <div className="flex justify-between">
          <div></div>
          <div
            className="w-full max-w-xs md:max-w-lg lg:max-w-2xl"
            id="forminput"
          >
            <form
              onSubmit={sendEmail}
              className="bg-white shadow-md rounded-xl px-4 pt-6 pb-8 mb-4 md:text-xl lg:text-2xl"
            >
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="nameContact"
                  type="text"
                  placeholder="Name"
                  name="contactName"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="emailContact"
                ></label>
                <input
                  name="contactEmail"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="emailContact"
                  type="emailContact"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="messageContact"
                ></label>
                <textarea
                  name="contactMessage"
                  className="shadow appearance-none border rounded w-full pb-16 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="messageContact"
                  type="text"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="flex justify-between">
                <div></div>
                <div className=" w-48 py-4 md:w-48 md:py-4 lg:w-72 lg:py-4 bg-primary-1000 text-center content-center rounded-2xl cursor-pointer">
                  <button type="submit">
                    <p>Send Message</p>
                  </button>
                </div>
                <div></div>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex justify-between my-4 md:my-6 lg:my-10">
        <div></div>
        <div className="mt-4 md:mt-0 md:text-2xl lg:text-3xl">
          <div className=" text-center pb-4">
            <span>ติดต่อเรา</span>
          </div>
          <div className="pb-1">
            <a
              href="tel:034410659"
              className="flex mr-3 h-6 my-3 md:h-7 lg:h-8"
            >
              <img src="customer-service.png" alt="contactSer" className="" />
              <p className="px-3">034 410 659-660</p>
            </a>
          </div>
          <div className="pb-1">
            <a
              href="tel:0614979998"
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
          <div className="pt-1">
            <a
              href="mailto: teerakhawat.can@gmail.com"
              className="flex mr-3 h-6 my-3 md:h-7 lg:h-8"
            >
              <img src="./mail.png" alt="email" className="" />
              <span className="px-3">teerakhawat.can@gmail.com</span>
            </a>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Contact;

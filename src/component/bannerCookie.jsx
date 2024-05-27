import React from "react";

var dontShowAgain = false;

const HiddenCookie = () => {
  if (dontShowAgain) {
    document.getElementById("cookie-banner").style.display = "none";
  } else {
    document.getElementById("cookie-banner").style.display = "block";
  }
}



function BannerCookie() {
  return (
    <>
      <div className="abolute w-screen block" id="cookie-banner">
        <div className="flex justify-center items-center h-16 text-white">
          <p className="text-center">
            We use cookies to ensure you get the best experience on our website.{" "}
            <a href="#" className="underline">
              Learn more
            </a>
          </p>
          &nbsp;&nbsp;
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={ HiddenCookie }
            onChange={ dontShowAgain = true }
          >
            Got it!
          </button>
        </div>
      </div>
    </>
  );
}

export default BannerCookie;

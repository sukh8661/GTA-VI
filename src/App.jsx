import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts//remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      rotate: 0,
      scale: 1.1,
      duration: 2,
      delay: "-0.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      rotate: 0,
      scale: 1.1,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      rotate: 0,
      scale: 1,
      x: "-50%",
      duration: 2,
      bottom: "-40%",
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      const yMove = (e.clientY / window.innerHeight - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
        y: `${yMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
        y: yMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
        y: yMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-10 w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./images/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing w-full h-screen overflow-hidden relative bg-black">
            <div className="navbar absolute top-0 left-0 z-10 w-full py-10 px-10">
              <div className="logo flex gap-6">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[9px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen ">
              <img
                className="absoulte sky scale-[1.7] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./images/sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.8] -rotate-3 top-0 left-0 w-full h-full object-cover"
                src="./images/bg.png"
                alt=""
              />
              <div className="text absolute flex flex-col top-0 left-1/2 -translate-x-1/2 text-white">
                <h1 className="text-[12rem] leading-none -ml-20">grand</h1>
                <h1 className="text-[12rem] leading-none -ml-4">theft</h1>
                <h1 className="text-[12rem] leading-none -ml-20 -mt-8">auto</h1>
              </div>
              <img
                className="absolute character -bottom-[185%] left-1/2 -translate-x-1/2 scale-[3] -rotate-20"
                src="./images/girlbg.png"
                alt=""
              />
            </div>
            <div className="btmbar absolute bottom-0 left-0 w-full py-10 px-10 text-white bg-linear-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl">Scroll Down</h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65px]"
                src="./images/ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="about w-full h-screen flex justify-center items-center bg-black">
            <div className=" contain flex w-full h-[80%]">
              <div className="relative limg w-1/2 h-full">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./images/imag.png"
                  alt=""
                />
              </div>
              <div className="rimg py-10 w-[30%]">
                <h1 className=" text-white text-7xl">Still Running,</h1>
                <h1 className=" text-white text-7xl">Not Hunting</h1>
                <p className="text-white mt-10 font-[Montserrat-Medium]">
                  When a young street hustler, a retired bank robber, and a
                  terrifying psychopath find themselves entangled with some of
                  the most frightening and deranged elements of the criminal
                  underworld, the U.S. government, and the entertainment
                  industry, they must pull off a series of dangerous heists to
                  survive in a ruthless city in which they can trust nobody —
                  least of all each other.
                </p>
                <p className="text-white mt-3 font-[Montserrat-Medium]">
                  GTAVI players on PC can migrate their Story Mode progress and
                  GTA Online characters and progression to the newly upgraded
                  version. Players on PlayStation 4 or Xbox One can also
                  transfer both Story Mode and Online progress to PlayStation 5
                  or Xbox Series X|S with a one-time migration.
                </p>
                <p className="text-white mt-3 font-[Montserrat-Medium]">
                  Experience GTA Online, a dynamic and ever-evolving online
                  universe for up to 30 players, where you can rise from
                  street-level hustler to become a kingpin of your own criminal
                  empire.
                </p>

                <button className="bg-[#FFB300] px-10 py-7 text-black mt-10 text-2xl border rounded-2xl">
                  Download Now
                </button>
              </div>
            </div>
          </div>
          <div className="footer w-full h-full justify-center font-[Montserrat-Medium] text-center py-5 text-white">
            Made with ❤️ by Sukhpreet Singh
          </div>
        </div>
      )}
    </>
  );
}

export default App;

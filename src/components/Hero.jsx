import React, { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";

function Hero() {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideo = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideo);

    return () => {
      window.removeEventListener("resize", handleVideo);
    };
  }, []);

  useGSAP(() => {
    gsap.to(".iphone", {
      opacity: 1,
      delay: 1.5,
      delayDuration: 10,
      ease: "bounce.inOut",
    });
  });

  useGSAP(() => {
    gsap.to("#cta", {
      opacity: 1,
      delay: 2.5,
      delayDuration: 10,
      ease: "bounce.inOut",
    });
  });

  return (
    <div className="w-full nav-height bg-black ">
      <div className="h-5/6 w-full flex-center flex-col  ">
        <p className="hero-title iphone">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            loop
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4"></source>
          </video>
        </div>
        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="" className="btn">
            Buy
          </a>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

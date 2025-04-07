"use client"
import Nav from "./Nav";
import HamburgerComp from "./Hamburger";
import logo from "../../../public/Logo.png";
import Image from "next/image";
import { useState, useEffect } from "react";
export default function Header({home, portfolio, reviews, contactus, services}) {
  const [small, setSmall] = useState(window.innerWidth)

  const handleResize = () => {
    setSmall(window.innerWidth)
  }

  useEffect(() => {

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [])


    return (
      <>
        <div id="logo" className="flex">
          <Image alt="logo" src={logo} />
          <h2 className="font-semibold text-[21px] mt-[8px] ml-[8px]">
            Bubble Bash
          </h2>
        </div>
        {small > 928 ? (
          <Nav
            home = {home}
            reviews={reviews}
            portfolio={portfolio}
            contactus={contactus}
            services={services}
          />
        ) : (
          <HamburgerComp
            home = {home}
            reviews={reviews}
            portfolio={portfolio}
            contactus={contactus}
            services={services}
          />
        )}
      </>
    );

}

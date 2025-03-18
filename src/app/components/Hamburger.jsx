"use client"
import Nav from "./Nav";
import { useState } from "react"
import Hamburger from "hamburger-react";

export default function HamburgerComp({ portfolio, reviews, contactus, services }) {
  const [isOpen, setOpen] = useState(false);
  return (
    <nav>
      <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen p-4 text-white bg-[#2F6B4F]">
          <div className="flex items-center justify-end">
            <Hamburger size={24} toggled={isOpen} toggle={setOpen} />
          </div>
          <nav className="flex flex-col items-center space-y-[50px]">
            <div>Home</div>
            <div
              onClick={() =>{
                services.current?.scrollIntoView({
                  behavior: "smooth",
                })
                setOpen(false)
              }
              }
            >
              Our Services
            </div>
            <div
              onClick={() =>{
                portfolio.current?.scrollIntoView({
                  behavior: "smooth",
                })
                setOpen(false)
              }
              }
            >
              Portfolio
            </div>
            <div
              onClick={() =>{
                reviews.current?.scrollIntoView({
                  behavior: "smooth",
                })
                setOpen(false);
              }
              }
            >
              Testimonial
            </div>
            <div
              onClick={() =>{
                contactus.current?.scrollIntoView({
                  behavior: "smooth",
                })
                setOpen(false);
              }
              }
            >
              Contact Us
            </div>
          </nav>
        </div>
      )}
    </nav>
  );
}
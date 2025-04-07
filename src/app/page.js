"use client";
import { useRef } from "react";
// import Header from "./components/Heade";
import Main from "./components/Main";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/reviews";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import dynamic from 'next/dynamic';


export default function Home() {
  const reviewsRef = useRef()
  const portfolioRef = useRef()
  const contactusRef = useRef()
  const servicesRef = useRef()
  const homesRef = useRef()

  const Header = dynamic(() => import("../app/components/Heade"), {
    ssr: false,
  })

  return (
    <>
        <header className="flex justify-between w-[100%] pt-[5px] pb-[10px] pr-[10px] pl-[10px] fixed top-0 bg-[#2F6B4F] z-[99] text-white ">
          <Header home= {homesRef} reviews= {reviewsRef} portfolio = {portfolioRef} contactus = {contactusRef} services = {servicesRef}/>
        </header>
        <main ref={homesRef} id="main" className=" mt-[30px] pr-[10px] pl-[10px] bg-[#2F6B4F] text-white md:pr-[25px] md:pl-[25px] sm:pr-[10px] sm:pl-[10px]" >
          <Main />
        </main>
        <section
          className="w-[100%] text-[#2A2C3D] pr-[10px] pl-[10px] md:pr-[25px] md:pl-[25px] sm:pr-[10px] sm:pl-[10px]">
          <Stats/>
        </section>
        <section ref={servicesRef} className="text-[#2A2C3D] w-[100%] bg-[#F9F9F9] md:pr-[25px] md:pl-[25px] sm:pr-[10px] sm:pl-[10px]">
          <Services />
        </section>
        <section ref={portfolioRef} className="text-[#2A2C3D] w-[100%] md:pr-[25px] md:pl-[25px] sm:pr-[10px] sm:pl-[10px]">
          <Portfolio />
        </section>
        <section ref={reviewsRef} className="text-[#2A2C3D] w-[100%] md:pr-[25px] md:pl-[25px] sm:pr-[10px] sm:pl-[10px]">
          <Reviews />
        </section>
        <section 
        ref={contactusRef}
          id="contactus"
          className=" w-[100%] pt-[20px] pb-[20px] md:pr-[25px] pr-[10px] pl-[10px] md:pl-[25px] sm:pr-[10px] sm:pl-[10px] bg-[#2F6B4F] text-white "
        >
          <Contactus />
        </section>
        <footer className="text-[#2A2C3D] w-[100%]  md:pr-[25px] md:pl-[25px] sm:pr-[10px] sm:pl-[10px]">
          <Footer home= {homesRef} reviews= {reviewsRef} portfolio = {portfolioRef} contactus = {contactusRef} services = {servicesRef}/>
        </footer>
      {/* </div> */}
    </>
  );
}

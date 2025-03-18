"use client";
import { useRef } from "react";
import Header from "./components/Heade";
import Main from "./components/Main";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Reviews from "./components/reviews";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
export default function Home() {
  const reviewsRef = useRef()
  const portfolioRef = useRef()
  const contactusRef = useRef()
  const servicesRef = useRef()
  return (
    <>
      <div
        id="bg"
        className="w-[100%] h-[100vh] bg-[#2F6B4F] text-white font-light"
      >
        <header className="w-[100%] flex pt-[40px] pr-[80px] pl-[80px]">
          <Header reviews= {reviewsRef} portfolio = {portfolioRef} contactus = {contactusRef} services = {servicesRef}/>
        </header>
        <main id="main" className="mt-[40px] pr-[100px] pl-[100px]">
          <Main />
        </main>
        <section ref={servicesRef} className="text-[#2A2C3D] w-[100%] bg-[#F9F9F9] pl-[30px]">
          <Services />
        </section>
        <section ref={portfolioRef} className="text-[#2A2C3D] w-[100%]">
          <Portfolio />
        </section>
        <section ref={reviewsRef} className="text-[#2A2C3D] w-[100%]">
          <Reviews />
        </section>
        <section 
        ref={contactusRef}
          id="contactus"
          className=" w-[100%] pt-[20px] pr-[140px] pl-[140px] pb-[20px] bg-[#2F6B4F] text-white w[100%]"
        >
          <Contactus />
        </section>
        <footer className="text-[#2A2C3D] w-[100%] flex pt-[90px] pb-[90px] max-[928px]:flex-col">
          <Footer />
        </footer>
      </div>
    </>
  );
}

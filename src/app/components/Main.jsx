import mainImage from "../../../public/landingpageimage.jpg"
import Image from "next/image";
export default function Main(){
    return (
      <div className="max-w-[1600px] mr-auto ml-auto">
      <div className="flex flex-col justify-between max-w-[1600px] mr-auto ml-auto">
        <h1 className=" text-[30px] self-center text-center font-semibold mt-[60px] mr-auto ml-auto font-mono lg:text-[50px] lg:w-[70%] md:text-[70px] sm:text-[50px]">
          Create Amazing Digital Product For your Business
        </h1>
        <h3 className=" text-center text-[17px] font-light mt-[30px] mb-[40px] ">
          We are a professional digital agency that has been established since
          2016, we present a variety of digital services that can help you solve
          problems in your business
        </h3>
        <button className="bg-white w-fit self-center text-[#2A2C3D] text-[30px] font-semibold pt-2 pb-2 pr-5 pl-5 mb-[60px] cursor-pointer contact">
          Get Started
        </button>

      </div>
      </div>
    );
}
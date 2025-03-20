import mainImage from "../../../public/landingpageimage.jpg"
import Image from "next/image";
export default function Main(){
    return (
      <div className="flex flex-col justify-between max-w-[2000px] mr-auto ml-auto">
        <h1 className=" text-[500%] self-center text-center font-semibold mt-[60px] mr-auto ml-auto font-mono">
          Create Amazing Digital Product For your Business
        </h1>
        <h3 className=" text-center text-[22px] font-light mr-[2%] ml-[2%] mt-[45px] mb-[60px]">
          We are a professional digital agency that has been established since
          2016, we present a variety of digital services that can help you solve
          problems in your business
        </h3>
        <button className="bg-white w-fit self-center text-[#2A2C3D] text-[30px] font-semibold pt-2 pb-2 pr-5 pl-5 mb-[60px] cursor-pointer contact">
          Get Started
        </button>
        <div id="lp" className="w-[90%] mr-auto ml-auto">
          <Image src={mainImage} />
        </div>
        <div
          id="stats"
          className="w-[90%] flex text-[#2A2C3D] justify-between self-center mt-[30px] mb-[30px]"
        >
          <div>
            <h2 className="text-center font-semibold text-[40px]">1.2K+</h2>
            <h3>Happy Clients</h3>
          </div>
          <div>
            <h2 className="text-center font-semibold text-[40px]">1.1K+</h2>
            <h3>WorldWide Clients</h3>
          </div>
          <div>
            <h2 className="text-center font-semibold text-[40px]">6+</h2>
            <h3>Years of Experience</h3>
          </div>
          <div>
            <h2 className="text-center font-semibold text-[40px]">12+</h2>
            <h3>Award Winnders</h3>
          </div>
        </div>
      </div>
    );
}
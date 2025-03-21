import Image from "next/image";
import hospital from "../../../public/hospital.jpg";
import food from "../../../public/food.jpg";
import superM from "../../../public/super.jpg"

export default function Portfolio(){
    return (
      <div className="max-w-[1600px] mr-auto ml-auto">
        <div className="w-[80%] mb-[40px] ml-[10%] sm:mt-[15px]">
          <h3>Our Portofolio’s</h3>
          <h2 className="text-[25px] font-semibold">
            Recent Projects
          </h2>
        </div>
        <div
          id="portfolio"
          className="flex flex-wrap lg:w-[90%]"
        >
          <div className="w-[310px] sm:w-[250px] lg:w-[300px] 2xl:w-[350px]">
            <Image  src={hospital} />
            <h2 className="text-[16px] 2xl:text-[20px]">Website My Hospital</h2>
            <p className="text-[13px] 2xl:text-[17px]">
              Create a hospital website with patient, doctor, and drug logistics
              features that help hospital operations
            </p>
          </div>
          <div className="w-[310px] sm:w-[250px] lg:w-[300px] 2xl:w-[350px]">
            <Image  src={food} />
            <h2 className="text-[16px] 2xl:text-[20px]">Food & Beverages Corp Logo</h2>
            <p className="text-[13px] 2xl:text-[17px]">
              Create a logo for a food & beverage company, with emphasis on
              aesthetics and user requests
            </p>
          </div>
          <div className="w-[310px] sm:w-[250px] lg:w-[300px] 2xl:w-[350px]">
            <Image src={superM} />
            <h2 className="text-[16px] 2xl:text-[20px]">Supermarket Mobile Apps</h2>
            <p className="text-[13px] 2xl:text-[17px]">
              Develop mobile applications for supermarkets with buy, auto-pay,
              and marketplace features
            </p>
          </div>
        </div>
      </div>
    );
}
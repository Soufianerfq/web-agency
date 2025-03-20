import Image from "next/image";
import hospital from "../../../public/hospital.jpg";
import food from "../../../public/food.jpg";
import superM from "../../../public/super.jpg"

export default function Portfolio(){
    return (
      <div className="max-w-[2000px] mr-auto ml-auto">
        <div className="w-[80%] mb-[40px] pt-[50px] ml-[10%]">
          <h3>Our Portofolio’s</h3>
          <h2 className="text-[30px] font-semibold">
            Recent Projects
          </h2>
        </div>
        <div
          id="portfolio"
          className="flex flex-wrap "
        >
          <div className="">
            <Image  src={hospital} />
            <h2>Website My Hospital</h2>
            <p>
              Create a hospital website with patient, doctor, and drug logistics
              features that help hospital operations
            </p>
          </div>
          <div>
            <Image  src={food} />
            <h2>Food & Beverages Corp Logo</h2>
            <p>
              Create a logo for a food & beverage company, with emphasis on
              aesthetics and user requests
            </p>
          </div>
          <div>
            <Image  src={superM} />
            <h2 >Supermarket Mobile Apps</h2>
            <p>
              Develop mobile applications for supermarkets with buy, auto-pay,
              and marketplace features
            </p>
          </div>
        </div>
      </div>
    );
}
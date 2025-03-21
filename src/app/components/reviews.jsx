import Image from "next/image";
import katty from "../../../public/Katty.png"
import john from "../../../public/John.png"
import james from "../../../public/james.png"

export default function Reviews(){
    return (
      <div className="max-w-[1600px] mr-auto ml-auto">
        <div className="w-[80%] mb-[40px] ml-[10%]">
          <h3>Client Reviews</h3>
          <h2 className="text-[25px] font-semibold">
            What Our Happy Clients Say About Us
          </h2>
        </div>
        <div id="reviews" className="flex flex-wrap lg:w-[90%] ">
          <div className="w-[310px] sm:w-[250px] lg:w-[300px] 2xl:w-[350px] ">
            <h2 className="text-[16px] 2xl:text-[20px] font-semibold mb-[8px]">Website My Hospital</h2>
            <p className="text-[13px] 2xl:text-[17px] mb-[10px]">
              Very nice to work with Bubble Bash, a reliable and responsive team
              is very helpful
            </p>
            <div className="flex">
              <Image src={katty} />
              <div>
                <h2 className="font-semibold text-[16px]">Katty Clock</h2>
                <h2 className="text-[13px] 2xl:text-[17px] ">CEO My Hospital</h2>
              </div>
            </div>
          </div>
          <div className="w-[310px] sm:w-[250px] lg:w-[300px] 2xl:w-[350px]">
            <h2 className="text-[16px] 2xl:text-[20px] font-semibold mb-[8px]">Logo F&B Corp</h2>
            <p className="text-[13px] 2xl:text-[17px] mb-[10px]">
              Really the best service we've ever gotten, really looking forward
              to the next project
            </p>
            <div className="flex">
              <Image src={john} />
              <div>
                <h2 className="font-semibold text-[16px]">John Robert </h2>
                <h2 className="text-[13px] 2xl:text-[17px] ">CEO F&B Corp</h2>
              </div>
            </div>
          </div>
          <div className="w-[310px] sm:w-[250px] lg:w-[300px] 2xl:w-[350px]" >
            <h2 className="text-[16px] 2xl:text-[20px] font-semibold mb-[8px]">Supermarket Mobile Apps</h2>
            <p className="text-[13px] 2xl:text-[17px] mb-[10px]">
              Really the best service we've ever gotten, really looking forward
              to the next project
            </p>
            <div className="flex">
              <Image src={james} />
              <div>
                <h2 className="font-semibold text-[16px]">James Clock</h2>
                <h2 className="text-[13px] 2xl:text-[17px] ">CEO Supermarket</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
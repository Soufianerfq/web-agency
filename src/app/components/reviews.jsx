import Image from "next/image";
import katty from "../../../public/Katty.png"
import john from "../../../public/John.png"
import james from "../../../public/james.png"

export default function Reviews(){
    return (
      <>
        <div className="w-[80%] ml-auto mr-auto mb-[40px] pt-[50px]">
          <h3>Client Reviews</h3>
          <h2 className="text-[30px] font-semibold">
            What Our Happy Clients Say About Us
          </h2>
        </div>
        <div id="reviews" className="flex flex-wrap ">
          <div className="w-[300px]">
            <h2 className="font-semibold text-[18px]">Website My Hospital</h2>
            <p className="text-[14px]">
              Very nice to work with Bubble Bash, a reliable and responsive team
              is very helpful
            </p>
            <div className="flex">
              <Image src={katty} />
              <div>
                <h2 className="font-semibold text-[16px]">Katty Clock</h2>
                <h2 className="text-[14px]">CEO My Hospital</h2>
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <h2 className="font-semibold text-[18px]">Logo F&B Corp</h2>
            <p className="text-[14px]">
              Really the best service we've ever gotten, really looking forward
              to the next project
            </p>
            <div className="flex">
              <Image src={john} />
              <div>
                <h2 className="font-semibold text-[16px]">John Robert </h2>
                <h2 className="text-[14px]">CEO F&B Corp</h2>
              </div>
            </div>
          </div>
          <div className="w-[300px]">
            <h2 className="font-semibold text-[18px]">Supermarket Mobile Apps</h2>
            <p className="text-[14px]">
              Really the best service we've ever gotten, really looking forward
              to the next project
            </p>
            <div className="flex">
              <Image src={james} />
              <div className="">
                <h2 className="font-semibold text-[16px]">James Clock</h2>
                <h2 className="text-[14px]">CEO Supermarket</h2>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
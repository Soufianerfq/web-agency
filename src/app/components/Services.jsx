import Image from "next/image"
import figma from "../../../public/FigmaLogo.png"
import webdev from "../../../public/Code.png"
import content from "../../../public/ArticleMedium.png"
import branding from "../../../public/branding.png"
import video from "../../../public/VideoCamera.png"
import illustrating from "../../../public/illustrating.png";

export default function Services(){
    return (
      <div className="max-w-[1600px] mr-auto ml-auto flex flex-col justify-around ">
        <div className="w-[80%] mb-[40px] pt-[50px] ml-[10%]">
          <h3>Our Services</h3>
          <h2 className="text-[25px] font-semibold">
            We Provide What You Need
          </h2>
        </div>
        <div
          id="services"
          className="flex flex-wrap w-[87%] justify-center self-center lg:w-[80%]"
        >
          <div className="card w-[310px] sm:w-[250px] lg:w-[250px] 2xl:w-[350px]">
            <Image alt="figma" src={figma} />
            <h2 className="text-[16px] 2xl:text-[20px]">UI/UX Designer</h2>
            <p className="text-[13px] 2xl:text-[17px]">
              We are ready to make your website more friendly and efficient in
              the eyes of users
            </p>
          </div>
          <div className="card w-[310px] sm:w-[250px] lg:w-[250px] 2xl:w-[350px]">
            <Image alt="webdev" src={webdev} />
            <h2 className="text-[16px] 2xl:text-[20px]">Web Development</h2>
            <p className="text-[13px] 2xl:text-[17px]">
              Want to create a website that has many features? We have the
              answer for you.
            </p>
          </div>
          <div className="card w-[310px] sm:w-[250px] lg:w-[250px] 2xl:w-[350px]">
            <Image alt="content" src={content} />
            <h2 className="text-[16px] 2xl:text-[20px]">Content Writer</h2>
            <p className="text-[13px] 2xl:text-[17px]">
              We provide interesting content and can attract customers for you
            </p>
          </div>
          <div className="card w-[310px] sm:w-[250px] lg:w-[250px] 2xl:w-[350px]">
            <Image alt="branding" src={branding} />
            <h2 className="text-[16px] 2xl:text-[20px]">Branding</h2>
            <p className="text-[13px] 2xl:text-[17px]">
              Create visual branding with amazing result, you just sit back and
              relax
            </p>
          </div>
          <div className="card w-[310px] sm:w-[250px] lg:w-[250px] 2xl:w-[350px]">
            <Image alt="video" src={video} />
            <h2 className="text-[16px] 2xl:text-[20px]">Editing Video</h2>
            <p className="text-[13px] 2xl:text-[17px]">
              Want to create a website that has many features? We have the
              answer for you.
            </p>
          </div>
          <div className="card w-[310px] sm:w-[250px] lg:w-[250px] 2xl:w-[350px]">
            <Image alt="illustration" src={illustrating} />
            <h2 className="text-[16px] 2xl:text-[20px]">Illustrating</h2>
            <p className="text-[13px] 2xl:text-[17px]">
              Create beauty illustrasion as you need, and make it interesting
            </p>
          </div>
        </div>
      </div>
    );
}
import Image from "next/image"
import figma from "../../../public/FigmaLogo.png"
import webdev from "../../../public/Code.png"
import content from "../../../public/ArticleMedium.png"
import branding from "../../../public/branding.png"
import video from "../../../public/VideoCamera.png"
import illustrating from "../../../public/illustrating.png";

export default function Services(){
    return (
      <div className="max-w-[2000px] mr-auto ml-auto flex flex-col justify-around w-[100%]">
        <div className="w-[80%] mb-[40px] pt-[50px] ml-[10%]">
          <h3>Our Services</h3>
          <h2 className="text-[30px] font-semibold">
            We Provide What You Need
          </h2>
        </div>
        <div
          id="services"
          className="flex flex-wrap w-[87%] justify-center self-center"
        >
          <div className="card">
            <Image src={figma} />
            <h2>UI/UX Designer</h2>
            <p>
              We are ready to make your website more friendly and efficient in
              the eyes of users
            </p>
          </div>
          <div className="card">
            <Image src={webdev} />
            <h2>Web Development</h2>
            <p>
              Want to create a website that has many features? We have the
              answer for you.
            </p>
          </div>
          <div className="card">
            <Image src={content} />
            <h2>Content Writer</h2>
            <p>
              We provide interesting content and can attract customers for you
            </p>
          </div>
          <div className="card">
            <Image src={branding} />
            <h2>Branding</h2>
            <p>
              Create visual branding with amazing result, you just sit back and
              relax
            </p>
          </div>
          <div className="card">
            <Image src={video} />
            <h2>Editing Video</h2>
            <p>
              Want to create a website that has many features? We have the
              answer for you.
            </p>
          </div>
          <div className="card">
            <Image src={illustrating} />
            <h2>Illustrating</h2>
            <p>
              Create beauty illustrasion as you need, and make it interesting
            </p>
          </div>
        </div>
      </div>
    );
}
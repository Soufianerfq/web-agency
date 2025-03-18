import Image from "next/image";
import facebook from "../../../public/facebook.png"
import instagram from "../../../public/Instagram.png"
import linkdin from "../../../public/LinkedIn.png";
import twitter from "../../../public/twitter.png"
import logo from "../../../public/Logo.png"

export default function Footer(){
    return (
      <>
        <div className=" w-[30%] mr-auto ml-auto">
          <div id="logo" className="flex">
            <Image src={logo} />
            <h2 className="font-semibold text-[21px] mt-[8px] ml-[8px]">
              Bubble Bash
            </h2>
          </div>
          <p className="mt-[35px] text-[20px]">
            Introducing, We are Bubble Bash digital agency company with more
            than 6 years of experience. We are committed to serve with all our
            heart
          </p>
          <div id="sm" className="flex mt-[35px]">
            <Image src={facebook} />
            <Image src={twitter} />
            <Image src={instagram} />
            <Image src={linkdin} />
          </div>
        </div>

        <div id="links" className="w-[30%] mr-auto ml-auto flex space-x-[15%] text-[20px]">
          <div>
            <h2 className="font-semibold">Page</h2>
            <h3>Home</h3>
            <h3>Our Services</h3>
            <h3>Portfolio</h3>
            <h3>Testimonial</h3>
            <h3>Contact Us</h3>
          </div>
          <div>
            <h2 className="font-semibold">Explore</h2>
            <h3>Resources</h3>
            <h3>Blog</h3>
            <h3>Documents</h3>
          </div>
          <div>
            <h2 className="font-semibold">Company</h2>
            <h3>About Us</h3>
            <h3>Partners</h3>
            <h3>Customers</h3>
          </div>
        </div>
      </>
    );
}
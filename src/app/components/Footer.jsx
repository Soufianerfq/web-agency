import Image from "next/image";
import facebook from "../../../public/facebook.png"
import instagram from "../../../public/Instagram.png"
import linkdin from "../../../public/LinkedIn.png";
import twitter from "../../../public/twitter.png"
import logo from "../../../public/Logo.png"

export default function Footer({home, portfolio, reviews, contactus, services }){
    return (
      <div className="max-w-[1600px] flex flex-col sm:flex-row  ml-auto mr-auto">
        <div className=" w-[80%] mr-auto ml-auto sm:w-[50%] 2xl:w-[30%]">
          <div className="flex mt-[15px]"  >
            <Image alt="logo" src={logo} />
            <h2 className="font-semibold text-[21px] mt-[8px] ml-[8px]">
              Bubble Bash
            </h2>
          </div>
          <p className="mt-[23px] text-[15px] sm:text-[14px] 2xl:text-[18px]">
            Introducing, We are Bubble Bash digital agency company with more
            than 6 years of experience. We are committed to serve with all our
            heart
          </p>
          <div id="sm" className="flex mt-[30px]">
            <Image alt="facebook" src={facebook} />
            <Image alt="twitter" src={twitter} />
            <Image alt="instagram" src={instagram} />
            <Image alt="linkdin" src={linkdin} />
          </div>
        </div>

        <div id="links" className="w-[100%] mr-auto ml-auto flex justify-evenly text-[14px] mt-[30px] mb-[30px] sm:text-[14px] sm:w-[50%] 2xl:w-[30%] 2xl:text-[18px]">
          <div className="flex flex-col">
            <h2 className="font-semibold">Page</h2>
<button 
          onClick={() =>
          home.current?.scrollIntoView({
            behavior: "smooth",
                        block: "start"

          })
        }>Home</button>
      <button
        onClick={() =>
          services.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Our Services
      </button>
      <button
        onClick={() =>
          portfolio.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
      Portfolio
      </button>
      <button
        onClick={() =>
          reviews.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Testimonial
      </button>
      <button
        onClick={() =>
          contactus.current?.scrollIntoView({
            behavior: "smooth",
          })
        }
      >
        Contact Us
      </button>
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
      </div>
    );
}


      
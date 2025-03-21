export default function Contactus(){
    return ( 
      <div className="max-w-[1600px] flex justify-center flex-col mr-auto ml-auto">
        <h1 className="text-[30px] self-center text-center font-semibold mt-[30px] mr-auto ml-auto font-mono lg:text-[50px] lg:w-[70%] md:text-[70px] sm:text-[50px]">
          Have a project idea and want to make it come true?
        </h1>
        <h3 className=" text-center text-[17px] font-light mt-[30px] mb-[40px]">
          Please contact us and we will discuss about your project, don't forget
          we are always here for you
        </h3>
        <button className="bg-white w-fit self-center text-[#2A2C3D] text-[30px] font-semibold pt-2 pb-2 pr-5 pl-5 mb-[60px] cursor-pointer contact">
          Get Started
        </button>
      </div>
    );
}
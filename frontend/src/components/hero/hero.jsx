import Mode from "../model/model";
import Bg from "../../assets/bg.png";
import Down from "../../assets/downward.png"

const Hero = () => {

  return (
    <div className="relative flex flex-col md:flex-row text-white min-h-screen overflow-hidden">
      <div
        style={{ backgroundImage: `url(${Bg})` }}
        className="absolute inset-0 bg-cover bg-top blur-sm scale-105"
      />

      <div className="bg-gradient-to-r from-black via-transparent to-blue-900/20 inset-0 opacity-60 absolute z-10"/>
      
      <div className="relative z-30 min-h-screen flex items-center pointer-events-none px-10">
        <div className="max-w-xl flex flex-col items-center">
        <h1 className="w-full text-7xl font-semibold font-serif leading-tight text-left mt-20 drop-shadow-[0_0px_10px_rgba(220,38,38,1)]">Explore The <br />
          <span className="text-red-800 rotate-180 inline-block italic ">Upside Down</span>
        </h1>
        <button className="uppercase mt-25 text-[14px] tracking-[0.4em] pointer-events-auto flex flex-col gap-5 animate-bounce-slow" >
          Start Adventure
          <img src={Down} alt="" className="w-10 h-8 mx-auto " />
        </button>
        </div>
      </div>

      <div className="w-full h-[360px] md:h-full md:absolute md:inset-0 md:-left-20 z-20" >
        <Mode />
      </div>
    </div>
  );
};

export default Hero;

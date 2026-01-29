import Mode from "../model/model";
import Bg from "../../assets/bg.png";

const Hero = () => {
  return (
    <div className="relative flex min-h-screen overflow-hidden">
      <div
        style={{ backgroundImage: `url(${Bg})` }}
        className="absolute inset-0 bg-cover bg-top blur-sm scale-105"
      />
      <div className="bg-gradient-to-r from-black via-transparent to-blue-900/20 inset-0 opacity-60 absolute"/>
      <div className="relative z-20 w-full ">
        <Mode />
      </div>
    </div>
  );
};

export default Hero;

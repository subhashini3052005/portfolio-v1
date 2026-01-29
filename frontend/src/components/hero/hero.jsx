import Bg from "../../assets/bg.png";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        style={{ backgroundImage: `url(${Bg})` }}
        className="absolute inset-0 bg-cover bg-top blur-sm scale-105"
      />
    </div>
  );
};

export default Hero;

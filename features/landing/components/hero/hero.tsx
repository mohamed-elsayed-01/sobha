import heroImg from "@/public/images/hero.jpeg";
import LeftSide from "@/features/landing/components/hero/left-side";
import RightSide from "@/features/landing/components/hero/right-side";


const hero = () => {
  return (
    <div
      id="hero"
      style={{
        backgroundImage: `url(${heroImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full relative"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_4.99%,rgba(0,0,0,0.3)_70.78%)]"
      />
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 relative z-2 pt-12 lg:pt-0">
        <div className="h-full col-span-1 bg-transparent lg:bg-[rgba(83,83,83,0.6)] flex flex-col  justify-center pt-[80px] lg:pt-0">
          <LeftSide />
        </div>
        <div className="h-full col-span-1 flex items-center justify-center py-10 lg:py-0">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default hero;

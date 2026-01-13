import { Button } from "@/components/ui/button";
import img1 from "@/public/images/life-style/ls1.png";
import img2 from "@/public/images/life-style/ls2.jpg";
import img3 from "@/public/images/life-style/ls3.jpg";
import img4 from "@/public/images/life-style/ls5.png";
import img5 from "@/public/images/life-style/ls4.jpg";
import img7 from "@/public/images/life-style/ls6.jpg";
import Image from "next/image";
import Link from "next/link";

const LifeStyle = () => {
  return (
    <div
      id="residences"
      className="xl:min-h-[1000px] w-full px-[20px] lg:px-[40px] py-[80px] xl:py-0 relative flex justify-center items-center bg-[#FFFFFF]"
    >
      <div className="relative z-5">
        <div className="h-[250px] relative lg:hidden">
          <div className="block absolute left-0 z-4 w-[237.32px] h-[236.832px] bg-white rounded-[4px] transform rotate-[-10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-1">
            <div className="w-full h-full relative rounded-[4px] overflow-hidden">
              <Image src={img1.src} alt="img1" fill className="object-cover" />
            </div>
          </div>
          <div className="block absolute right-0 z-4 w-[237.32px] h-[236.832px] bg-white rounded-[4px] transform rotate-[10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-1">
            <div className="w-full h-full relative rounded-[4px] overflow-hidden">
              <Image src={img4.src} alt="img1" fill className="object-cover" />
            </div>
          </div>
          <div className="block absolute right-0 z-4 w-[237.32px] h-[236.832px] bg-white rounded-[4px] transform left-1/2 -translate-x-1/2 shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-1">
            <div className="w-full h-full relative rounded-[4px] overflow-hidden">
              <Image src={img5.src} alt="img1" fill className="object-cover" />
            </div>
          </div>
        </div>
        <div className="w-fit py-[40px] px-8 flex flex-col items-center lg:shadow-[0_100px_200px_0_rgba(52,64,84,0.18)]">
          <h2 className="text-[#212529] text-[48px] text-center tracking-[-1.92px] font-dm-serif">Planning Features</h2>
          <ul className="mt-[24px] flex flex-col list-disc!">
            <li className="block font-poppins text-[rgba(83,83,83,0.6)] text-lg font-normal tracking-[-0.72px] capitalize">
              ● Low-density, family-oriented master plan
            </li>
            <li className="block font-poppins text-[rgba(83,83,83,0.6)] text-lg font-normal tracking-[-0.72px] capitalize">
              ● 30%+ green spaces and landscaped parks
            </li>
            <li className="block font-poppins text-[rgba(83,83,83,0.6)] text-lg font-normal tracking-[-0.72px] capitalize">
              ● Walkable, wellness-focused environment
            </li>
          </ul>
          <Link href={"#register"} className="border border-[#CFAF8F] rounded-full bg-transparent mt-[49px] text-base px-[28px] py-[5px] cursor-pointer font-poppins">
            Register Now
          </Link>
        </div>
        <div className="h-[250px] relative lg:hidden mt-12">
          <div className="block absolute left-0 z-4 w-[237.32px] h-[236.832px] bg-white rounded-[4px] transform rotate-[-10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-1">
            <div className="w-full h-full relative rounded-[4px] overflow-hidden">
              <Image src={img2.src} alt="img1" fill className="object-cover" />
            </div>
          </div>
          <div className="block absolute right-0 z-4 w-[237.32px] h-[236.832px] bg-white rounded-[4px] transform rotate-[10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-1">
            <div className="w-full h-full relative rounded-[4px] overflow-hidden">
              <Image src={img3.src} alt="img1" fill className="object-cover" />
            </div>
          </div>
          <div className="block absolute right-0 z-4 w-[237.32px] h-[236.832px] bg-white rounded-[4px] transform left-1/2 -translate-x-1/2 shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-1">
            <div className="w-full h-full relative rounded-[4px] overflow-hidden">
              <Image src={img7.src} alt="img1" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
      <div className="hidden xl:block absolute top-[65px] left-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[-10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
        <div className="w-full h-full relative rounded-[4px] overflow-hidden">
          <Image src={img1.src} alt="img1" fill className="object-cover" />
        </div>
      </div>
      <div className="hidden xl:block absolute top-[65px] right-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
        <div className="w-full h-full relative rounded-[4px] overflow-hidden">
          <Image src={img5.src} alt="img2" fill className="object-cover" />
        </div>
      </div>
      <div className="hidden xl:block absolute top-[332.84px] left-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
        <div className="w-full h-full relative rounded-[4px] overflow-hidden">
          <Image src={img2.src} alt="img3" fill className="object-cover" />
        </div>
      </div>
      <div className="hidden xl:block absolute top-[332.84px] right-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[-10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
        <div className="w-full h-full relative rounded-[4px] overflow-hidden">
          <Image src={img4.src} alt="img4" fill className="object-cover" />
        </div>
      </div>
      <div className="hidden xl:block absolute top-[566.21px] left-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[-10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
        <div className="w-full h-full relative rounded-[4px] overflow-hidden">
          <Image src={img3.src} alt="img5" fill className="object-cover" />
        </div>
      </div>
      <div className="hidden xl:block absolute top-[566.21px] right-[80px] z-4 w-[312.73px] h-[320.289px] bg-white rounded-[4px] transform rotate-[10.978deg] shadow-[0_100px_200px_0_rgba(52,64,84,0.18)] p-3">
        <div className="w-full h-full relative rounded-[4px] overflow-hidden">
          <Image src={img7.src} alt="img6" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
};
export default LifeStyle;

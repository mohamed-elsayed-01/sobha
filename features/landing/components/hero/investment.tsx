import sectionimg from "@/public/images/investment/investment.jpg"
import { investment } from "../../constants"
import Link from "next/link"

const Investment = () => {


    const render_investments = investment.map((i) => (
        <div key={i} className="flex items-center gap-2">
            <span className="block size-5 bg-[#FFFFFFCC] rounded-full"></span>
            <span className="block font-poppins text-base lg:text-xl text-[#FFFFFFCC] tracking-[-0.8px] capitalize leading-[30px] lg:leading-[40px]">
                {i}
            </span>
        </div>
    ))

    return (
        <div id="investment" style={{
            backgroundImage: `url(${sectionimg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
        }} className=" w-full h-[825px] flex items-center">
            <div className="py-[40px] lg:py-[80px] px-[20px] lg:px-[80px]">
                <div className="h-full max-w-[640px] w-full p-[20px] lg:p-[32px] flex flex-col gap-6 bg-[rgba(33,37,41,0.6)] rounded-[8px] backdrop-blur-sm">
                    <h3 className="text-white text-[32px] md:text-[48px] lg:text-[64px] font-normal tracking-[-1.28px] lg:tracking-[-2.56px] font-dm-serif capitalize">
                        Get Priority Access
                    </h3>
                    <h4 className="font-poppins font-medium text-white leading-[40px] capitalize text-xl">Be among the first to receive: </h4>
                    <div className="flex flex-col gap-4">
                        {render_investments}
                    </div>
                    <Link href={"#register"} className="rounded-full text-[#272963] text-sm lg:text-base leading-6 font-semibold w-fit px-[20px] py-[12px] lg:px-[28px] lg:py-[16px] bg-white">
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Investment

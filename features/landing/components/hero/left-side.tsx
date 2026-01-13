import Features from "@/features/landing/components/hero/features"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


const LeftSide = () => {
    return (
        <div className="px-[20px] lg:px-[80px] space-y-5 w-fit text-white">
            <h1 className="text-[48px] tracking-[-1.88px] font-dm-serif leading-15 font-medium">
                <span>Sobha&apos;s First Master</span> <br /> Community in Abu Dhabi <br /> <span>Coming Soon Near Yas Island</span>
            </h1>
            <p className="max-w-[640px] text-lg font-light tracking-[-0.96px] capitalize font-poppins">
                Sobha Realty, a globally trusted developer with <span className="font-medium">30+ years of excellence</span> and <span className="font-medium">20+ landmark projects</span>, is launching its first master-planned community in Abu Dhabi — strategically located in Al Bahiya. Inspired by Sobha Hartland, Dubai, this community is designed as a fully integrated destination where nature, modern infrastructure, and refined living come together.
            </p>
            <Features />
            <Button className="rounded-full text-base font-semibold leading-6 px-7 py-6 mt-7 w-auto bg-transparent border-2 border-[#CFAF8F] text-white hover:bg-transparent">
                <Link href="#register" className="flex items-center gap-2">
                    Register for Priority Access <ArrowRight />
                </Link>
            </Button>
        </div>
    )
}
export default LeftSide

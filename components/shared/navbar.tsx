"use client"

import { navbarItems } from "@/constants"
import sobhaLogo from "@/public/images/sobha-logo.svg"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import MobileNav from "./MobileNav"

const Navbar = () => {
    const pathname = usePathname()

    const RENDER_ITEMS = navbarItems.map((n) => {
        const isActive = pathname === n.href
        return (
            <Link
                href={n.href}
                key={n.title}
                className={cn(
                    "font-poppins text-base font-medium leading-[24px] transition-colors",
                    isActive ? "text-white font-bold" : "text-white/70"
                )}
            >
                {n.title}
            </Link>
        )
    })

    return (
        <nav className="w-full absolute top-0 left-0 right-0 z-50 py-6">
            <div className="px-[20px] lg:px-[40px] flex justify-between items-start lg:items-center">
                <div className="flex items-center gap-16">
                    <Image src={sobhaLogo.src} alt="psi logo" width={133} height={48} />
                    <div className="lg:flex items-center gap-8 hidden">
                        {RENDER_ITEMS}
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:block">
                    <Link href="#register" className="font-poppins text-base font-medium leading-[24px] text-white px-[28px] py-[10px] rounded-full border border-[#CFAF8F]">
                        Register Now
                    </Link>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
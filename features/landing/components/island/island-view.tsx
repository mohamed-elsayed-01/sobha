"use client";
import Image from "next/image";
import IslandSlider from "./island-slider";
import { useState } from "react";
import map from "@/public/images/map.png";
import FullscreenModal from "./FullscreenModal";

const IslandView = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="pt-[80px] pb-[60px]">
      <div className="px-[20px] lg:px-[80px]">
        {/* CLICK TO OPEN MODAL */}
        <div
          className="relative w-full h-[400px] lg:min-h-[800px] cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Image
            src={map.src}
            alt="island"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* FULLSCREEN MODAL */}
        <FullscreenModal
          open={open}
          onClose={() => setOpen(false)}
          src={map.src}
        />

        <h3 className="mt-[84px] text-[#212529] text-[64px] font-normal capitalize tracking-[-2.56px] font-dm-serif">
          Prime Location – Al Bahiya
        </h3>

        <p className="font-poppins text-lg leading-none tracking-[-0.72px] capitalize font-normal text-[#17173B99]">
          Just minutes from Yas Island, with easy access to:
        </p>
      </div>

      <div className="mt-[40px]">
        <IslandSlider />
      </div>
    </div>
  );
};

export default IslandView;

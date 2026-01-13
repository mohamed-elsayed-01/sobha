"use client";
import IslandSlider from "./island-slider";

const IslandView = () => {
  return (
    <div className="pt-[80px] pb-[60px]">
      <div className="px-[20px] lg:px-[80px]">
        {/* GOOGLE MAP */}
        <div className="relative w-full h-[400px] lg:min-h-[800px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29038.467085887118!2d54.6238459!3d24.5267119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e50101d604957%3A0xe988cb51c9dcf45c!2z2KfZhNio2KfZh9mK2KkgLSDYo9io2Ygg2LjYqNmKIC0g2KfZhNil2YXYp9ix2KfYqiDYp9mE2LnYsdio2YrYqSDYp9mE2YXYqtit2K_YqQ!5e0!3m2!1sar!2seg!4v1768309485345!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-lg"
          ></iframe>
        </div>

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

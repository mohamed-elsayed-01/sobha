import Image from "next/image";
import { islandSlides } from "../../constants";
import { Clock3 } from "lucide-react";

const IslandSlider = () => {
  const RENDER_ITEMS = islandSlides.map((i, key) => {
    return (
      <div
        key={key}
        className="relative bg-white p-3 rounded-[4px] shadow-[0_24px_48px_-12px_rgba(16,24,40,0.18)]"
      >
        <div className="relative w-[316px] h-[316px]">
          <Image
            src={i.img}
            alt={i.title}
            fill
            className="object-cover rounded-[4px]"
          />

          {/* ✅ overlay content */}
          <div className="absolute bottom-0 left-0 w-full p-4 bg-linear-to-t from-black/70 to-transparent">
            <p className="flex gap-2 items-center bg-[#FFFFFF1A] w-fit text-white px-4 py-2 text-lg rounded-full backdrop-blur-sm"><Clock3 className="w-4 h-4" /> {i.title} </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="flex items-center gap-[32px] overflow-auto no-scrollbar pb-20 pl-[20px] lg:pl-[80px]">
      {RENDER_ITEMS}
    </div>
  );
};
export default IslandSlider;

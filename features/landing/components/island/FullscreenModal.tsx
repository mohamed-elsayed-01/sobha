"use client";

import Image from "next/image";

export default function FullscreenModal({
  open,
  onClose,
  src,
}: {
  open: boolean;
  onClose: () => void;
  src: string;
}) {
  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 
        bg-black/80 
        backdrop-blur-sm
        flex items-center justify-center 
        z-[9999]
      "
      onClick={onClose}
    >
      <div
        className="relative w-screen max-w-[90%] h-screen"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
      >
        <Image src={src} alt="modal image" fill className="object-contain" />

        <button
          onClick={onClose}
          className="
            absolute top-6 right-6 
            text-white text-3xl 
            bg-black/40 
            w-10 h-10 
            flex items-center justify-center 
            rounded-full
          "
        >
          ✕
        </button>
      </div>
    </div>
  );
}

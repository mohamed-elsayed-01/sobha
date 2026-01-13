import {
    Sun,
    Waves,
    Flower2,
    Dumbbell,
    Briefcase,
    Footprints,
    TreeDeciduous,
    Baby,
    Gamepad2,
    Coffee,
    Bell
} from "lucide-react";
import modernLayouts from "@/public/images/features/home.png"
import skylineViews from "@/public/images/features/building.png"
import resortStyleAmenities from "@/public/images/features/blage.png"
import img1 from "@/public/images/ideal-home/1.png"
import img2 from "@/public/images/ideal-home/2.png"
import img3 from "@/public/images/ideal-home/3.png"
import img4 from "@/public/images/ideal-home/4.png"
import slider2 from "@/public/images/slider/slide2.jpeg"
import slider3 from "@/public/images/slider/slide3.jpg"
import slider4 from "@/public/images/slider/slide4.jpg"
import slider5 from "@/public/images/slider/slide5.avif"
import slider6 from "@/public/images/slider/slide6.jpg"
import slider7 from "@/public/images/slider/slide7.jpg"
import slider8 from "@/public/images/slider/slide8.jpg"
import island1 from "@/public/images/island/img1.webp"
import island2 from "@/public/images/island/img2.png"
import island3 from "@/public/images/island/img3.png"



const features = [
    {
        title: "Modern layouts",
        img: modernLayouts,
    },
    {
        title: "Skyline views",
        img: skylineViews,
    },
    {
        title: "Resort-style amenities",
        img: resortStyleAmenities,
    }
]

const residences = [
    {
        title: "1 Bedroom Residences",
        features: [
            "Perfect for singles & young professionals",
            "81–131 Sqm",
            "Starting from AED 2.35M"
        ],
        img: img1
    },
    {
        title: "2 Bedroom Residences",
        features: [
            "Spacious contemporary design",
            "129–227 Sqm"
        ],
        img: img2
    },
    {
        title: "3 Bedroom Residences",
        features: [
            "Ideal for families",
            "183–184 Sqm"
        ],
        img: img3
    },
    {
        title: "4 Bedroom Penthouses",
        features: [
            "Premium luxury with panoramic views",
            "397–468 Sqm"
        ],
        img: img4
    }
];

const slides = [
    {
        id: 2,
        image: slider2,
        alt: "Mediterranean villa with pool",
    },
    {
        id: 3,
        image: slider3,
        alt: "Modern hillside house",
    },
    {
        id: 4,
        image: slider4,
        alt: "Luxury interior dining room",
    },
    {
        id: 5,
        image: slider5,
        alt: "Mediterranean villa with pool",
    },
    {
        id: 6,
        image: slider6,
        alt: "Modern hillside house",
    },
    {
        id: 7,
        image: slider7,
        alt: "Mediterranean villa with pool",
    },
    {
        id: 8,
        image: slider8,
        alt: "Modern hillside house",
    }
]

const amenities = [
    {
        title: "2 International Schools ",
        icon: Sun
    },
    {
        title: "Shopping Mall & Retail Promenade ",
        icon: Waves
    },
    {
        title: "Parks, walking trails & leisure spaces ",
        icon: Flower2
    },
    {
        title: "Nurseries and family facilities ",
        icon: Dumbbell
    },
    {
        title: "Seamless internal road network ",
        icon: Briefcase
    }
]

const islandSlides = [
    {
        title: "Ferrari World & Formula 1 Circuit",
        img: island1
    },
    {
        title: "Entertainment, concerts & attractions",
        img: island2
    },
    {
        title: "ADGM",
        img: island3
    },


]

const investment = [
    "Launch pricing & floor plans",
    "Payment plans",
    "Priority unit allocation"
]

export {
    features,
    residences,
    slides,
    amenities,
    islandSlides,
    investment
}
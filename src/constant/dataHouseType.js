import {
  IntDapur,
  IntKamarTidur1,
  IntKamarTidur2,
  IntLaundryRoom,
  IntRuangKeluarga,
  IntRuangKerja2,
  IntToilet1,
  Masjid1,
  Masjid2,
  Masjid3,
  Type62Image1,
  Type62Image2,
  Type62Image3,
  Type62Image4,
  Type62Lantai1,
  Type62Lantai2,
  Type72Image1,
  Type72Image2,
  Type72Image3,
  Type72Image4,
  Type72Image5,
  Type72Image6,
  Type72Image7,
  Type72Lantai1,
  Type72Lantai2,
  Type92Image1,
  Type92Image2,
  Type92Image3,
  Type92Image4,
  Type92Image5,
  Type92Lantai1,
  Type92Lantai2,
} from "../assets/images/housetype/export-assets";
import {
  AboutAntiRayap,
  AboutBiopori,
  AboutBioseptic,
  AboutBukaanRumah,
  AboutDindingPisah,
} from "../features/home/assets/export-assets";

export const virtualTour =
  "https://www.keypano.com/v/7_5eq086d9gbb9-1741152884.html";

export const listDataHouseType = [
  {
    id: 1,
    title: "Arvia",
    type: "Type 62",
    slug: "arvia-type-62",
    thumbnail: Type62Image1,
    slider_image: [
      { title: "Front View", image: Type62Image1 },
      { title: "Front View", image: Type62Image3 },
      { title: "Front View", image: Type62Image2 },
    ],
    blueprint: {
      first_floor: {
        title: "Type 62 1st Floor - Scale 1:100",
        image: Type62Lantai1,
      },
      second_floor: {
        title: "Type 62 2nd Floor - Scale 1:100",
        image: Type62Lantai2,
      },
    },
    eksterior: [
      { title: "Front View", image: Type62Image1 },
      { title: "Front View", image: Type62Image3 },
      { title: "Front View", image: Type62Image2 },
      { title: "Front View", image: Type62Image4 },
    ],
    interior: [
      { title: "Bedroom", image: IntKamarTidur1 },
      { title: "Bedroom - 2", image: IntKamarTidur2 },
      { title: "Toilet", image: IntToilet1 },
      { title: "Office Room", image: IntRuangKerja2 },
      { title: "Family Room", image: IntRuangKeluarga },
      { title: "Laundry Room", image: IntLaundryRoom },
      { title: "Kitchen", image: IntDapur },
    ],
    building_area: 62,
    land_area: 77,
    basic: {
      bedroom: 2,
      bathroom: 2,
      carport: 1,
    },
  },
  {
    id: 2,
    title: "Zyra",
    type: "Type 72",
    slug: "zyra-type-72",
    thumbnail: Type72Image1,
    slider_image: [
      { title: "Front View", image: Type72Image1 },
      { title: "Front View", image: Type72Image7 },
      { title: "Front View", image: Type72Image6 },
    ],
    blueprint: {
      first_floor: {
        title: "Type 72 1st Floor - Scale 1:100",
        image: Type72Lantai1,
      },
      second_floor: {
        title: "Type 72 2nd Floor - Scale 1:100",
        image: Type72Lantai2,
      },
    },
    eksterior: [
      { title: "Front View", image: Type72Image1 },
      { title: "Front View", image: Type72Image3 },
      { title: "Front View", image: Type72Image2 },
      { title: "Front View", image: Type72Image4 },
      { title: "Front View", image: Type72Image5 },
      { title: "Front View", image: Type72Image6 },
    ],
    interior: [
      { title: "Bedroom", image: IntKamarTidur1 },
      { title: "Bedroom - 2", image: IntKamarTidur2 },
      { title: "Toilet", image: IntToilet1 },
      { title: "Office Room", image: IntRuangKerja2 },
      { title: "Family Room", image: IntRuangKeluarga },
      { title: "Laundry Room", image: IntLaundryRoom },
      { title: "Kitchen", image: IntDapur },
    ],
    building_area: 72,
    land_area: 82,
    basic: {
      bedroom: 3,
      bathroom: 2,
      carport: 1,
    },
  },
  {
    id: 3,
    title: "Liora",
    type: "Type 92",
    slug: "liora-type-92",
    thumbnail: Type92Image1,
    slider_image: [
      { title: "Front View", image: Type92Image1 },
      { title: "Front View", image: Type92Image4 },
      { title: "Front View", image: Type92Image5 },
    ],
    blueprint: {
      first_floor: {
        title: "Type 92 1st Floor - Scale 1:100",
        image: Type92Lantai1,
      },
      second_floor: {
        title: "Type 92 2nd Floor - Scale 1:100",
        image: Type92Lantai2,
      },
    },
    eksterior: [
      { title: "Front View", image: Type92Image1 },
      { title: "Front View", image: Type92Image3 },
      { title: "Front View", image: Type92Image2 },
      { title: "Front View", image: Type92Image4 },
      { title: "Front View", image: Type92Image5 },
    ],
    interior: [
      { title: "Bedroom", image: IntKamarTidur1 },
      { title: "Bedroom - 2", image: IntKamarTidur2 },
      { title: "Toilet", image: IntToilet1 },
      { title: "Office Room", image: IntRuangKerja2 },
      { title: "Family Room", image: IntRuangKeluarga },
      { title: "Laundry Room", image: IntLaundryRoom },
      { title: "Kitchen", image: IntDapur },
    ],
    building_area: 92,
    land_area: 96,
    basic: {
      bedroom: 3,
      bathroom: 3,
      carport: 1,
    },
  },
];

export const listEcoFeature = [
  {
    title: "Separated Wall Houses",
    description:
      "Houses with separated walls for better air circulation & maximum privacy.",
    image: AboutDindingPisah,
  },
  {
    title: "Biopore Infiltration System",
    description:
      "Biopore infiltration system that keeps the environment green & free from puddles.",
    image: AboutBiopori,
  },
  {
    title: "Equipped with Bioseptic Tank",
    description: "Bioseptic tank for cleaner & eco-friendly waste treatment.",
    image: AboutBioseptic,
  },
  {
    title: "Termite Protection with Pipe System",
    description: "Injection pipe system for long-lasting termite protection.",
    image: AboutAntiRayap,
  },
  {
    title: "Maximum House Openings",
    description:
      "Maximum house openings for natural light & fresh air every day.",
    image: AboutBukaanRumah,
  },
];

export const houseSpesification = [
  {
    number: 1,
    title: "Pondasi",
    description: "Straus Plie + Footplate + Batu Belah + Sloof Beton Bertulang",
  },
  {
    number: 2,
    title: "Dinding",
    description:
      "Pasangan bata merah, plester, aci, dan finishing cat Kamar mandi finishing granite tile",
  },
  {
    number: 3,
    title: "Lantai",
    description: "",
  },
  {
    number: null,
    title: "Ruang Utama",
    description: "Granite tile 60x60 cm",
  },
  {
    number: null,
    title: "Teras",
    description: "Granite tile 30x60 cm",
  },
  {
    number: null,
    title: "Kamar Mandi",
    description: "Granite tile 60x60 cm",
  },
  {
    number: null,
    title: "Kamar Tidur",
    description: "Vinly tebal 3 mm",
  },
  {
    number: null,
    title: "Carport",
    description: "Granite unpholished 30x30 cm",
  },
  {
    number: 4,
    title: "Atap",
    description: "",
  },
  {
    number: null,
    title: "Kerangka",
    description: "Light steel metal",
  },
  {
    number: null,
    title: "Penutup",
    description: "Genteng bitumen",
  },
  {
    number: 5,
    title: "Plafon",
    description: "Hollow galvalum",
  },
  {
    number: null,
    title: "Rangka Penutup",
    description: "Gpysum board",
  },
  {
    number: 6,
    title: "Pintu & Jendela",
    description: "Alumunium / Engineering wood / UPVC / Kaca 5mm",
  },
  {
    number: 7,
    title: "Sanitari",
    description: "Kloset duduk, sink, kran, shower",
  },
  {
    number: 8,
    title: "Air Bersih",
    description: "PDAM - Tandon atas 250 liter",
  },
  {
    number: 9,
    title: "Air Kotor",
    description: "Bioseptictank",
  },
  {
    number: 10,
    title: "Dapur",
    description: "Meja beton finishing granite tile 60x60",
  },
  {
    number: 11,
    title: "Listrik",
    description: "PLN: 2.200 watt",
  },
  {
    number: 12,
    title: "Anti Rayap",
    description: "Sistem pipa",
  },
];

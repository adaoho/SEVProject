import {
  IconsFastInternet,
  IconsGate,
  IconsMosque,
  IconsPark,
  IconsPlayground,
  IconstMeetingHub,
} from "../assets/icons/export-assets";
import {
  SitePlan1Full,
  SitePlan2Type92,
  SitePlan3Type72,
  SitePlan4Type62,
  SitePlan5MeetingHub,
  SitePlan6Playground,
  SitePlan7Mosque,
} from "../assets/images/export-assets";
import {
  All1,
  All2,
  All3,
  All4,
  All5,
  All6,
  Masjid1,
  MeetingHub1,
  DenahType92,
  Type92Image1,
  Type92Image2,
  Type92Image3,
  Type92Image4,
  Type92Image5,
  IntKamarTidurUtama,
  IntDapur,
  IntRuangKerja1,
  MeetingHub3,
  Masjid2,
  DenahType72,
  Type72Image1,
  Type72Image2,
  Type72Image4,
  Type72Image5,
  IntRuangTamu,
  IntLaundryRoom,
  IntKamarTidur1,
  IntRuangKeluarga,
  IntRuangKerja2,
  IntToilet1,
  IntToilet2,
  DenahType62,
  Type62Image1,
  Type62Image3,
  Type62Image2,
  IntKamarTidur2,
  MeetingHub2,
  MeetingHub4,
  MeetingHub5,
  MeetingHub6,
  Masjid3,
  Masjid4,
  OutdoorPlayground1,
  OutdoorPlayground2,
  All7,
} from "../assets/images/housetype/export-assets";

export const sliderFacilities = [
  { title: "One Gate System", image: All7 },
  { title: "Mushola", image: Masjid2 },
  { title: "Interior Mushola", image: Masjid4 },
  { title: "Meeting Hub", image: MeetingHub6 },
  { title: "Interior Meeting Hub", image: MeetingHub3 },
  { title: "Outdoor Playground", image: OutdoorPlayground2 },
];

export const dataPictureSite = [
  { id: 1, image: SitePlan1Full },
  { id: 2, image: SitePlan2Type92 },
  { id: 3, image: SitePlan3Type72 },
  { id: 4, image: SitePlan4Type62 },
  { id: 5, image: SitePlan5MeetingHub },
  { id: 6, image: SitePlan7Mosque },
  { id: 7, image: SitePlan6Playground },
];

export const facilitiesList = [
  { icon: IconsGate, title: "One Gate System for <br/> a Secure Community" },
  {
    icon: IconstMeetingHub,
    title: "Meeting Hub for Work <br/> and Gatherings",
  },
  { icon: IconsPark, title: "Park with Lush <br/> Green Spaces" },
  { icon: IconsPlayground, title: "Playground for Fun <br/> and Safety" },
  { icon: IconsMosque, title: "Mosque Room for <br/> Peace and Reflection" },
  {
    icon: IconsFastInternet,
    title: "High-Speed Internet Connectivity",
  },
];

export const listDataFacilities = [
  {
    id: 1,
    title: "All",
    slug: "",
    gallery: [
      { title: "One Gate System Samitra Ecovillage", image: All1 },
      { title: "One Gate System Samitra Ecovillage", image: All2 },
      { title: "One Gate System Samitra Ecovillage", image: All3 },
      { title: "Front View Samitra Ecovillage", image: All4 },
      { title: "Front View Samitra Ecovillage", image: All5 },
      { title: "Front View Meeting Hub", image: MeetingHub1 },
      { title: "Interior Meeting Hub", image: MeetingHub3 },
      { title: "Mushola Samitra Ecovillage", image: Masjid2 },
    ],
  },
  {
    id: 2,
    title: "Liora - Type 92",
    slug: "liora-type-92",
    gallery: [
      { title: "Floor Plan Liora Type 92", image: DenahType92 },
      { title: "Front View Liora Type 92", image: Type92Image1 },
      {
        title: "Front View Liora Type 92",
        image: Type92Image4,
      },
      { title: "Interior Living Room", image: IntRuangTamu },
      { title: "Interior Main Bedroom", image: IntKamarTidurUtama },
      { title: "Interior Kitchen", image: IntDapur },
      { title: "Interior Laundry Room", image: IntLaundryRoom },
      { title: "Interior Toilet", image: IntToilet2 },
    ],
  },
  {
    id: 3,
    title: "Zyra - Type 72",
    slug: "zyra-type-72",
    gallery: [
      { title: "Floor Plan Zyra Type 72", image: DenahType72 },
      { title: "Front View Zyra Type 72", image: Type72Image4 },
      {
        title: "Front View Zyra Type 72",
        image: Type72Image1,
      },
      { title: "Front View Zyra Type 72", image: Type72Image5 },
      { title: "Interior Bedroom", image: IntKamarTidur1 },
      { title: "Interior Family Room", image: IntRuangKeluarga },
      { title: "Interior Office Room", image: IntRuangKerja2 },
      { title: "Interior Toilet", image: IntToilet1 },
    ],
  },
  {
    id: 4,
    title: "Arvia - Type 62",
    slug: "arvia-type-62",
    gallery: [
      { title: "Floor Plan Arvia Type 62", image: DenahType62 },
      { title: "Front View Arvia Type 62", image: Type62Image1 },
      {
        title: "Front View Arvia Type 62",
        image: Type62Image3,
      },
      { title: "Front View Arvia Type 62", image: Type62Image2 },
      { title: "Interior Bedroom", image: IntKamarTidur2 },
      { title: "Interior Kitchen", image: IntDapur },
      { title: "Interior Office Room", image: IntRuangKerja1 },
      { title: "Interior Toilet", image: IntToilet1 },
    ],
  },
  {
    id: 5,
    title: "Meeting Hub",
    slug: "",
    gallery: [
      { title: "Front View Meeting Hub", image: MeetingHub1 },
      { title: "Front View Meeting Hub", image: MeetingHub6 },
      { title: "Interior Meeting Hub", image: MeetingHub4 },
      { title: "Front View Meeting Hub", image: MeetingHub2 },
      {
        title: "Interior Meeting Hub",
        image: MeetingHub3,
      },
      { title: "Front View Meeting Hub", image: MeetingHub5 },
    ],
  },
  {
    id: 6,
    title: "Mushola",
    slug: "",
    gallery: [
      { title: "Front View Mushola", image: Masjid1 },
      { title: "Front View Mushola", image: Masjid2 },
      { title: "Front View Mushola", image: Masjid3 },
      { title: "Interior Mushola", image: Masjid4 },
    ],
  },
  {
    id: 7,
    title: "Outdoor Playground",
    slug: "",
    gallery: [
      { title: "Front View Outdoor Playground", image: OutdoorPlayground1 },
      { title: "Front View Outdoor Playground", image: OutdoorPlayground2 },
    ],
  },
];

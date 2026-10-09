export type Project = {
  tag: string;
  title: string;
  meta: string;
  images: string[];
  review: string;
};

export const projects: Project[] = [
  {
    tag: "Elinstallation",
    title: "Byte av elcentral",
    meta: "Privatperson · Staffanstorp · 2026",
    images: ["/uppdrag/elcentral-staffanstorp/1.jpg", "/uppdrag/elcentral-staffanstorp/2.jpg"],
    review: "Snabbt, snyggt och till rätt pris. Alexander förklarade allt längs vägen och lämnade inget ogjort.",
  },
  {
    tag: "Luftvärmepump",
    title: "Luftvärmepump",
    meta: "Privatperson · Malmö · 2026",
    images: ["/uppdrag/luftvarme-malmo/1.png"],
    review: "Vilmer kom dagen efter jag ringde. Installationen tog ett par timmar och allt fungerar perfekt.",
  },
  {
    tag: "Elbilsladdning",
    title: "Laddbox för elbil",
    meta: "Privatperson · Vellinge · 2026",
    images: ["/uppdrag/elbillsaddse-vellinge/15.png"],
    review: "Supersmidigt från start till slut. De kom på utsatt tid, installerade laddboxen snabbt och förklarade hur allt fungerar. Bilen laddas varje natt utan problem.",
  },
];

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=182ba94e7364ae48&sxsrf=APpeQnuAhuJqfTG7W6uKcHDUiel8H_tjSQ:1787322910484&q=Regmyr%20%26%20Jansson%20AB%20Recensioner&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NDEztzA3MbM0MbMwtbAwMjUw3cDI-IpRPig1PbeySEFNwSsxr7g4P0_B0UkhKDU5Na84Mz8vtWgRKyEVAHCUxlxeAAAA&rldimm=1467874694685882505&tbm=lcl&hl=sv-SE&sa=X&ved=0CBEQ5foLahcKEwiIn57Z-LGWAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=Ci9DQUlRQUNvZENodHljRjlvT2pkU1JVdFFSMWhrTTFWVmFXTmZUWEZvV1hwR1IyYxAB";

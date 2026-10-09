import {
  Zap,
  Search,
  ShieldCheck,
  Lightbulb,
  Building2,
  Wrench,
  Home,
  Smartphone,
  PlugZap,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  href?: string;
};

export const services: Service[] = [
  {
    icon: Zap,
    title: "Elinstallation",
    desc: "El i villor, lägenheter och lokaler, från grunden eller som komplettering till befintlig anläggning.",
  },
  {
    icon: Smartphone,
    title: "Plejd och smarta hem",
    desc: "Smart belysning, dimring och scener med Plejd. Vi installerar, bygger ut och felsöker.",
    href: "/plejd",
  },
  {
    icon: PlugZap,
    title: "Laddbox för elbil",
    desc: "Installation av laddbox hemma eller vid fastigheten, med rätt säkring och lastbalansering.",
  },
  {
    icon: ShieldCheck,
    title: "Elcentral och säkringar",
    desc: "Byte av elcentral, jordfelsbrytare eller uppgradering av ett gammalt proppskåp.",
  },
  {
    icon: Search,
    title: "Felsökning",
    desc: "Vi går metodiskt igenom anläggningen, hittar felet och åtgärdar det.",
  },
  {
    icon: Lightbulb,
    title: "Belysning",
    desc: "Spotlights, utomhusbelysning, nya armaturer och LED, från planering till färdig installation.",
  },
  {
    icon: Building2,
    title: "Företagsel",
    desc: "El för kontor, butiker och lokaler, med så lite störning för verksamheten som möjligt.",
  },
  {
    icon: Home,
    title: "Nybyggnation",
    desc: "Hela elinstallationen i villor, Attefallshus och sommarhus, från grund till färdigt.",
  },
  {
    icon: Wrench,
    title: "Renovering och tillbyggnad",
    desc: "Vi sköter elen och samordnar med övriga hantverkare hela vägen.",
  },
];

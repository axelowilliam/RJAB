import Image from "next/image";

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/logo.svg"
      width={size}
      height={size}
      alt="Regmyr & Jansson logotyp"
    />
  );
}

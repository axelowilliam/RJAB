const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <img
      src={`${basePath}/logo.svg`}
      width={size}
      height={size}
      alt="Regmyr & Jansson logotyp"
    />
  );
}

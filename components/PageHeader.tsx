import Link from "next/link";

export default function PageHeader({
  eyebrow,
  title,
  intro,
  crumb,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  crumb: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-charcoal pt-16">
      <div className="max-w-6xl mx-auto px-5 pt-10 pb-16 md:pt-16 md:pb-24">
        <nav aria-label="Brödsmulor" className="mb-8">
          <ol className="flex items-center gap-2 font-body text-xs text-white/60">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Hem
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-white">
              {crumb}
            </li>
          </ol>
        </nav>

        <p className="font-body text-white text-xs tracking-widest uppercase mb-4">
          {eyebrow}
        </p>
        <h1
          className="font-heading font-800 text-white leading-none mb-5 max-w-3xl"
          style={{ fontSize: "clamp(2.25rem, 6vw, 4.5rem)" }}
        >
          {title}
        </h1>
        <p className="font-body text-white text-base md:text-lg max-w-xl leading-relaxed">
          {intro}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

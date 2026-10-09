import CallButtons from "@/components/CallButtons";

export default function CtaBand({
  title,
  text,
  mailSubject,
}: {
  title: string;
  text: string;
  mailSubject?: string;
}) {
  return (
    <section className="bg-charcoal py-20 px-5">
      <div className="max-w-6xl mx-auto md:flex md:items-end md:justify-between gap-10">
        <div className="mb-8 md:mb-0 max-w-xl">
          <h2
            className="font-heading font-700 text-white leading-tight mb-3"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
          >
            {title}
          </h2>
          <p className="font-body text-white/80 text-base leading-relaxed">{text}</p>
        </div>
        <CallButtons mailSubject={mailSubject} />
      </div>
    </section>
  );
}

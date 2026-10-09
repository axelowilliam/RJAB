export type FaqItem = { q: string; a: string };

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export default function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="border-t border-bronze/15">
      {items.map((i) => (
        <details key={i.q} className="group border-b border-bronze/15">
          <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none min-h-[44px]">
            <h3 className="font-heading font-600 text-charcoal text-lg leading-snug">{i.q}</h3>
            <span
              aria-hidden="true"
              className="text-bronze text-2xl leading-none transition-transform duration-200 group-open:rotate-45 flex-shrink-0"
            >
              +
            </span>
          </summary>
          <p className="font-body text-muted text-base pb-5 max-w-2xl">{i.a}</p>
        </details>
      ))}
    </div>
  );
}

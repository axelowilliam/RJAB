import { Phone, Mail } from "lucide-react";

export default function CallButtons({
  mailSubject,
  dark = true,
}: {
  mailSubject?: string;
  dark?: boolean;
}) {
  const mailHref = mailSubject
    ? `mailto:info@regmyrjansson.se?subject=${encodeURIComponent(mailSubject)}`
    : "mailto:info@regmyrjansson.se";

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href="tel:+4640919135"
        className="inline-flex items-center justify-center gap-2 bg-bronze text-white font-body font-600 text-base px-7 py-4 rounded min-h-[52px] hover:bg-bronze/90 transition-colors"
      >
        <Phone size={18} />
        Ring 040-91 91 35
      </a>
      <a
        href={mailHref}
        className={`inline-flex items-center justify-center gap-2 font-body font-500 text-base px-7 py-4 rounded min-h-[52px] border transition-colors hover:border-bronze hover:text-bronze ${
          dark ? "text-white border-white/30" : "text-charcoal border-charcoal/15"
        }`}
      >
        <Mail size={18} />
        Skicka e-post
      </a>
    </div>
  );
}

import { Phone, Mail, Clock, Tag } from "lucide-react";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-white py-24 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-14">
          <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
            Kontakta oss
          </p>
          <h2
            className="font-heading font-700 text-charcoal leading-none mb-4"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
          >
            Hör av dig
          </h2>
          <p className="font-body text-muted text-base max-w-md mx-auto">
            Berätta vad du behöver hjälp med, vi återkommer snabbt med ett
            ärligt svar och ett fast pris. Kostnadsfri offert.
          </p>
          <div className="mt-6 mx-auto w-12 h-1 bg-bronze" />
        </div>

        {/* Contact buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
          <a
            href="tel:+46704128391"
            className="group flex items-center justify-center gap-4 bg-bronze text-white font-body font-600 text-lg px-10 py-6 rounded min-h-[80px] hover:bg-bronze/90 transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Phone size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs tracking-widest uppercase opacity-70 mb-0.5">
                Telefon
              </div>
              <div>070-412 83 91</div>
            </div>
          </a>

          <a
            href="mailto:info@regmyrjansson.se"
            className="group flex items-center justify-center gap-4 bg-white text-charcoal font-body font-500 text-lg px-10 py-6 rounded min-h-[80px] border border-charcoal/15 hover:border-bronze hover:text-bronze transition-colors duration-200"
          >
            <div className="w-10 h-10 rounded-full bg-charcoal/5 flex items-center justify-center group-hover:bg-bronze/10 transition-colors">
              <Mail size={20} />
            </div>
            <div className="text-left">
              <div className="text-xs tracking-widest uppercase opacity-50 mb-0.5">
                E-post
              </div>
              <div>info@regmyrjansson.se</div>
            </div>
          </a>
        </div>


        {/* Opening hours */}
        <div className="inline-flex items-center gap-3 bg-cream border border-charcoal/10 rounded-full px-6 py-3">
          <Clock size={16} className="text-bronze" />
          <span className="font-body text-muted text-sm">
            Vi svarar vardagar{" "}
            <span className="text-charcoal">07:00 – 17:00</span>
          </span>
        </div>
      </div>
    </section>
  );
}

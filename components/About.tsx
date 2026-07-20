export default function About() {
  return (
    <section id="om-oss" className="bg-white py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div>
            <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
              Om oss
            </p>
            <h2
              className="font-heading font-700 text-charcoal leading-none mb-6"
              style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
            >
              Lokal kompetens.
              <br />
              Egna namn på dörren.
            </h2>
            <div className="w-12 h-1 bg-bronze mb-8" />
            <div className="space-y-4 font-body text-muted text-base">
              <p>
                Regmyr &amp; Jansson startade vi, Alexander Jansson och Vilmer
                Regmyr, för att bygga något eget — ett bolag där vi kan stå
                för varje jobb med våra egna namn.
              </p>
              <p>
                Som behöriga elinstallatörer i Skåne tar vi fullt ansvar för
                det vi utför. Inget mellanting mellan dig och den som gör
                jobbet — du vet alltid vem du pratar med och vem som dyker upp.
              </p>
              <p>
                Vi utför elarbeten i Malmö, Trelleborg, Lund, Vellinge,
                Höllviken, Skanör, Falsterbo, Ystad och Staffanstorp. Det
                finns inga undermontörer, inga vikarier och ingen callcenter.
                Bara två elektriker som vill göra ett bra jobb och bygga ett
                rykte som håller.
              </p>
            </div>
          </div>

          {/* Right: info cards */}
          <div className="space-y-5">
            <div className="border border-bronze/20 rounded-lg p-6">
              <h3 className="font-heading font-700 text-bronze text-lg mb-3">
                Verksamhetsområde
              </h3>
              <p className="font-body text-muted text-sm mb-2">
                Vi utför jobb i{" "}
                <strong className="text-charcoal">hela Skåne</strong>. Primärt
                jobbar vi i:
              </p>
              <p className="font-body text-charcoal/70 text-sm">
                Trelleborg · Malmö · Vellinge · Höllviken · Skanör/Falsterbo ·
                Ystad · Staffanstorp · Lund
              </p>
              <p className="font-body text-muted text-xs mt-3">
                Har du ett litet jobb lite längre bort? Vi hittar alltid en
                lösning så att du slipper betala onödig körtid.
              </p>
            </div>

            <div className="border border-bronze/20 rounded-lg p-6">
              <h3 className="font-heading font-700 text-bronze text-lg mb-4">
                Hur kunderna beskriver oss
              </h3>
              <div className="flex gap-3 flex-wrap">
                {["Pålitliga", "Kunniga", "Trevliga"].map((word) => (
                  <span
                    key={word}
                    className="px-4 py-2 bg-bronze/10 text-bronze font-body text-sm rounded-full"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-bronze/20 rounded-lg p-6">
              <h3 className="font-heading font-700 text-bronze text-lg mb-3">
                Vilka vi jobbar med
              </h3>
              <p className="font-body text-muted text-sm">
                Vi jobbar med privatpersoner, bostadsrättsföreningar och
                företag. Erfarenhet från alla tre, och vi välkomnar alla
                typer av uppdrag.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

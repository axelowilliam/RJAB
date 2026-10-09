import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import ProjectGrid from "@/components/ProjectGrid";
import GoogleReviewsButton from "@/components/GoogleReviewsButton";

export default function Portfolio() {
  return (
    <section id="uppdrag" className="bg-cream py-24 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="font-body text-bronze text-sm tracking-widest uppercase mb-3">
            Några av våra
          </p>
          <h2
            className="font-heading font-700 text-charcoal leading-none"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            Tidigare uppdrag
          </h2>
          <div className="mt-4 w-12 h-1 bg-bronze" />
        </div>

        <div className="mb-10">
          <GoogleReviewsButton />
        </div>

        <ProjectGrid projects={projects.slice(0, 3)} />

        <div className="mt-10">
          <Link
            href="/referenser"
            className="inline-flex items-center gap-2 font-body font-600 text-bronze text-base min-h-[44px] hover:gap-3 transition-all"
          >
            Se alla referenser
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

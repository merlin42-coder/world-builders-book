import { useEffect } from "react";
import WBLogo from "@/components/WBLogo";
import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";

const PREVIEW_PDF_URL =
  "https://drive.google.com/uc?export=download&id=17G74sN45qm3XiVb0U_jw1MOO4kUA43Wx";

const ThankYou = () => {
  useEffect(() => {
    document.title = "Thank you — World Builders";
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-8 flex justify-center">
        <WBLogo />
      </header>

      <main className="container max-w-4xl px-6 pb-24">
        <section className="text-center fade-up">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">You're on the list</p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight mb-6">
            Welcome, <span className="text-gold italic">explorer.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Your free preview of <em>World Builders</em> is ready. Inside you'll find the
            introduction, the timeline, and the first three illustrated worlds.
          </p>

          <a href={PREVIEW_PDF_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-gold text-navy-deep hover:bg-gold/90 font-semibold px-8 h-12">
              <Download className="mr-2 h-5 w-5" />
              Download the Preview PDF
            </Button>
          </a>

          <p className="text-xs text-muted-foreground mt-4">
            Trouble downloading? We've also emailed you the link.
          </p>
        </section>

        <section className="mt-24 fade-up fade-up-delay-1">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-3">
            Watch the <span className="text-gold">World Builders</span> videos
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Short companion films for the book — premiering soon.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((n) => (
              <div
                key={n}
                className="group relative aspect-video rounded-lg overflow-hidden border border-border bg-navy"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-deep" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-parchment">
                  <div className="h-16 w-16 rounded-full border-2 border-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-gold ml-1" />
                  </div>
                  <p className="font-display text-2xl">Video {n}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mt-2">Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} World Builders. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ThankYou;
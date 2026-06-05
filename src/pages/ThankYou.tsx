import { useEffect, type MouseEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import WBLogo from "@/components/WBLogo";
import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";

const { data: { publicUrl: PREVIEW_PDF_URL } } = supabase
  .storage
  .from("downloads")
  .getPublicUrl("World Builders - The Book - PREVIEW.pdf");

const { data: { publicUrl: SHAKESPEARE_COVER_URL } } = supabase
  .storage
  .from("images")
  .getPublicUrl("shakespeare-podcast-cover.png");

const SHAKESPEARE_VIDEO_URL = "https://www.youtube.com/watch?v=E0RZBIk9lXU";

const ThankYou = () => {
  useEffect(() => {
    document.title = "Thank you — World Builders";
  }, []);

  const openShakespeareVideo = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    window.open(SHAKESPEARE_VIDEO_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="py-8 flex justify-center">
        <WBLogo />
      </header>

      <main className="container max-w-4xl px-6 pb-24">
        <section className="text-center fade-up">
          <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">You're on the list</p>
          <h1 className="font-display text-5xl md:text-6xl leading-tight mb-6">
            Thank you — <span className="text-gold italic">Your preview is ready</span>
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
            Watch the <span className="text-gold">World Builders</span> video
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            A short companion film for the book — watch on YouTube.
          </p>

          <div className="max-w-2xl mx-auto">
            <a
              href={SHAKESPEARE_VIDEO_URL}
              new-window="true"
              target="_blank"
              rel="noopener noreferrer"
              onClickCapture={openShakespeareVideo}
              className="group relative block aspect-video rounded-lg overflow-hidden border border-border bg-navy cursor-pointer"
            >
              <img
                src={SHAKESPEARE_COVER_URL}
                alt="Shakespeare's World cover"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-parchment">
                <div className="h-16 w-16 rounded-full border-2 border-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-navy/50 backdrop-blur-sm">
                  <Play className="h-6 w-6 text-gold ml-1" />
                </div>
                <p className="font-display text-2xl">Shakespeare's World</p>
                <p className="text-xs uppercase tracking-[0.3em] text-gold-soft mt-2">Watch on YouTube</p>
              </div>
            </a>
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
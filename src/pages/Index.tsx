import { useEffect } from "react";
import WBLogo from "@/components/WBLogo";
import MailerLiteForm from "@/components/MailerLiteForm";

const STORAGE_BASE = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/images`;

const heroImg = `${STORAGE_BASE}/wb-hero-wide.png`;
const worldsImg = `${STORAGE_BASE}/wb-worlds-card.png`;
const comparisonsImg = `${STORAGE_BASE}/wb-comparisons-card.png`;
const puzzleImg = `${STORAGE_BASE}/wb-puzzle-card.png`;
const michelangelo = `${STORAGE_BASE}/wb-thumb-michelangelo.png`;
const shakespeare = `${STORAGE_BASE}/wb-thumb-shakespeare.png`;
const sunTzu = `${STORAGE_BASE}/wb-thumb-sun_tzu.png`;
const cleopatra = `${STORAGE_BASE}/wb-thumb-cleopatra-4.png`;
const alexander = `${STORAGE_BASE}/wb-thumb-alexander.png`;
const yokoOno = `${STORAGE_BASE}/wb-thumb-yoko-ono.png`;

const ancientWorlds = [
  { name: "Sun Tzu", role: "The Strategist's World", img: sunTzu },
  { name: "Cleopatra", role: "The Queen's World", img: cleopatra },
  { name: "Alexander the Great", role: "The Conqueror's World", img: alexander },
];

const moreWorlds = [
  { name: "Michelangelo", role: "The Artist's World", img: michelangelo },
  { name: "William Shakespeare", role: "The Playwright's World", img: shakespeare },
  { name: "Yoko Ono", role: "The Artist of Possibilities", img: yokoOno },
];

const inside = [
  {
    title: "18 Worlds",
    img: worldsImg,
    body: "Each World Builder presented as a coherent world — its beliefs, rules, logic, and atmosphere.",
  },
  {
    title: "World vs. World",
    img: comparisonsImg,
    body: "Discover where worlds agree, clash, and shape one another across history, science, philosophy, and strategy.",
  },
  {
    title: "Hidden Puzzles",
    img: puzzleImg,
    body: "Every world hides something that doesn't belong. Find it, and the world rearranges itself.",
  },
];

const Index = () => {
  useEffect(() => {
    document.title = "World Builders — The Book";
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="container flex items-center py-6">
          <WBLogo className="[&_span]:text-parchment" />
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-navy-deep">
        <img
          src={heroImg}
          alt="Illuminated atlas of the World Builders"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 via-navy-deep/30 to-navy-deep" />

        <div className="container relative z-10 py-32 text-parchment">
          <div className="max-w-3xl">
            <p className="fade-up text-gold uppercase tracking-[0.4em] text-xs mb-6">
              An illustrated nonfiction book
            </p>
            <h1 className="fade-up fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8">
              Eighteen figures.<br />
              Eighteen <span className="italic text-gold">worlds.</span><br />
              One hidden puzzle in each.
            </h1>
            <p className="fade-up fade-up-delay-2 text-lg md:text-xl text-parchment/80 max-w-2xl mb-10 leading-relaxed">
              <em>World Builders</em> reveals history, science, philosophy, and strategy
              through the minds of those who built the worlds we still live inside.
            </p>

            <div id="waitlist" className="fade-up fade-up-delay-3 max-w-xl">
              <MailerLiteForm />
            </div>
            <p className="fade-up fade-up-delay-4 text-xs text-parchment/60 mt-4">
              Join the waitlist. We'll email you the preview PDF and launch news. No spam.
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section id="inside" className="py-28 bg-background">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">What's inside</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              A book that behaves like an <span className="italic text-gold">atlas</span> of minds.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {inside.map((item) => (
              <article
                key={item.title}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:border-gold/60 transition-colors"
              >
                <div className="aspect-square overflow-hidden bg-navy-deep">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Three figures preview */}
      <section className="py-28 bg-navy text-parchment">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">From the preview</p>
            <h2 className="font-display text-4xl md:text-5xl">
              Step inside the <span className="text-gold italic">Ancient Worlds.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ancientWorlds.map((f) => (
              <figure key={f.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-navy-deep border border-gold/20">
                  <img
                    src={f.img}
                    alt={`Portrait of ${f.name}`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="font-display text-2xl">{f.name}</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-gold mt-1">{f.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* More inside the book */}
      <section className="py-28 bg-navy text-parchment">
        <div className="container">
          <div className="max-w-2xl mb-16">
            <p className="text-gold uppercase tracking-[0.3em] text-xs mb-4">More inside the book</p>
            <h2 className="font-display text-4xl md:text-5xl">
              And fifteen more worlds <span className="text-gold italic">beyond.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {moreWorlds.map((f) => (
              <figure key={f.name} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-lg bg-navy-deep border border-gold/20">
                  <img
                    src={f.img}
                    alt={`Portrait of ${f.name}`}
                    loading="lazy"
                    width={1024}
                    height={1280}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="mt-5">
                  <p className="font-display text-2xl">{f.name}</p>
                  <p className="text-sm uppercase tracking-[0.2em] text-gold mt-1">{f.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 bg-background">
        <div className="container text-center max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Read the first <span className="text-gold italic">three worlds</span> — free.
          </h2>
          <p className="text-muted-foreground mb-10">
            Join the waitlist and we'll send the preview PDF immediately.
          </p>
          <div className="max-w-xl mx-auto">
            <MailerLiteForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <WBLogo />
          <p>© {new Date().getFullYear()} World Builders. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

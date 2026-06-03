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
const yokoOno = `${STORAGE_BASE}/wb-thumb-yoko-ono-2.png`;

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
      <section id="inside" className="py-28 bg-navy text-parchment">
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
                className="group bg-navy-deep/80 border border-gold/40 rounded-lg overflow-hidden hover:border-gold/70 transition-colors"
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
                  <h3 className="font-cinzel text-gold text-[18px] uppercase tracking-wider mb-3">{item.title}</h3>
                  <p className="font-lora text-parchment/85 text-[15px] leading-relaxed">{item.body}</p>
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

      {/* Why This Book Exists */}
      <section className="py-28 bg-navy text-parchment">
        <div className="container">
          <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-start">
            {/* Left column — 60% */}
            <div className="md:col-span-3">
              <p className="font-cinzel text-gold/80 uppercase tracking-[0.3em] text-xs mb-8">
                Why this book exists
              </p>
              <div className="font-lora text-parchment text-[18px] leading-[1.9] space-y-6">
                <p>History is full of what people did.</p>
                <p>Dates, decisions, consequences.</p>
                <p>
                  But Michelangelo didn't wake up one morning and decide to be a
                  genius. He woke up believing that the figure was already inside
                  the stone — and that sculpture was just the act of removing
                  everything that wasn't it.
                </p>
                <p>
                  That's the difference between knowing history and understanding
                  it. World Builders is about the second thing.
                </p>
              </div>
            </div>

            {/* Right column — page card 40% */}
            <div className="md:col-span-2">
              <div
                className="bg-navy-deep border border-gold rounded-lg overflow-hidden"
                style={{ boxShadow: "inset 0 0 60px hsl(var(--gold) / 0.08)" }}
              >
                <img
                  src={`${STORAGE_BASE}/MICHELANGELO-BIG-IDEA.png`}
                  alt="Big Idea from the Michelangelo world page"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes It Different */}
      <section className="py-28 bg-navy text-parchment">
        <div className="container" style={{ maxWidth: "680px" }}>
          <p className="font-cinzel text-gold/80 uppercase tracking-[0.3em] text-xs mb-10 text-center">
            What makes it different
          </p>

          <div className="font-lora text-parchment text-[18px] leading-[1.9] space-y-8 text-center">
            <p>
              Most books about remarkable people tell you what they achieved.
              This one asks what they had to believe first — before any of it
              was possible.
            </p>
            <p>
              Cleopatra had to believe that power was a language, not a
              birthright. Shakespeare had to believe that a story could say
              things a fact never could. Michelangelo had to believe that
              beauty wasn't added — it was revealed.
            </p>
            <p>
              Every world in this book works the same way. You don't read
              about these people. You step inside how they saw — and something
              in your own thinking quietly shifts.
            </p>
          </div>

          <div className="mt-14 mb-10 h-px bg-gold/30" />

          <div className="space-y-3 text-center font-lora italic text-parchment text-[17px] leading-[1.6]">
            <p>You don't have to agree with every world.</p>
            <p>You only have to visit it.</p>
            <p>Sometimes that's enough to see your own more clearly.</p>
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

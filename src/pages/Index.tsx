import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WBLogo from "@/components/WBLogo";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const STORAGE_BASE = `${import.meta.env.VITE_SUPABASE_URL}/storage/v1/object/public/images`;

const heroImg = `${STORAGE_BASE}/wb-hero-wide.png`;
const worldsImg = `${STORAGE_BASE}/wb-worlds-card.png`;
const comparisonsImg = `${STORAGE_BASE}/wb-comparisons-card.png`;
const puzzleImg = `${STORAGE_BASE}/wb-puzzle-card.png`;
const michelangelo = `${STORAGE_BASE}/wb-thumb-michelangelo.png`;
const shakespeare = `${STORAGE_BASE}/wb-thumb-shakespeare.png`;
const rosaParks = `${STORAGE_BASE}/wb-thumb-rosa-parks.png`;

const MAILERLITE_ENDPOINT =
  "https://assets.mailerlite.com/jsonp/1868409/forms/42139146/subscribe";

const figures = [
  { name: "Michelangelo", role: "The Artist's World", img: michelangelo },
  { name: "Shakespeare", role: "The Playwright's World", img: shakespeare },
  { name: "Rosa Parks", role: "The Quiet Refusal", img: rosaParks },
];

const inside = [
  {
    title: "18 Worlds",
    img: worldsImg,
    body: "Each figure presented as a coherent world — its beliefs, rules, logic, and atmosphere.",
  },
  {
    title: "Comparisons",
    img: comparisonsImg,
    body: "How worlds weigh against each other across history, science, philosophy, and strategy.",
  },
  {
    title: "Hidden Puzzles",
    img: puzzleImg,
    body: "A mismatch puzzle is woven into every world. Find it, and the world rearranges itself.",
  },
];

const Index = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "World Builders — The Book";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("fields[email]", email);
      fd.append("ml-submit", "1");
      fd.append("anticsrf", "true");
      await fetch(MAILERLITE_ENDPOINT, {
        method: "POST",
        body: fd,
        mode: "no-cors",
      });
      navigate("/thank-you");
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="container flex items-center justify-between py-6">
          <WBLogo className="[&_span]:text-parchment" />
          <button
            onClick={() => scrollTo("inside")}
            className="text-sm tracking-[0.2em] uppercase text-parchment/90 hover:text-gold transition-colors"
          >
            Preview
          </button>
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
              <em>World Builders</em> teaches history, science, philosophy, and strategy
              through the minds of those who built the worlds we still live inside.
            </p>

            <form
              onSubmit={handleSubmit}
              className="fade-up fade-up-delay-3 flex flex-col sm:flex-row gap-3 max-w-xl"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="flex-1 h-12 px-4 rounded-md bg-parchment/95 text-foreground placeholder:text-muted-foreground border border-gold/30 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <Button
                type="submit"
                disabled={loading}
                size="lg"
                className="h-12 px-7 bg-gold text-navy-deep hover:bg-gold/90 font-semibold"
              >
                {loading ? "Sending…" : "Get the Free Preview"}
              </Button>
            </form>
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
              Step inside the first <span className="text-gold italic">three worlds.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {figures.map((f) => (
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              aria-label="Email address"
              className="flex-1 h-12 px-4 rounded-md bg-card border border-border focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="h-12 px-7 bg-navy text-parchment hover:bg-navy-deep font-semibold"
            >
              {loading ? "Sending…" : "Get the Free Preview"}
            </Button>
          </form>
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

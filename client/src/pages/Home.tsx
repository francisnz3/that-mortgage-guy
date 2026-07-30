/**
 * Design reminder — Financial Fitness Field Guide:
 * editorial coaching energy, ink-navy / paper-cream / coach-green palette,
 * asymmetric playbook layout, route-line details, and direct no-pressure copy.
 */
import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Check,
  ChevronRight,
  CircleDot,
  Clock3,
  House,
  Mail,
  Menu,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "First home buying",
    copy: "Turn a big first step into a clear lending plan, with the details explained in plain English.",
    tone: "lime",
  },
  {
    number: "02",
    title: "Refinancing & restructuring",
    copy: "Take a fresh look at your current lending setup and talk through the options that fit your next move.",
    tone: "cream",
  },
  {
    number: "03",
    title: "Property investment",
    copy: "Build a lending approach that makes sense for a growing property plan and the life around it.",
    tone: "ink",
  },
  {
    number: "04",
    title: "Construction finance",
    copy: "Keep the stages, paperwork, and lender requirements moving while you focus on the home taking shape.",
    tone: "yellow",
  },
  {
    number: "05",
    title: "Complex income",
    copy: "Self-employed, commission-based, newly arrived in New Zealand? Start by putting the whole picture on the table.",
    tone: "cream",
  },
  {
    number: "06",
    title: "Rate strategy",
    copy: "Talk through how your lending could be structured, so you can make a considered decision with confidence.",
    tone: "lime",
  },
];

const steps = [
  {
    number: "01",
    title: "Start with your real life",
    copy: "Tell Francis what you are aiming for, what is changing, and the questions keeping you up at night.",
  },
  {
    number: "02",
    title: "Get a clear game plan",
    copy: "Work through the lending path, the options to consider, and what a sensible next step could look like.",
  },
  {
    number: "03",
    title: "Keep the momentum",
    copy: "Francis helps guide the lender conversations and paperwork, so the process feels less like a maze.",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [emailReady, setEmailReady] = useState(false);

  function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const goal = String(form.get("goal") || "");
    const note = String(form.get("note") || "");

    const subject = encodeURIComponent(`Mortgage chat — ${name || "new enquiry"}`);
    const body = encodeURIComponent(
      `Hi Francis,\n\nI would like to start a mortgage conversation.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "Not provided"}\nWhat I am looking at: ${goal}\n\nA little more context:\n${note || "Not provided"}\n\nThanks,\n${name}`,
    );

    setEmailReady(true);
    window.location.href = `mailto:francis@guardiansmith.co.nz?subject=${subject}&body=${body}`;
  }

  function closeMenuAndScroll(id: string) {
    setMenuOpen(false);
    window.setTimeout(() => scrollToSection(id), 30);
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-[#f6f2e9] text-[#13263a]">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-shell flex items-center justify-between gap-5 py-4">
          <a className="brand-lockup" href="#top" aria-label="That Mortgage Guy home">
            <img
              src="/manus-storage/tmg-house-route-mark_ca9b338a.png"
              alt=""
              className="brand-mark h-10 w-10 shrink-0 object-contain"
            />
            <span className="brand-type">
              <strong>That</strong> <em>Mortgage</em> <strong>Guy</strong>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
            <button className="nav-link" onClick={() => scrollToSection("how-it-works")}>
              How it works
            </button>
            <button className="nav-link" onClick={() => scrollToSection("services")}>
              How I can help
            </button>
            <button className="nav-link" onClick={() => scrollToSection("about")}> 
              About Francis
            </button>
          </nav>

          <div className="hidden items-center gap-3 sm:flex">
            <a className="header-phone" href="tel:+64278909000">
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>027 890 9000</span>
            </a>
            <Button asChild className="header-cta">
              <a href="#contact">Make your move</a>
            </Button>
          </div>

          <button
            type="button"
            className="menu-trigger lg:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu lg:hidden">
            <button onClick={() => closeMenuAndScroll("how-it-works")}>How it works</button>
            <button onClick={() => closeMenuAndScroll("services")}>How I can help</button>
            <button onClick={() => closeMenuAndScroll("about")}>About Francis</button>
            <a href="tel:+64278909000">Call Francis — 027 890 9000</a>
            <button className="mobile-menu-cta" onClick={() => closeMenuAndScroll("contact")}>
              Make your move <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </header>

      <main id="main-content">
        <section id="top" className="hero-panel">
          <div className="hero-grain" aria-hidden="true" />
          <svg className="hero-route route-draw" viewBox="0 0 1100 620" fill="none" aria-hidden="true">
            <path d="M-32 431C105 380 117 530 259 472C358 432 340 302 473 327C578 346 561 497 708 455C811 425 845 286 1009 320C1058 331 1075 370 1135 350" />
            <circle cx="259" cy="472" r="7" />
            <circle cx="708" cy="455" r="7" />
            <circle cx="1009" cy="320" r="7" />
          </svg>

          <div className="site-shell relative z-10 grid min-h-[690px] items-center gap-12 py-16 lg:grid-cols-[0.94fr_1.06fr] lg:py-20">
            <div className="hero-copy">
              <div className="eyebrow-light">
                <CircleDot className="h-3.5 w-3.5" aria-hidden="true" />
                Playbook 01 — New Zealand mortgage advice
              </div>
              <h1 className="hero-title">
                Your next home move needs a <span>proper game plan.</span>
              </h1>
              <p className="hero-intro">
                Buying, building, refinancing, or investing? Francis McCormick helps you make sense of the lending path—then does the hard work with the banks.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="hero-primary-cta">
                  <a href="#contact">
                    Start the conversation <ArrowDownRight className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="hero-secondary-cta">
                  <a href="#how-it-works">See how it works</a>
                </Button>
              </div>
              <div className="hero-reassurance">
                <BadgeCheck className="h-5 w-5" aria-hidden="true" />
                <span>Start with a no-obligation chat. No pressure, no jargon spiral.</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-watermark" aria-hidden="true">
                <img src="/manus-storage/tmg-house-route-mark_ca9b338a.png" alt="" />
                <span>YOUR ROUTE HOME</span>
              </div>
              <div className="hero-image-wrap">
                <img
                  src="/manus-storage/tmg-hero-home-route_39604f41.jpg"
                  alt="A contemporary New Zealand home, representing a clear path to home ownership"
                  className="hero-image"
                />
                <div className="hero-image-vignette" aria-hidden="true" />
              </div>
              <div className="hero-fieldnote hero-note-top">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                The hard work? Francis’s lane.
              </div>
              <div className="hero-callout">
                <span className="hero-callout-kicker">YOUR NEXT MOVE</span>
                <strong>Clearer questions. Better decisions.</strong>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="hero-coach-card">
                <div className="coach-card-icon">
                  <Route className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span>YOUR ADVISER</span>
                  <strong>Francis McCormick</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Key value propositions">
          <div className="site-shell grid gap-0 md:grid-cols-3">
            <div className="trust-item">
              <span className="trust-number">01</span>
              <div>
                <strong>Real-world lending guidance</strong>
                <span>Built around your plans, not generic scripts.</span>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-number">02</span>
              <div>
                <strong>A straight-talking process</strong>
                <span>Clear steps, clear questions, fewer surprises.</span>
              </div>
            </div>
            <div className="trust-item">
              <span className="trust-number">03</span>
              <div>
                <strong>Someone in your corner</strong>
                <span>From the first chat through the lender process.</span>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="process-section section-pad">
          <div className="site-shell">
            <div className="section-heading-grid">
              <div>
                <p className="eyebrow-dark">PLAYBOOK 02 — THE MORTGAGE PATH</p>
                <h2 className="section-title">The process should feel like progress, not a puzzle.</h2>
              </div>
              <p className="section-side-copy">
                <span className="field-note-inline">FIELD NOTE: A useful plan starts with the whole picture.</span>
                Big financial decisions are easier when you know what comes next. Francis keeps the path visible, practical, and focused on your real life.
              </p>
            </div>

            <div className="process-track">
              <div className="process-line" aria-hidden="true" />
              {steps.map((step, index) => (
                <article className="process-card" key={step.number}>
                  <div className="process-marker">
                    <span>{step.number}</span>
                    <i aria-hidden="true" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                  <span className="process-card-index">STEP {index + 1}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="services-section section-pad">
          <div className="site-shell">
            <div className="section-heading-grid section-heading-on-dark">
              <div>
                <p className="eyebrow-light">PLAYBOOK 03 — HOW FRANCIS CAN HELP</p>
                <h2 className="section-title text-white">Your move is personal. The strategy should be too.</h2>
              </div>
              <p className="section-side-copy text-slate-300">
                <span className="field-note-inline field-note-on-dark">COACH’S RULE: Start with the goal, then build the route.</span>
                Whether you are starting from scratch or changing course, the conversation begins with your goals—not a one-size-fits-all answer.
              </p>
            </div>

            <div className="service-route-label" aria-hidden="true">
              <img src="/manus-storage/tmg-house-route-mark_ca9b338a.png" alt="" />
              <span>CHOOSE YOUR STARTING POINT</span>
              <i />
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className={`service-card service-card-${service.tone}`} key={service.number}>
                  <div className="service-card-top">
                    <span>{service.number}</span>
                    <ArrowUpRightIcon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.copy}</p>
                  <button onClick={() => scrollToSection("contact")} className="service-card-link">
                    Talk it through <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="site-shell about-layout">
            <div className="about-visual">
              <div className="about-image-wrap">
                <img
                  src="/manus-storage/tmg-playbook-tools_86d6b9d0.jpg"
                  alt="A planning desk with a home model and route details"
                  className="about-image"
                />
              </div>
              <div className="about-tag about-tag-top">COACHING MINDSET</div>
              <div className="about-note">
                <span className="about-note-mark">“</span>
                <p>Facts, a plan, and someone who knows the bank process.</p>
              </div>
            </div>

            <div className="about-copy">
              <p className="eyebrow-dark">PLAYBOOK 04 — MEET FRANCIS</p>
              <h2 className="section-title">Good lending guidance, coached like a plan—not a pitch.</h2>
              <p>
                Francis McCormick brings a coaching approach to mortgage advice. Before moving into lending, he worked in the fitness industry, where strong outcomes always began with a tailored plan and steady support.
              </p>
              <p>
                The same thinking applies here: your lending needs should be understood in the context of your life, your goals, and the decisions ahead. Francis is here to handle the research, the conversations, and the bank-side heavy lifting—so you can focus on the home move itself.
              </p>
              <div className="about-points">
                <div>
                  <Check className="h-4.5 w-4.5" aria-hidden="true" />
                  <span>Clear explanations, without the finance-speak.</span>
                </div>
                <div>
                  <Check className="h-4.5 w-4.5" aria-hidden="true" />
                  <span>A strategy shaped around your situation.</span>
                </div>
                <div>
                  <Check className="h-4.5 w-4.5" aria-hidden="true" />
                  <span>Practical support through the lending journey.</span>
                </div>
              </div>
              <Button asChild variant="outline" className="about-cta">
                <a href="#contact">Meet your mortgage adviser <ArrowRight className="h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="image-break">
          <img
            src="/manus-storage/tmg-neighbourhood_af107889.jpg"
            alt="A welcoming New Zealand neighbourhood at dusk"
          />
          <div className="image-break-overlay" />
          <div className="site-shell image-break-content">
            <div>
              <span>PLAYBOOK CHECK-IN — YOUR HOME. YOUR STORY.</span>
              <h2>Let’s make the lending part feel lighter.</h2>
            </div>
            <Button asChild className="image-break-cta">
              <a href="#contact">Let’s talk <ArrowDownRight className="h-4.5 w-4.5" /></a>
            </Button>
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="site-shell contact-layout">
            <div className="contact-copy">
              <p className="eyebrow-dark">PLAYBOOK 05 — YOUR NEXT MOVE</p>
              <h2 className="section-title">Bring the questions. Francis will bring the lender strategy.</h2>
              <p className="contact-intro">
                Start with a no-obligation chat about your property plans. There is no pressure to have every answer—just a useful first conversation.
              </p>
              <div className="contact-methods">
                <a href="tel:+64278909000" className="contact-method">
                  <span className="contact-method-icon"><Phone className="h-4 w-4" /></span>
                  <span><small>CALL FRANCIS</small><strong>027 890 9000</strong></span>
                </a>
                <a href="mailto:francis@guardiansmith.co.nz" className="contact-method">
                  <span className="contact-method-icon"><Mail className="h-4 w-4" /></span>
                  <span><small>EMAIL FRANCIS</small><strong>francis@guardiansmith.co.nz</strong></span>
                </a>
              </div>
              <div className="contact-disclosure">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                <span>
                  Financial advice is provided by Guardian Smith (2022) Limited (FSP1002543), trading as Guardian Smith. <a href="https://guardiansmith.co.nz/disclaimer/" target="_blank" rel="noreferrer">Read public disclosure</a>.
                </span>
              </div>
            </div>

            <div className="lead-form-card">
              <div className="contact-waypoint" aria-hidden="true">
                <img src="/manus-storage/tmg-house-route-mark_ca9b338a.png" alt="" />
                <span>FINAL WAYPOINT</span>
                <i />
              </div>
              <div className="lead-form-header">
                <div className="lead-form-icon"><House className="h-5 w-5" /></div>
                <div>
                  <span>NO-OBLIGATION CHAT — CHECKPOINT 05</span>
                  <h3>Tell Francis where you’re heading.</h3>
                </div>
              </div>
              <form onSubmit={handleLeadSubmit}>
                <div className="form-grid">
                  <label>
                    <span>Your name</span>
                    <Input name="name" placeholder="Your name" required autoComplete="name" />
                  </label>
                  <label>
                    <span>Your email</span>
                    <Input name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
                  </label>
                </div>
                <label>
                  <span>Phone number <em>(optional)</em></span>
                  <Input name="phone" type="tel" placeholder="Your preferred contact number" autoComplete="tel" />
                </label>
                <label>
                  <span>What are you looking at?</span>
                  <select name="goal" defaultValue="" required>
                    <option value="" disabled>Choose your next move</option>
                    <option>Buying my first home</option>
                    <option>Refinancing or restructuring</option>
                    <option>Buying an investment property</option>
                    <option>Building a new home</option>
                    <option>Working through a complex income situation</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label>
                  <span>Anything you’d like Francis to know? <em>(optional)</em></span>
                  <Textarea name="note" rows={4} placeholder="A few high-level details are plenty. Please do not include sensitive financial information here." />
                </label>
                <Button type="submit" className="form-submit">
                  Open an email to Francis <ArrowRight className="h-4.5 w-4.5" />
                </Button>
                <p className="form-note">
                  <Clock3 className="h-3.5 w-3.5" aria-hidden="true" />
                  This opens your email app with the details above. It is a conversation starter, not a loan application.
                </p>
                {emailReady && (
                  <p className="form-status" role="status">
                    Your email app should be ready. If it did not open, contact Francis directly at <a href="mailto:francis@guardiansmith.co.nz">francis@guardiansmith.co.nz</a>.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-shell footer-main">
          <a className="brand-lockup footer-brand" href="#top" aria-label="Back to top">
            <img src="/manus-storage/tmg-house-route-mark_ca9b338a.png" alt="" className="brand-mark h-9 w-9 object-contain" />
            <span className="brand-type"><strong>That</strong> <em>Mortgage</em> <strong>Guy</strong></span>
          </a>
          <div className="footer-links">
            <a href="#how-it-works">How it works</a>
            <a href="#services">How I can help</a>
            <a href="#about">About Francis</a>
            <a href="https://guardiansmith.co.nz/disclaimer/" target="_blank" rel="noreferrer">Public disclosure</a>
          </div>
          <a className="footer-call" href="tel:+64278909000">
            <Phone className="h-4 w-4" /> 027 890 9000
          </a>
        </div>
        <div className="site-shell footer-legal">
          <p>© {new Date().getFullYear()} That Mortgage Guy. All rights reserved.</p>
          <p>Financial advice is provided by Guardian Smith (2022) Limited (FSP1002543), trading as Guardian Smith.</p>
        </div>
      </footer>
    </div>
  );
}

function ArrowUpRightIcon() {
  return <ArrowDownRight className="h-4 w-4 -rotate-90" aria-hidden="true" />;
}

"use client";
import { useState } from "react";

export default function SIBOLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const symptoms = [
    { icon: "😮‍💨", title: "The Bloat That Never Quits", text: "You look 6 months pregnant by 3pm. Every meal is a gamble, and you've started avoiding going out because of it." },
    { icon: "🧠", title: "Brain Fog & Crushing Fatigue", text: "You can't think straight. You're exhausted before the day begins. Your gut and your mind feel hijacked." },
    { icon: "🚫", title: "Growing Food Intolerances", text: "The list of foods you can't eat keeps growing. You're restricting more, suffering more, enjoying less." },
    { icon: "📋", title: '"Everything Looks Normal"', text: "Doctors say your labs are fine. But you're not fine. You need someone to actually look deeper." },
    { icon: "🔁", title: "The Relapse Cycle", text: "You've tried antibiotics, probiotics, diets. Things improve briefly, then it all comes crashing back." },
    { icon: "😰", title: "Anxiety About Every Meal", text: "Food used to be joy. Now it's fear. You plan your whole day around what your gut might do next." },
  ];

  const modules = [
    { num: "01", title: "Understanding Your SIBO — Finally", desc: "Hydrogen, methane, or hydrogen sulfide? Learn exactly which type you have, why it matters, and how your specific gas pattern shapes your symptoms and your treatment path.", tags: ["Diagnosis", "Gas Patterns", "Root Causes"] },
    { num: "02", title: "The 9 Root Causes Keeping You Stuck", desc: "MMC dysfunction, low stomach acid, poor bile flow, immune weakness, chronic stress, nutrient deficiencies — you'll understand exactly why SIBO came back, and how to close every door it uses to re-enter.", tags: ["Motility", "Bile Flow", "Immunity", "Hormones"] },
    { num: "03", title: "Phase 1: Foundation Building (Weeks 1–6)", desc: "Before you kill bacteria, you prepare your body. The exact diet, lifestyle shifts, supplement stack, and biofilm protocol to set your system up for fast, lasting recovery — with minimal die-off.", tags: ["Diet Protocol", "Gut Lining", "Biofilm Disruption", "MMC Restoration"] },
    { num: "04", title: "Phase 2: Antimicrobials — Pattern-Matched to You", desc: "Not one-size-fits-all. Get a tiered antimicrobial strategy calibrated to your gas type — from lightest herbal options to targeted clinical-grade combinations. Exact dosages, timing, and sequencing included.", tags: ["Berberine", "Allicin", "Neem", "Black Seed Oil", "Full Dosing Tables"] },
    { num: "05", title: "Phase 3: Rebuild, Reintroduce & Restabilize", desc: "Killing bacteria is half the battle. Learn how to systematically reintroduce foods, rebuild a resilient microbiome, restore carbohydrate tolerance, and prevent relapse — for good.", tags: ["Probiotics", "Fiber Reintroduction", "Relapse Prevention"] },
    { num: "06", title: "Complete Supplement Dosing & Timing Tables", desc: "Every supplement, every dose, every timing window laid out in clean reference tables. No guessing. No cross-referencing 40 different sources. Everything you need in one printable reference.", tags: ["Quick Reference", "Printable"] },
  ];

  const phases = [
    { num: "01", title: "Foundation", duration: "Weeks 1–6", desc: "Prepare your body before the kill. Build your gut lining, optimize digestion, disrupt biofilms, and support your immune system so treatment lands hard — with minimal die-off.", bullets: ["Low-FODMAP anti-inflammatory diet", "Stomach acid + bile flow restoration", "MMC retraining through meal timing", "Biofilm disruption protocol", "Critical nutrient correction"] },
    { num: "02", title: "Antimicrobials", duration: "~8 Weeks", desc: "Deploy the right antimicrobials for your specific pattern. Tiered from gentle to aggressive, matched to whether you're hydrogen, methane, hydrogen sulfide, or mixed.", bullets: ["Pattern-specific herbal antimicrobials", "Full dosing + timing tables", "Die-off management protocol", "Binder and binding strategy", "Motility support throughout"] },
    { num: "03", title: "Rebuild", duration: "4+ Weeks", desc: "The phase most protocols forget. Systematically reintroduce foods, seed the microbiome, rebuild carbohydrate tolerance, and lock in the habits that prevent relapse.", bullets: ["Probiotic restoration strategy", "Staged fiber reintroduction", "Resistant starch progression", "Long-term relapse prevention", "Progress tracking system"] },
  ];

  const testimonials = [
    { text: "I had seen 4 doctors and 2 gastroenterologists. I was down to eating 6 foods. After following this protocol, within 3 months I was eating a full diet again. The biofilm and phase sequencing was the thing I'd been missing all along.", avatar: "👩", name: "Sarah M.", detail: "Methane SIBO, 4 years suffering" },
    { text: "The section on the Migrating Motor Complex was the moment everything clicked. I'd been snacking constantly thinking it would help my energy. It was actually making my SIBO worse. Completely changed my approach.", avatar: "👨", name: "James K.", detail: "Hydrogen-dominant SIBO" },
    { text: "I was skeptical of another e-book. But this is genuinely different — it's clinical, specific, and it treats you like an intelligent adult. The dosing tables alone are worth the price. I've used this as my reference guide for 6 months.", avatar: "👩", name: "Rachel T.", detail: "Mixed SIBO + SIFO" },
  ];

  const included = [
    "The Complete SIBO Healing Protocol (71 pages)",
    "Phase 1, 2 & 3 step-by-step roadmap with week-by-week guidance",
    "Pattern-specific antimicrobial protocols (hydrogen, methane, mixed)",
    "Complete supplement dosing & timing reference tables",
    "Biofilm disruption protocol + die-off management guide",
    "SIBO-specific food lists, meal timing rules & reintroduction schedule",
    "Printable daily tracking system for symptoms + progress",
  ];

  const faqs = [
    { q: "Is this suitable if I haven't had an official SIBO diagnosis?", a: "Yes. The protocol explains how to interpret your symptoms and identify your gas pattern even without a breath test. SIBO breath tests have significant limitations, and this guide teaches you how to use your symptoms and available lab markers to move forward confidently." },
    { q: "Can I use this alongside my doctor's treatment?", a: "Absolutely. This protocol is designed to complement medical care, not replace it. The dietary, lifestyle, and foundational interventions in Phase 1 work alongside antibiotics or prescription treatments. The supplement recommendations are clearly explained so you can discuss them with your provider." },
    { q: "I've tried everything and keep relapsing. Will this be different?", a: "Relapse happens when root causes aren't addressed. Most treatments skip biofilm disruption, MMC restoration, bile support, and immune system optimization — all covered in depth here. This protocol is specifically designed for people who've tried antibiotics or other protocols and found themselves back at square one." },
    { q: "What format is it in? How do I access it?", a: "It's a PDF download — instant access after purchase. Works on any device: phone, tablet, laptop, or desktop. You can read it digitally or print it out. You own it forever with no expiry." },
    { q: "What if it doesn't work for me?", a: "You're covered by a 30-day money-back guarantee. If you apply the protocol and don't feel it's delivering value, simply email for a full refund. No questions, no hoops." },
  ];

  const sage = "#4D7A52";
  const sageDark = "#2D5E32";
  const sageMid = "#7A9E7E";
  const sageLight = "#B8D4BB";
  const sageMuted = "#E8F0E9";
  const gold = "#C9A940";
  const charcoal = "#2A2A2A";
  const cream = "#F7F3EE";
  const warmWhite = "#FDFAF6";

  return (
    <div className="overflow-x-hidden" style={{ fontFamily: "'DM Sans',sans-serif", background: warmWhite, color: "#3D3D3D" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .pf{font-family:'Playfair Display',serif}
        @keyframes fu{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        .f1{animation:fu .7s .1s ease forwards;opacity:0}
        .f2{animation:fu .7s .25s ease forwards;opacity:0}
        .f3{animation:fu .7s .4s ease forwards;opacity:0}
        .f4{animation:fu .7s .55s ease forwards;opacity:0}
        .f5{animation:fu .7s .7s ease forwards;opacity:0}
        .fb{animation:fu .8s .3s ease forwards;opacity:0}
        .pc:hover{background:rgba(122,158,126,0.1)!important}
        .bp:hover{background:transparent!important;color:${sage}!important}
        .bb:hover{background:${charcoal}!important}
        .bf:hover{background:${sageLight}!important}
        .nl:hover{color:rgba(255,255,255,0.7)!important}
        @media(min-width:1024px){.hg{grid-template-columns:1fr 1fr!important}}
        @media(min-width:640px){.pg{grid-template-columns:repeat(2,1fr)!important}}
        @media(min-width:1024px){.pg{grid-template-columns:repeat(3,1fr)!important}}
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 lg:px-10 py-3 sm:py-4"
        style={{ background: "rgba(253,250,246,0.93)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(122,158,126,0.2)" }}>
        <div className="flex items-center gap-6">
          <a href="/" className="pf font-bold uppercase tracking-widest no-underline" style={{ fontSize: "clamp(10px,1.5vw,13px)", color: charcoal, opacity: 0.6 }}>Back to Home</a>
          <div className="pf font-bold uppercase tracking-widest hidden sm:block" style={{ fontSize: "clamp(11px,2vw,15px)", color: sage }}>SIBO Healing Protocol</div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/candida" className="pf font-bold uppercase tracking-widest no-underline hidden md:block" style={{ fontSize: "clamp(10px,1.5vw,12px)", color: "#8B4F12", opacity: 0.7 }}>Candida Protocol</a>
          <a href="https://buy.polar.sh/polar_cl_KHMZ0kftCngKFsdks9VBLh4IHwx6dGekJbJXe0blCIm" style={{ background: sage, fontSize: "clamp(10px,1.5vw,13px)", padding: "8px clamp(12px,3vw,22px)", color: "white", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 2, textDecoration: "none", transition: "background .2s" }}
            onMouseEnter={e => (e.target as HTMLAnchorElement).style.background = sageMid} onMouseLeave={e => (e.target as HTMLAnchorElement).style.background = sage}>Get the Protocol →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-5 sm:px-8 lg:px-20 pt-24 sm:pt-28 pb-16 relative overflow-hidden" style={{ background: cream, minHeight: "100svh", display: "flex", alignItems: "center" }}>
        <div className="hg w-full" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(32px,5vw,60px)", alignItems: "center" }}>
          <div className="absolute pointer-events-none" style={{ top: -200, right: -200, width: 700, height: 700, borderRadius: "50%", background: `radial-gradient(circle,rgba(122,158,126,0.12) 0%,transparent 70%)` }} />

          {/* Left content */}
          <div>
            <div className="f1 flex items-center gap-3 mb-5" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: sage }}>
              <span style={{ width: 28, height: 1, background: sage, display: "inline-block", flexShrink: 0 }} />The Complete Healing Protocol
            </div>
            <h1 className="pf font-black leading-[1.08] f2 text-center lg:text-left" style={{ fontSize: "clamp(32px,6vw,64px)", color: charcoal, marginBottom: 20 }}>
              Stop Surviving.<br /><em style={{ color: sage }}>Start Healing</em><br />Your Gut.
            </h1>
            <p className="f3 text-center lg:text-left mx-auto lg:mx-0" style={{ fontSize: "clamp(14px,2vw,17px)", lineHeight: 1.75, color: "#444", maxWidth: 480, marginBottom: 28 }}>
              The 71-page, physician-informed protocol that thousands of SIBO sufferers have used to eliminate bloating, restore energy, and finally understand <em>why</em> their gut keeps failing them.
            </p>
            <div className="f4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 flex-wrap">
              <a href="https://buy.polar.sh/polar_cl_KHMZ0kftCngKFsdks9VBLh4IHwx6dGekJbJXe0blCIm" className="bp w-full sm:w-auto text-center text-white font-semibold tracking-widest uppercase rounded-[2px] no-underline transition-all duration-200"
                style={{ background: sage, border: `2px solid ${sage}`, fontSize: "clamp(11px,1.8vw,14px)", padding: "13px clamp(20px,4vw,36px)" }}>Get Instant Access →</a>
              <span className="cursor-pointer font-medium" style={{ color: "#444", textDecoration: "underline", textUnderlineOffset: 4, fontSize: "clamp(12px,1.8vw,14px)" }}
                onClick={() => document.querySelector("#inside-s")?.scrollIntoView({ behavior: "smooth" })}>See what&apos;s inside</span>
            </div>
            <div className="f5 flex items-center justify-center lg:justify-start gap-4 mt-8">
              <div style={{ color: gold, fontSize: 14, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.4 }}><strong style={{ color: charcoal }}>Trusted by thousands</strong> who were told<br />&ldquo;your tests are normal&rdquo; — but felt anything but.</p>
            </div>
          </div>

          {/* Book mockup — hidden on mobile, visible md+ */}
          <div className="fb hidden md:flex justify-center items-center">
            <div className="relative" style={{ width: "min(280px,65vw)" }}>
              <div className="absolute" style={{ bottom: -30, left: "50%", transform: "translateX(-50%)", width: "80%", height: 30, background: "radial-gradient(ellipse,rgba(0,0,0,0.18) 0%,transparent 70%)", filter: "blur(8px)" }} />
              <div className="relative overflow-hidden flex flex-col justify-between" style={{ width: "100%", aspectRatio: "6/8", background: `linear-gradient(145deg,${sage} 0%,${sageDark} 100%)`, borderRadius: "4px 12px 12px 4px", padding: "clamp(22px,5vw,36px) clamp(18px,4vw,30px)", boxShadow: `-8px 0 0 rgba(0,0,0,0.15),-10px 4px 20px rgba(0,0,0,0.25),6px 10px 40px rgba(0,0,0,0.3)` }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.02) 60px,rgba(255,255,255,0.02) 61px)" }} />
                <div className="absolute pointer-events-none" style={{ top: 0, left: 8, bottom: 0, width: 1, background: "rgba(255,255,255,0.08)" }} />
                <div style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.9)", padding: "4px 10px", borderRadius: 2, fontSize: "clamp(7px,1.2vw,9px)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", alignSelf: "flex-start" }}>Complete Protocol</div>
                <div className="text-center">
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(7px,1.2vw,9px)", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>The Complete</div>
                  <div className="pf font-black text-white leading-[1.2]" style={{ fontSize: "clamp(15px,3.5vw,22px)" }}>SIBO<br /><em style={{ color: sageLight }}>Healing</em><br />Protocol</div>
                  <div style={{ fontSize: "clamp(26px,5vw,40px)", marginTop: 10, opacity: 0.2 }}>🌿</div>
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "clamp(7px,1.2vw,9px)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center" }}>Your Roadmap to Digestive Freedom</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 text-center" style={{ background: charcoal, color: "white" }}>
        <p className="mx-auto mb-10" style={{ fontSize: "clamp(14px,2vw,20px)", lineHeight: 1.8, color: "rgba(255,255,255,0.72)", maxWidth: 680 }}>
          You&apos;ve had the tests. You&apos;ve tried the diets. You&apos;ve Googled every symptom until 2am. And yet every single morning, you wake up to the same bloating, the same fog, the same exhaustion — wondering if this is just your life now.
        </p>
        <div className="pg grid gap-[2px] mx-auto mb-10" style={{ gridTemplateColumns: "1fr", maxWidth: 920 }}>
          {symptoms.map((s, i) => (
            <div key={i} className="pc text-left p-6 sm:p-7 transition-colors duration-200 cursor-default" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="block mb-3" style={{ fontSize: "clamp(22px,4vw,28px)" }}>{s.icon}</span>
              <h3 className="pf font-bold text-white mb-2" style={{ fontSize: "clamp(14px,1.8vw,17px)" }}>{s.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.52)" }}>{s.text}</p>
            </div>
          ))}
        </div>
        <p className="pf italic mx-auto" style={{ fontSize: "clamp(17px,3vw,28px)", color: sageLight, maxWidth: 560, lineHeight: 1.5 }}>
          &ldquo;It&apos;s not in your head. It&apos;s in your small intestine — and there&apos;s a precise way out.&rdquo;
        </p>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="inside-s" className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20" style={{ background: cream }}>
        <div className="flex items-center gap-3 mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: sage }}>
          What you&apos;ll get <span style={{ flex: 1, maxWidth: 48, height: 1, background: sage, display: "inline-block" }} />
        </div>
        <h2 className="pf font-black leading-[1.1] mb-3" style={{ fontSize: "clamp(22px,4vw,52px)", color: charcoal, maxWidth: 580 }}>Everything You Need to Heal — In One Place</h2>
        <p className="mb-10" style={{ fontSize: "clamp(13px,1.8vw,17px)", lineHeight: 1.7, color: "#444", maxWidth: 560 }}>
          Not a generic gut guide. A clinical-grade, step-by-step protocol built from the ground up for people with real SIBO — covering every type, every root cause, and every phase of recovery.
        </p>
        <div className="flex flex-col">
          {modules.map((m, i) => (
            <div key={i} className="py-6 sm:py-8" style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: "0 12px", borderTop: "1px solid rgba(122,158,126,0.2)", borderBottom: i === modules.length - 1 ? "1px solid rgba(122,158,126,0.2)" : "none" }}>
              <div className="pf font-bold" style={{ fontSize: 13, color: sage, paddingTop: 3 }}>{m.num}</div>
              <div>
                <h3 className="pf font-bold mb-2" style={{ fontSize: "clamp(14px,2vw,20px)", color: charcoal }}>{m.title}</h3>
                <p style={{ fontSize: "clamp(12px,1.5vw,14px)", lineHeight: 1.65, color: "#444" }}>{m.desc}</p>
                <div className="flex flex-wrap gap-[5px] mt-3">
                  {m.tags.map(t => <span key={t} style={{ background: sageMuted, color: sage, fontSize: "clamp(9px,1.2vw,11px)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 2 }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHASES */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 text-white" style={{ background: sage }}>
        <div className="flex items-center gap-3 mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
          <span style={{ width: 48, height: 1, background: "rgba(255,255,255,0.4)", display: "inline-block", flexShrink: 0 }} />The Roadmap
        </div>
        <h2 className="pf font-black leading-[1.1] mb-3" style={{ fontSize: "clamp(22px,4vw,52px)" }}>A Three-Phase System That Actually Works</h2>
        <p className="mb-10" style={{ fontSize: "clamp(13px,1.8vw,17px)", color: "rgba(255,255,255,0.7)", maxWidth: 540, lineHeight: 1.7 }}>
          Most SIBO treatments fail because they skip preparation and ignore relapse prevention. This protocol does it differently.
        </p>
        <div className="grid gap-[2px]" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))" }}>
          {phases.map(ph => (
            <div key={ph.num} className="p-7 sm:p-9" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="pf font-black leading-none mb-2" style={{ fontSize: "clamp(34px,6vw,56px)", color: "rgba(255,255,255,0.12)" }}>{ph.num}</div>
              <div className="pf font-bold mb-1" style={{ fontSize: "clamp(16px,2.5vw,22px)" }}>{ph.title}</div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: sageLight, marginBottom: 14 }}>{ph.duration}</div>
              <p style={{ fontSize: "clamp(12px,1.5vw,14px)", lineHeight: 1.7, color: "rgba(255,255,255,0.65)", marginBottom: 14 }}>{ph.desc}</p>
              <ul className="flex flex-col gap-2">
                {ph.bullets.map(b => <li key={b} className="flex items-start gap-[10px]" style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}><span style={{ color: sageLight, flexShrink: 0, marginTop: 1 }}>→</span>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20" style={{ background: warmWhite }}>
        <h2 className="pf font-black leading-[1.15] mb-10" style={{ fontSize: "clamp(20px,3.5vw,44px)", color: charcoal, maxWidth: 480 }}>
          From <em style={{ fontStyle: "italic", color: sage }}>&ldquo;Nothing Works&rdquo;</em> to Eating Freely Again
        </h2>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-6 sm:p-9" style={{ background: cream, border: "1px solid rgba(122,158,126,0.2)" }}>
              <div className="pf absolute" style={{ top: 14, left: 22, fontSize: 68, lineHeight: 1, color: sageLight, opacity: 0.5 }}>&ldquo;</div>
              <p className="italic mb-5" style={{ fontSize: "clamp(12px,1.8vw,15px)", lineHeight: 1.75, color: "#444", paddingTop: 24 }}>{t.text}</p>
              <div className="flex items-center gap-3">
                <div style={{ width: 40, height: 40, minWidth: 40, background: sageMuted, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>{t.avatar}</div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: charcoal, marginBottom: 2 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#444" }}>{t.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 text-center" style={{ background: cream }}>
        <div className="flex items-center justify-center gap-3 mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: sage }}>
          <span style={{ width: 48, height: 1, background: sage, display: "inline-block" }} />Get Started Today<span style={{ width: 48, height: 1, background: sage, display: "inline-block" }} />
        </div>
        <h2 className="pf font-black leading-[1.1] mb-3" style={{ fontSize: "clamp(20px,4vw,52px)", color: charcoal }}>One Protocol. No Subscriptions. Yours Forever.</h2>
        <p className="mx-auto mb-10" style={{ fontSize: "clamp(13px,1.8vw,17px)", color: "#444", maxWidth: 520, lineHeight: 1.7 }}>Instant PDF download. Start reading in the next 2 minutes. Apply what you learn today.</p>
        <div className="relative mx-auto text-left w-full" style={{ background: "white", border: `2px solid ${sage}`, maxWidth: 520, padding: "clamp(40px,8vw,56px) clamp(18px,5vw,48px) clamp(28px,5vw,40px)", boxShadow: "0 20px 60px rgba(77,122,82,0.1)" }}>
          <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: sage, color: "white", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 14px", fontSize: "clamp(7px,1.4vw,10px)", whiteSpace: "nowrap" }}>Most Comprehensive SIBO Resource Available</div>
          <div className="text-center mb-7">
            <div style={{ fontSize: 14, color: "#444", textDecoration: "line-through", marginBottom: 4 }}>Regular price $79</div>
            <div className="pf font-black leading-none" style={{ fontSize: "clamp(48px,12vw,72px)", color: charcoal, marginBottom: 6 }}>$34</div>
            <div style={{ fontSize: "clamp(10px,1.5vw,12px)", color: "#444" }}>One-time payment · Instant PDF download · Yours forever</div>
          </div>
          <div className="flex flex-col gap-3 mb-7">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3" style={{ fontSize: "clamp(12px,1.8vw,15px)", color: "#3D3D3D" }}>
                <div style={{ width: 22, height: 22, minWidth: 22, background: sageMuted, color: sage, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, marginTop: 1 }}>✓</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a href="https://buy.polar.sh/polar_cl_KHMZ0kftCngKFsdks9VBLh4IHwx6dGekJbJXe0blCIm" className="bb block w-full text-center text-white font-bold tracking-widest uppercase no-underline rounded-[2px] transition-colors duration-200 mb-4"
            style={{ background: sage, padding: "clamp(12px,2.5vw,18px) 12px", fontSize: "clamp(11px,1.8vw,14px)" }}>Yes — I&apos;m Ready to Heal My Gut →</a>
          <p className="text-center" style={{ fontSize: "clamp(10px,1.5vw,13px)", color: "#444" }}>🔒 &nbsp;30-Day Money-Back Guarantee · Secure Checkout</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 mx-auto w-full" style={{ background: warmWhite, maxWidth: 820 }}>
        <h2 className="pf font-black mb-8" style={{ fontSize: "clamp(20px,3.5vw,44px)", color: charcoal }}>Questions? Let&apos;s Address Them.</h2>
        {faqs.map((f, i) => (
          <div key={i} className="py-5 sm:py-6 cursor-pointer" style={{ borderTop: "1px solid rgba(122,158,126,0.2)", borderBottom: i === faqs.length - 1 ? "1px solid rgba(122,158,126,0.2)" : "none" }}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}>
            <div className="flex items-start justify-between gap-4">
              <div className="pf font-bold" style={{ fontSize: "clamp(13px,2vw,18px)", color: charcoal }}>{f.q}</div>
              <span className="flex-shrink-0 text-xl" style={{ color: sage }}>{openFaq === i ? "−" : "+"}</span>
            </div>
            {openFaq === i && <p className="mt-3" style={{ fontSize: "clamp(12px,1.8vw,15px)", lineHeight: 1.75, color: "#444" }}>{f.a}</p>}
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-20 text-center relative overflow-hidden" style={{ background: charcoal }}>
        <div className="absolute pointer-events-none" style={{ top: -300, left: "50%", transform: "translateX(-50%)", width: 800, height: 600, background: "radial-gradient(circle,rgba(122,158,126,0.15) 0%,transparent 65%)" }} />
        <h2 className="pf font-black leading-[1.1] text-white mx-auto relative mb-5" style={{ fontSize: "clamp(22px,5vw,64px)", maxWidth: 700 }}>
          Your Gut Knows How to Heal. <em style={{ color: sageLight }}>Give It the Right Instructions.</em>
        </h2>
        <p className="relative mx-auto mb-8" style={{ fontSize: "clamp(13px,1.8vw,17px)", lineHeight: 1.75, color: "rgba(255,255,255,0.65)", maxWidth: 520 }}>
          Every system in your body is pushing toward recovery — it just needs the environment to make it possible. This protocol clears the path.
        </p>
        <a href="https://buy.polar.sh/polar_cl_KHMZ0kftCngKFsdks9VBLh4IHwx6dGekJbJXe0blCIm" className="bf inline-block font-bold tracking-widest uppercase no-underline rounded-[2px] transition-colors duration-200 relative mb-4"
          style={{ background: "white", color: charcoal, padding: "clamp(12px,2.5vw,20px) clamp(22px,5vw,52px)", fontSize: "clamp(11px,1.8vw,15px)" }}>Get Instant Access — $34 →</a>
        <p className="relative" style={{ fontSize: "clamp(10px,1.5vw,13px)", color: "rgba(255,255,255,0.4)" }}>PDF download · 30-day guarantee · No subscriptions</p>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-8 lg:px-20 py-6" style={{ background: "#1A1A1A" }}>
        <div className="pf text-center sm:text-left" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, letterSpacing: "0.08em" }}>SIBO Healing Protocol</div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-7">
          <a href="/refund-policy" className="nl no-underline transition-colors duration-200" style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>Refund Policy</a>
          <a href="mailto:biomeai01@gmail.com" className="nl no-underline transition-colors duration-200" style={{ color: "rgba(255,255,255,0.3)", fontSize: 12 }}>Contact: biomeai01@gmail.com</a>
        </div>
      </footer>
      <div className="text-center px-5 py-4" style={{ background: "#141414", fontSize: 11, color: "rgba(255,255,255,0.18)", lineHeight: 1.6 }}>
        This e-book is for educational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider before making changes to your diet, supplement regimen, or health protocol. Individual results will vary.
      </div>
    </div>
  );
}
"use client";
import { useState } from "react";

export default function CandidaLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const symptoms = [
    { icon: "🧠", title: "Relentless Brain Fog", text: "That low-grade hangover feeling after eating carbs. Can't think, can't focus, can't function — and it gets worse every meal." },
    { icon: "🍬", title: "Uncontrollable Sugar Cravings", text: "It's not willpower. Candida literally signals your brain to feed it more sugar. The cravings are real — and they're not yours." },
    { icon: "😮‍💨", title: "Bloating After Every Meal", text: "Especially after carbs. Your abdomen distends, you feel full of gas, and nothing seems to settle. Every meal is a gamble." },
    { icon: "😴", title: "Chronic Fatigue", text: "Exhausted no matter how much you sleep. Candida steals your nutrients, produces toxins, and drains your mitochondria dry." },
    { icon: "🫧", title: "White Tongue Coating", text: "That thick white or yellowish film on your tongue isn't random — it's oral candida overgrowth, a visible sign of systemic imbalance." },
    { icon: "🔁", title: "The Endless Relapse Cycle", text: "Antifungals work briefly, then it all comes back. Because no one fixed the terrain. This is where most protocols fail you." },
  ];

  const modules = [
    { num: "01", title: "Understanding Your Candida — The Real Picture", desc: "Candida is not the enemy — it's a signal. Learn what drives overgrowth, why it switches to its invasive hyphal form, and why antifungals alone never fix the root problem. Biofilms, iron dysregulation, immune evasion — finally explained clearly.", tags: ["Root Causes", "Biofilms", "Hyphal Form", "Iron Dysregulation"] },
    { num: "02", title: "Phase 1: Foundation Building (Weeks 1–4)", desc: "Before you kill anything, you prepare the terrain. Anti-Candida diet, bile flow restoration, stomach acid support, gut lining repair, hormone optimization, and critical nutrient correction — the full foundation stack, week by week.", tags: ["Diet Protocol", "Gut Lining", "Bile Flow", "Immune Support"] },
    { num: "03", title: "Biofilm Disruption — The Missing Step", desc: "Candida hides behind protective biofilms that antifungals can't penetrate. This module covers the Primary and Secondary Biofilm Disruptor stacks — NAC, enzyme blends, EGCG, serrapeptase, nattokinase — with exact timing and dosing tables.", tags: ["NAC", "Enzyme Blend", "Serrapeptase", "EGCG"] },
    { num: "04", title: "Phase 2: Elimination (Weeks 5–12)", desc: "The systematic antifungal rotation matched to your pattern. Berberine, caprylic acid, allicin, monolaurin — deployed in sequence to prevent resistance. Full 8-week calendar with dosing tables, rotation logic, and die-off management built in.", tags: ["Berberine", "Caprylic Acid", "Allicin", "Monolaurin"] },
    { num: "05", title: "Die-Off (Herxheimer) Management Protocol", desc: "When Candida dies it floods your body with acetaldehyde and toxins. Without preparation, this stops most people. This module covers binders, drainage support, physical detox strategies, and exactly when to slow down vs push through.", tags: ["Activated Charcoal", "Binders", "Detox Support", "Epsom Baths"] },
    { num: "06", title: "Phase 3: Repair, Restore & Rebuild (Weeks 10–14)", desc: "Probiotic restoration sequenced by week — Saccharomyces boulardii, L. rhamnosus GG, Bifidobacterium strains, soil-based probiotics. Plus gut lining repair, microbiome seeding, and the full transition out of the kill phase.", tags: ["S. Boulardii", "Probiotics", "Gut Repair", "Microbiome"] },
    { num: "07", title: "Phase 4: Prevention, Maintenance & Relapse Response", desc: "The 80/20 lifestyle that keeps Candida gone. Warning sign recognition, a quick-response relapse protocol (week by week), common triggers to avoid, and maintenance supplement schedule — everything to stay clear for good.", tags: ["Relapse Prevention", "Maintenance", "Early Warning Signs", "Lifestyle"] },
  ];

  const phases = [
    { num: "01", title: "Foundation", duration: "Weeks 1–4", desc: "Fix the terrain first. Diet, digestion, bile flow, gut lining, hormones, immune support, and critical nutrients — so when you attack, it sticks.", bullets: ["Anti-Candida elimination diet", "Stomach acid & bile flow restoration", "Gut lining repair (leaky gut)", "Hormone & thyroid optimization", "Critical nutrient correction (D, Mg, B-complex)"] },
    { num: "02", title: "Elimination", duration: "Weeks 5–12", desc: "Systematic antifungal rotation to prevent resistance, with full die-off and detox support so you don't crash mid-protocol.", bullets: ["Biofilm disruption before the kill", "Rotating antifungal protocol", "Die-off binder & drainage support", "Physical detox (sauna, baths, dry brush)", "Bile & motility support continued"] },
    { num: "03", title: "Repair & Restore", duration: "Weeks 10–14", desc: "Overlapping with elimination — restoring the microbiome systematically. Most protocols skip this. This is what makes healing permanent.", bullets: ["Sequenced probiotic reintroduction", "Saccharomyces boulardii for relapse prevention", "Bifidobacterium & soil-based probiotic seeding", "Gut lining peptide support", "Gut-brain axis restoration"] },
    { num: "04", title: "Prevention", duration: "Ongoing", desc: "The 80/20 lifestyle framework. Early warning sign recognition. A week-by-week relapse response protocol if symptoms ever return.", bullets: ["Maintenance supplement schedule", "Early relapse warning checklist", "Quick-response relapse protocol", "Common trigger avoidance guide", "Quarterly blood work review system"] },
  ];

  const testimonials = [
    { avatar: "👩", text: "I had thrush for 3 years straight, tried every prescription antifungal, and kept relapsing within weeks. The biofilm section was the thing I'd been missing the entire time. 4 months in and I'm genuinely clear.", name: "Emma R.", detail: "Chronic oral & gut Candida, 3 years" },
    { avatar: "👨", text: "The sugar cravings were running my life. I genuinely couldn't stop — I thought I had no willpower. Once I understood what Candida was actually doing to my brain chemistry and followed the elimination phase, the cravings vanished within 3 weeks.", name: "Daniel K.", detail: "Systemic Candida + severe cravings" },
    { avatar: "👩", text: "The die-off section alone saved my protocol. I'd tried to kill Candida twice before and felt so sick I quit. This time I followed the binder and drainage protocol and sailed through. I'm now in Phase 3 and eating things I haven't touched in years.", name: "Priya M.", detail: "Mixed Candida + SIBO, 5 years suffering" },
  ];

  const included = [
    "Complete Candida Recovery Protocol (4 phases, 14+ weeks)",
    "Anti-Candida diet guide with food lists & meal timing rules",
    "Primary & secondary biofilm disruption stacks with timing tables",
    "8-week antifungal rotation calendar (berberine, allicin, caprylic, monolaurin)",
    "Die-off management guide with binder protocols & physical detox strategies",
    "Probiotic restoration sequence — strain-by-strain, week-by-week",
    "Phase 4 relapse prevention: early warning signs & quick-response protocol",
    "Complete supplement dosing & timing reference tables (printable)",
    "Troubleshooting guide: cravings, constipation, probiotic reactions & more",
  ];

  const faqs = [
    { q: "Do I need a formal Candida diagnosis to use this protocol?", a: "No. The protocol teaches you how to identify your pattern through symptoms — white tongue, sugar cravings, brain fog after carbs, skin issues, chronic fatigue. Many people with Candida overgrowth never get a formal diagnosis because standard tests often miss it. The protocol is designed to work whether or not you have lab confirmation." },
    { q: "I've tried antifungals before and it always comes back. Is this different?", a: "Yes — and this is the most important question. Relapse happens because antifungals don't fix the terrain that allowed Candida to overgrow in the first place. This protocol specifically addresses bile flow, stomach acid, gut lining integrity, immune regulation, biofilms, and the microbiome. Without those, Candida always returns. This is built for people who've already failed the standard approach." },
    { q: "What is die-off and will I experience it?", a: "Die-off (Herxheimer reaction) happens when Candida dies and releases toxins — particularly acetaldehyde — into your system. Symptoms include headaches, fatigue, nausea, brain fog, and skin breakouts. This protocol includes a complete die-off management system (binders, physical detox, dosing adjustments) specifically designed to minimize this and keep you moving forward." },
    { q: "Can I follow this alongside prescription antifungals from my doctor?", a: "Absolutely. The foundation work in Phase 1, the biofilm disruption, and the die-off support are all complementary to pharmaceutical antifungals like fluconazole. The protocol is designed to make any antifungal approach more effective by fixing the terrain and reducing resistance. Always discuss supplements with your provider." },
    { q: "What format is it and how do I access it?", a: "Instant PDF download — accessible immediately after purchase on any device. Phone, tablet, laptop, desktop. Print it or read digitally. You own it forever with no expiry or subscription." },
  ];

  const amber = "#8B4F12";
  const amberMid = "#C97B2A";
  const amberLight = "#E8C17A";
  const amberMuted = "#F5ECD9";
  const charcoal = "#2A2A2A";
  const cream = "#FAF5EE";
  const warmWhite = "#FDFAF6";

  return (
    <div className="overflow-x-hidden" style={{ fontFamily: "'DM Sans',sans-serif", background: warmWhite, color: "#3D3D3D" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');
        .cg{font-family:'Cormorant Garamond',serif}
        @keyframes fu{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:translateY(0)}}
        .f1{animation:fu .7s .1s ease forwards;opacity:0}
        .f2{animation:fu .7s .25s ease forwards;opacity:0}
        .f3{animation:fu .7s .4s ease forwards;opacity:0}
        .f4{animation:fu .7s .55s ease forwards;opacity:0}
        .f5{animation:fu .7s .7s ease forwards;opacity:0}
        .fb{animation:fu .8s .3s ease forwards;opacity:0}
        .sc:hover{background:rgba(201,123,42,0.08)!important}
        .bpc:hover{background:transparent!important;color:${amber}!important}
        .bbc:hover{background:${charcoal}!important}
        .bfc:hover{background:${amberLight}!important}
        .nlc:hover{color:rgba(255,255,255,0.7)!important}
        @media(min-width:1024px){.hgc{grid-template-columns:1fr 1fr!important}}
        @media(min-width:640px){.pgc{grid-template-columns:repeat(2,1fr)!important}}
        @media(min-width:1024px){.pgc{grid-template-columns:repeat(3,1fr)!important}}
        @media(min-width:768px){.phg{grid-template-columns:repeat(2,1fr)!important}}
        @media(min-width:1024px){.phg{grid-template-columns:repeat(4,1fr)!important}}
      `}</style>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 lg:px-10 py-3 sm:py-4"
        style={{ background: "rgba(253,250,246,0.93)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(201,123,42,0.2)" }}>
        <div className="flex items-center gap-6">
          <a href="/" className="cg font-bold uppercase tracking-widest no-underline" style={{ fontSize: "clamp(10px,1.5vw,13px)", color: charcoal, opacity: 0.6 }}>Back to Home</a>
          <div className="cg font-bold uppercase tracking-widest hidden sm:block" style={{ fontSize: "clamp(11px,2vw,15px)", color: amber }}>Candida Recovery Protocol</div>
        </div>
        <div className="flex items-center gap-4">
          <a href="/sibo" className="cg font-bold uppercase tracking-widest no-underline hidden md:block" style={{ fontSize: "clamp(10px,1.5vw,12px)", color: "#4D7A52", opacity: 0.7 }}>SIBO Protocol</a>
          <a href="#pricing" style={{ background: amber, fontSize: "clamp(10px,1.5vw,13px)", padding: "8px clamp(12px,3vw,22px)", color: "white", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", borderRadius: 2, textDecoration: "none", transition: "background .2s" }}
            onMouseEnter={e => (e.target as HTMLAnchorElement).style.background = amberMid} onMouseLeave={e => (e.target as HTMLAnchorElement).style.background = amber}>Get the Protocol →</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="px-5 sm:px-8 lg:px-20 pt-24 sm:pt-28 pb-16 relative overflow-hidden" style={{ background: cream, minHeight: "100svh", display: "flex", alignItems: "center" }}>
        <div className="hgc w-full" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "clamp(32px,5vw,60px)", alignItems: "center" }}>
          <div className="absolute pointer-events-none" style={{ top: -150, right: -150, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,123,42,0.10) 0%,transparent 70%)" }} />
          <div className="absolute pointer-events-none" style={{ bottom: -100, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(201,123,42,0.06) 0%,transparent 70%)" }} />

          {/* Left */}
          <div>
            <div className="f1 flex items-center gap-3 mb-5" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: amber }}>
              <span style={{ width: 28, height: 1, background: amber, display: "inline-block", flexShrink: 0 }} />The Complete Recovery Protocol
            </div>
            <h1 className="cg font-bold leading-[1.06] f2 text-center lg:text-left" style={{ fontSize: "clamp(32px,6vw,68px)", color: charcoal, marginBottom: 20 }}>
              Stop Feeding It.<br /><em style={{ color: amber }}>Start Starving</em><br />Your Candida.
            </h1>
            <p className="f3 text-center lg:text-left mx-auto lg:mx-0" style={{ fontSize: "clamp(14px,2vw,17px)", lineHeight: 1.75, color: "#444", maxWidth: 480, marginBottom: 28 }}>
              The 4-phase, science-backed protocol that addresses <em>why</em> Candida keeps coming back — covering biofilms, terrain restoration, antifungal rotation, and the gut rebuild most protocols completely ignore.
            </p>
            <div className="f4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 flex-wrap">
              <a href="#pricing" className="bpc w-full sm:w-auto text-center text-white font-semibold tracking-widest uppercase rounded-[2px] no-underline transition-all duration-200"
                style={{ background: amber, border: `2px solid ${amber}`, fontSize: "clamp(11px,1.8vw,14px)", padding: "13px clamp(20px,4vw,36px)" }}>Get Instant Access →</a>
              <span className="cursor-pointer font-medium" style={{ color: "#444", textDecoration: "underline", textUnderlineOffset: 4, fontSize: "clamp(12px,1.8vw,14px)" }}
                onClick={() => document.querySelector("#inside-c")?.scrollIntoView({ behavior: "smooth" })}>See what&apos;s inside</span>
            </div>
            <div className="f5 flex items-center justify-center lg:justify-start gap-4 mt-8">
              <div style={{ color: amberMid, fontSize: 14, letterSpacing: 2 }}>★★★★★</div>
              <p style={{ fontSize: 13, color: "#444", lineHeight: 1.4 }}><strong style={{ color: charcoal }}>Trusted by thousands</strong> stuck in the relapse cycle —<br />told antifungals were all they needed.</p>
            </div>
          </div>

          {/* Book — hidden mobile, visible md+ */}
          <div className="fb hidden md:flex justify-center items-center">
            <div className="relative" style={{ width: "min(270px,65vw)" }}>
              <div className="absolute" style={{ bottom: -30, left: "50%", transform: "translateX(-50%)", width: "80%", height: 30, background: "radial-gradient(ellipse,rgba(0,0,0,0.18) 0%,transparent 70%)", filter: "blur(8px)" }} />
              <div className="relative overflow-hidden flex flex-col justify-between" style={{ width: "100%", aspectRatio: "6/8", background: `linear-gradient(145deg,${amber} 0%,#5C2E06 100%)`, borderRadius: "4px 12px 12px 4px", padding: "clamp(22px,5vw,36px) clamp(18px,4vw,30px)", boxShadow: "-8px 0 0 rgba(0,0,0,0.15),-10px 4px 20px rgba(0,0,0,0.25),6px 10px 40px rgba(0,0,0,0.3)" }}>
                <div className="absolute inset-0 pointer-events-none" style={{ background: "repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(255,255,255,0.02) 60px,rgba(255,255,255,0.02) 61px)" }} />
                <div className="absolute pointer-events-none" style={{ top: 0, left: 8, bottom: 0, width: 1, background: "rgba(255,255,255,0.08)" }} />
                <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 20%,rgba(232,193,122,0.12) 0%,transparent 60%)" }} />
                <div style={{ background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.9)", padding: "4px 10px", borderRadius: 2, fontSize: "clamp(7px,1.2vw,9px)", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", alignSelf: "flex-start" }}>4-Phase Protocol</div>
                <div className="text-center">
                  <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "clamp(7px,1.2vw,9px)", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 8 }}>The Complete</div>
                  <div className="cg font-bold text-white leading-[1.15]" style={{ fontSize: "clamp(15px,3.5vw,24px)" }}>Candida<br /><em style={{ color: amberLight }}>Recovery</em><br />Protocol</div>
                  <div style={{ fontSize: "clamp(26px,5vw,40px)", marginTop: 10, opacity: 0.15 }}>🌾</div>
                </div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "clamp(7px,1.2vw,9px)", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center" }}>Fix the Terrain. End the Cycle.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 text-center" style={{ background: charcoal, color: "white" }}>
        <p className="mx-auto mb-10" style={{ fontSize: "clamp(14px,2vw,20px)", lineHeight: 1.8, color: "rgba(255,255,255,0.72)", maxWidth: 700 }}>
          You&apos;ve cut the sugar. You&apos;ve taken the antifungals. You felt better for a few weeks — then it came roaring back. You&apos;re not failing the protocol. The protocol was failing you.
        </p>
        <div className="pgc grid gap-[2px] mx-auto mb-10" style={{ gridTemplateColumns: "1fr", maxWidth: 940 }}>
          {symptoms.map((s, i) => (
            <div key={i} className="sc text-left p-6 sm:p-7 transition-colors duration-200 cursor-default" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="block mb-3" style={{ fontSize: "clamp(22px,4vw,28px)" }}>{s.icon}</span>
              <h3 className="cg font-bold text-white mb-2" style={{ fontSize: "clamp(14px,1.8vw,18px)" }}>{s.title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.52)" }}>{s.text}</p>
            </div>
          ))}
        </div>
        <p className="cg italic mx-auto" style={{ fontSize: "clamp(17px,3vw,30px)", color: amberLight, maxWidth: 580, lineHeight: 1.45 }}>
          &ldquo;Candida isn&apos;t the enemy — it&apos;s a signal. Fix what&apos;s broken underneath, and it loses its grip forever.&rdquo;
        </p>
      </section>

      {/* WHAT'S INSIDE */}
      <section id="inside-c" className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20" style={{ background: cream }}>
        <div className="flex items-center gap-3 mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: amber }}>
          What you&apos;ll get <span style={{ flex: 1, maxWidth: 48, height: 1, background: amber, display: "inline-block" }} />
        </div>
        <h2 className="cg font-bold leading-[1.1] mb-3" style={{ fontSize: "clamp(22px,4vw,54px)", color: charcoal, maxWidth: 620 }}>A Complete 4-Phase System — Not Another Antifungal List</h2>
        <p className="mb-10" style={{ fontSize: "clamp(13px,1.8vw,17px)", lineHeight: 1.7, color: "#444", maxWidth: 560 }}>
          Every module builds on the last. Diet, digestion, biofilm disruption, antifungal rotation, die-off management, probiotic restoration, and relapse prevention — all in one place.
        </p>
        <div className="flex flex-col">
          {modules.map((m, i) => (
            <div key={i} className="py-6 sm:py-8" style={{ display: "grid", gridTemplateColumns: "40px 1fr", gap: "0 12px", borderTop: "1px solid rgba(201,123,42,0.2)", borderBottom: i === modules.length - 1 ? "1px solid rgba(201,123,42,0.2)" : "none" }}>
              <div className="cg font-bold" style={{ fontSize: 14, color: amber, paddingTop: 3 }}>{m.num}</div>
              <div>
                <h3 className="cg font-bold mb-2" style={{ fontSize: "clamp(14px,2vw,21px)", color: charcoal }}>{m.title}</h3>
                <p style={{ fontSize: "clamp(12px,1.5vw,14px)", lineHeight: 1.65, color: "#444" }}>{m.desc}</p>
                <div className="flex flex-wrap gap-[5px] mt-3">
                  {m.tags.map(t => <span key={t} style={{ background: amberMuted, color: amber, fontSize: "clamp(9px,1.2vw,11px)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 2 }}>{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PHASES */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 text-white" style={{ background: amber }}>
        <div className="flex items-center gap-3 mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
          <span style={{ width: 48, height: 1, background: "rgba(255,255,255,0.35)", display: "inline-block", flexShrink: 0 }} />The Roadmap
        </div>
        <h2 className="cg font-bold leading-[1.1] mb-3" style={{ fontSize: "clamp(22px,4vw,54px)" }}>Four Phases. One Complete Recovery.</h2>
        <p className="mb-10" style={{ fontSize: "clamp(13px,1.8vw,17px)", color: "rgba(255,255,255,0.68)", maxWidth: 560, lineHeight: 1.7 }}>
          Most Candida protocols are one phase — kill. This system is four. Because terrain, timing, and sequence are everything.
        </p>
        <div className="phg grid gap-[2px]" style={{ gridTemplateColumns: "1fr" }}>
          {phases.map(ph => (
            <div key={ph.num} className="p-7 sm:p-9" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
              <div className="cg font-bold leading-none mb-2" style={{ fontSize: "clamp(34px,6vw,52px)", color: "rgba(255,255,255,0.10)" }}>{ph.num}</div>
              <div className="cg font-bold mb-1" style={{ fontSize: "clamp(16px,2.5vw,22px)" }}>{ph.title}</div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: amberLight, marginBottom: 14 }}>{ph.duration}</div>
              <p style={{ fontSize: "clamp(12px,1.5vw,14px)", lineHeight: 1.7, color: "rgba(255,255,255,0.62)", marginBottom: 14 }}>{ph.desc}</p>
              <ul className="flex flex-col gap-2">
                {ph.bullets.map(b => <li key={b} className="flex items-start gap-[10px]" style={{ fontSize: 13, color: "rgba(255,255,255,0.72)" }}><span style={{ color: amberLight, flexShrink: 0, marginTop: 1 }}>→</span>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20" style={{ background: warmWhite }}>
        <h2 className="cg font-bold leading-[1.15] mb-10" style={{ fontSize: "clamp(20px,3.5vw,46px)", color: charcoal, maxWidth: 500 }}>
          From <em style={{ fontStyle: "italic", color: amber }}>&ldquo;Nothing Works&rdquo;</em> to Genuinely Free
        </h2>
        <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))" }}>
          {testimonials.map((t, i) => (
            <div key={i} className="relative p-6 sm:p-9" style={{ background: cream, border: "1px solid rgba(201,123,42,0.18)" }}>
              <div className="cg absolute" style={{ top: 14, left: 22, fontSize: 68, lineHeight: 1, color: amberLight, opacity: 0.5 }}>&ldquo;</div>
              <p className="italic mb-5" style={{ fontSize: "clamp(12px,1.8vw,15px)", lineHeight: 1.75, color: "#444", paddingTop: 24 }}>{t.text}</p>
              <div className="flex items-center gap-3">
                <div style={{ width: 40, height: 40, minWidth: 40, background: amberMuted, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>{t.avatar}</div>
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
        <div className="flex items-center justify-center gap-3 mb-4" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: amber }}>
          <span style={{ width: 48, height: 1, background: amber, display: "inline-block" }} />Get Started Today<span style={{ width: 48, height: 1, background: amber, display: "inline-block" }} />
        </div>
        <h2 className="cg font-bold leading-[1.1] mb-3" style={{ fontSize: "clamp(20px,4vw,54px)", color: charcoal }}>One Protocol. No Subscriptions. Yours Forever.</h2>
        <p className="mx-auto mb-10" style={{ fontSize: "clamp(13px,1.8vw,17px)", color: "#444", maxWidth: 520, lineHeight: 1.7 }}>Instant PDF download. Start reading in 2 minutes. Begin Phase 1 today.</p>
        <div className="relative mx-auto text-left w-full" style={{ background: "white", border: `2px solid ${amber}`, maxWidth: 540, padding: "clamp(40px,8vw,56px) clamp(18px,5vw,48px) clamp(28px,5vw,40px)", boxShadow: "0 20px 60px rgba(139,79,18,0.12)" }}>
          <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: amber, color: "white", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 14px", fontSize: "clamp(7px,1.4vw,10px)", whiteSpace: "nowrap" }}>Most Complete Candida Resource Available</div>
          <div className="text-center mb-7">
            <div style={{ fontSize: 14, color: "#444", textDecoration: "line-through", marginBottom: 4 }}>Regular price $79</div>
            <div className="cg font-bold leading-none" style={{ fontSize: "clamp(48px,12vw,76px)", color: charcoal, marginBottom: 6 }}>$34</div>
            <div style={{ fontSize: "clamp(10px,1.5vw,12px)", color: "#444" }}>One-time payment · Instant PDF download · Yours forever</div>
          </div>
          <div className="flex flex-col gap-3 mb-7">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-3" style={{ fontSize: "clamp(12px,1.8vw,15px)", color: "#3D3D3D" }}>
                <div style={{ width: 22, height: 22, minWidth: 22, background: amberMuted, color: amber, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, marginTop: 1 }}>✓</div>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a href="#" className="bbc block w-full text-center text-white font-bold tracking-widest uppercase no-underline rounded-[2px] transition-colors duration-200 mb-4"
            style={{ background: amber, padding: "clamp(12px,2.5vw,18px) 12px", fontSize: "clamp(11px,1.8vw,14px)" }}>Yes — I&apos;m Ready to End the Cycle →</a>
          <p className="text-center" style={{ fontSize: "clamp(10px,1.5vw,13px)", color: "#444" }}>🔒 &nbsp;30-Day Money-Back Guarantee · Secure Checkout</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-20 mx-auto w-full" style={{ background: warmWhite, maxWidth: 840 }}>
        <h2 className="cg font-bold mb-8" style={{ fontSize: "clamp(20px,3.5vw,46px)", color: charcoal }}>Questions? Let&apos;s Address Them.</h2>
        {faqs.map((f, i) => (
          <div key={i} className="py-5 sm:py-6 cursor-pointer" style={{ borderTop: "1px solid rgba(201,123,42,0.2)", borderBottom: i === faqs.length - 1 ? "1px solid rgba(201,123,42,0.2)" : "none" }}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}>
            <div className="flex items-start justify-between gap-4">
              <div className="cg font-bold" style={{ fontSize: "clamp(13px,2vw,19px)", color: charcoal }}>{f.q}</div>
              <span className="flex-shrink-0 text-xl" style={{ color: amber }}>{openFaq === i ? "−" : "+"}</span>
            </div>
            {openFaq === i && <p className="mt-3" style={{ fontSize: "clamp(12px,1.8vw,15px)", lineHeight: 1.75, color: "#444" }}>{f.a}</p>}
          </div>
        ))}
      </section>

      {/* FINAL CTA */}
      <section className="py-16 sm:py-24 lg:py-28 px-5 sm:px-8 lg:px-20 text-center relative overflow-hidden" style={{ background: charcoal }}>
        <div className="absolute pointer-events-none" style={{ top: -300, left: "50%", transform: "translateX(-50%)", width: 800, height: 600, background: "radial-gradient(circle,rgba(201,123,42,0.14) 0%,transparent 65%)" }} />
        <h2 className="cg font-bold leading-[1.1] text-white mx-auto relative mb-5" style={{ fontSize: "clamp(22px,5vw,66px)", maxWidth: 720 }}>
          Your Body Knows How to Heal.<br /><em style={{ color: amberLight }}>Give It the Right Environment.</em>
        </h2>
        <p className="relative mx-auto mb-8" style={{ fontSize: "clamp(13px,1.8vw,17px)", lineHeight: 1.75, color: "rgba(255,255,255,0.62)", maxWidth: 520 }}>
          Candida only thrives when the terrain lets it. This protocol fixes the terrain — and gives you the tools to keep it fixed.
        </p>
        <a href="#pricing" className="bfc inline-block font-bold tracking-widest uppercase no-underline rounded-[2px] transition-colors duration-200 relative mb-4"
          style={{ background: "white", color: charcoal, padding: "clamp(12px,2.5vw,20px) clamp(22px,5vw,52px)", fontSize: "clamp(11px,1.8vw,15px)" }}>Get Instant Access — $34 →</a>
        <p className="relative" style={{ fontSize: "clamp(10px,1.5vw,13px)", color: "rgba(255,255,255,0.38)" }}>PDF download · 30-day guarantee · No subscriptions</p>
      </section>

      {/* FOOTER */}
      <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 sm:px-8 lg:px-20 py-6" style={{ background: "#1A1A1A" }}>
        <div className="cg text-center sm:text-left" style={{ color: "rgba(255,255,255,0.38)", fontSize: 13, letterSpacing: "0.08em" }}>Candida Recovery Protocol</div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-7">
          <a href="/refund-policy" className="nlc no-underline transition-colors duration-200" style={{ color: "rgba(255,255,255,0.28)", fontSize: 12 }}>Refund Policy</a>
          <a href="mailto:biomeai01@gmail.com" className="nlc no-underline transition-colors duration-200" style={{ color: "rgba(255,255,255,0.28)", fontSize: 12 }}>Contact: biomeai01@gmail.com</a>
        </div>
      </footer>
      <div className="text-center px-5 py-4" style={{ background: "#141414", fontSize: 11, color: "rgba(255,255,255,0.18)", lineHeight: 1.6 }}>
        This e-book is for educational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider before making changes to your diet, supplement regimen, or health protocol. Individual results will vary.
      </div>
    </div>
  );
}
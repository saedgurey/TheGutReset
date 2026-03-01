"use client";
import { useState, useEffect, useRef } from "react";

export default function BridgeSelectorPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // SIBO — sage greens
  const siboColor = "#4D7A52";
  const siboDark = "#2D5E32";
  const siboLight = "#B8D4BB";
  const siboMuted = "#E8F0E9";

  // Candida — warm ambers
  const candidaColor = "#8B4F12";
  const candidaMid = "#C97B2A";
  const candidaLight = "#E8C17A";
  const candidaMuted = "#F5ECD9";

  const charcoal = "#1E1E1E";
  const offWhite = "#FDFAF6";
  const cream = "#F7F2EB";

  const siboSymptoms = [
    "Severe bloating 30–60 min after meals",
    "Constipation, diarrhea, or alternating both",
    "Brain fog & relentless fatigue",
    "Growing list of food intolerances",
    "Belching, gas & abdominal pressure",
    "Heartburn that won't respond to treatment",
  ];

  const candidaSymptoms = [
    "Intense sugar & carb cravings",
    "White coating on tongue (thrush)",
    "Low-grade hangover feeling after eating carbs",
    "Skin issues: athlete's foot, toenail fungus, acne",
    "Frequent infections or slow recovery",
    "Brain fog that worsens after sweets",
  ];

  const sharedSymptoms = [
    "Bloating & digestive distress",
    "Brain fog & fatigue",
    "Multiple food sensitivities",
    "Relapse despite previous treatment",
  ];

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: offWhite, color: charcoal, overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&display=swap');
        .cg { font-family: 'Cormorant Garamond', serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lineGrow {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes pulse-soft {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .anim-1 { animation: fadeUp 0.7s 0.1s ease both; }
        .anim-2 { animation: fadeUp 0.7s 0.25s ease both; }
        .anim-3 { animation: fadeUp 0.7s 0.4s ease both; }
        .anim-4 { animation: fadeUp 0.7s 0.55s ease both; }
        .anim-5 { animation: fadeUp 0.7s 0.7s ease both; }
        .anim-fade { animation: fadeIn 1s 0.1s ease both; }

        .card-sibo {
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }
        .card-sibo:hover {
          transform: translateY(-6px);
          box-shadow: 0 32px 80px rgba(45,94,50,0.18), 0 8px 24px rgba(45,94,50,0.12);
        }
        .card-candida {
          transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          cursor: pointer;
        }
        .card-candida:hover {
          transform: translateY(-6px);
          box-shadow: 0 32px 80px rgba(139,79,18,0.18), 0 8px 24px rgba(139,79,18,0.12);
        }

        .btn-sibo {
          transition: all 0.2s ease;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
          text-decoration: none;
        }
        .btn-sibo:hover {
          background: ${siboDark} !important;
          transform: translateY(-1px);
        }
        .btn-candida {
          transition: all 0.2s ease;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
          text-decoration: none;
        }
        .btn-candida:hover {
          background: #6B3A0D !important;
          transform: translateY(-1px);
        }

        .divider-line {
          animation: lineGrow 1s 0.8s ease both;
          transform-origin: left;
        }

        .symptom-row {
          transition: all 0.15s ease;
        }
        .symptom-row:hover {
          opacity: 1 !important;
        }

        .shared-badge {
          animation: pulse-soft 3s ease-in-out infinite;
        }

        .nav-link {
          transition: color 0.15s ease;
          text-decoration: none;
          color: rgba(30,30,30,0.5);
          font-size: 13px;
          font-weight: 500;
        }
        .nav-link:hover { color: rgba(30,30,30,0.9); }

        .quiz-option {
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .quiz-option:hover {
          transform: translateX(4px);
        }

        @media (max-width: 767px) {
          .card-sibo:hover, .card-candida:hover {
            transform: none;
          }
          .hero-grid { grid-template-columns: 1fr !important; }
          .cards-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
          .cards-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(253,250,246,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(30,30,30,0.08)" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: "0 clamp(16px, 4vw, 48px)",
        height: 64, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        <div className="cg" style={{ fontSize: "clamp(13px,2vw,16px)", fontWeight: 700, letterSpacing: "0.12em", color: charcoal }}>
          Gut Healing Protocols
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          <a href="#quiz" className="nav-link">Find My Protocol</a>
          <a href="/sibo" className="nav-link">SIBO</a>
          <a href="/candida" className="nav-link">Candida</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        background: cream, minHeight: "100svh",
        display: "flex", flexDirection: "column", justifyContent: "center",
        padding: "88px clamp(16px,5vw,72px) 64px",
        position: "relative", overflow: "hidden",
      }}>
        {/* Decorative orbs */}
        <div style={{ position: "absolute", top: -120, right: -80, width: 480, height: 480, borderRadius: "50%", background: `radial-gradient(circle, rgba(77,122,82,0.09) 0%, transparent 70%)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, left: -60, width: 360, height: 360, borderRadius: "50%", background: `radial-gradient(circle, rgba(201,123,42,0.08) 0%, transparent 70%)`, pointerEvents: "none" }} />
        {/* Thin vertical rule */}
        <div style={{ position: "absolute", top: 0, left: "50%", width: 1, height: "100%", background: "linear-gradient(to bottom, transparent, rgba(30,30,30,0.06) 30%, rgba(30,30,30,0.06) 70%, transparent)", pointerEvents: "none" }} className="hidden md:block" />

        <div style={{ maxWidth: 960, margin: "0 auto", width: "100%", position: "relative" }}>

          {/* Eyebrow */}
          <div className="anim-1" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ display: "inline-block", width: 32, height: 1, background: charcoal, opacity: 0.3 }} />
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: charcoal, opacity: 0.45 }}>Two Protocols. One Decision.</span>
          </div>

          {/* Headline */}
          <h1 className="cg anim-2" style={{
            fontSize: "clamp(38px, 7vw, 84px)",
            fontWeight: 700, lineHeight: 1.04,
            color: charcoal, marginBottom: 28,
            maxWidth: 820,
          }}>
            Your gut has been trying<br />
            to tell you something.<br />
            <em style={{ color: "rgba(30,30,30,0.32)", fontWeight: 400 }}>Are you ready to listen?</em>
          </h1>

          {/* Sub */}
          <p className="anim-3" style={{ fontSize: "clamp(15px,2vw,18px)", lineHeight: 1.75, color: "rgba(30,30,30,0.58)", maxWidth: 560, marginBottom: 44 }}>
            Whether your digestive suffering is rooted in bacterial overgrowth (SIBO) or fungal imbalance (Candida), there&apos;s a precise, phased path to recovery. Choose the protocol built for your root cause.
          </p>

          {/* Two CTA buttons */}
          <div className="anim-4" style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <a href="/sibo" className="btn-sibo" style={{
              background: siboColor, color: "white",
              padding: "14px 32px", borderRadius: 3, fontSize: "clamp(11px,1.5vw,13px)",
              display: "inline-block",
            }}>
              I Have SIBO Symptoms →
            </a>
            <a href="/candida" className="btn-candida" style={{
              background: candidaColor, color: "white",
              padding: "14px 32px", borderRadius: 3, fontSize: "clamp(11px,1.5vw,13px)",
              display: "inline-block",
            }}>
              I Have Candida Symptoms →
            </a>
            <a href="#quiz" style={{
              color: charcoal, fontSize: "clamp(11px,1.5vw,13px)",
              padding: "14px 0", textDecoration: "underline", textUnderlineOffset: 5,
              opacity: 0.5, fontWeight: 500, letterSpacing: "0.04em",
              transition: "opacity 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
              onMouseLeave={e => e.currentTarget.style.opacity = "0.5"}
            >
              Not sure? Take the quick quiz ↓
            </a>
          </div>

          {/* Trust bar */}
          <div className="anim-5" style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 52, paddingTop: 32, borderTop: "1px solid rgba(30,30,30,0.08)", flexWrap: "wrap" }}>
            {[
              { label: "Protocols", val: "2" },
              { label: "Phases per protocol", val: "3–4" },
              { label: "Instant PDF access", val: "✓" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <span className="cg" style={{ fontSize: "clamp(18px,2.5vw,24px)", fontWeight: 700, color: charcoal, lineHeight: 1 }}>{item.val}</span>
                <span style={{ fontSize: 11, color: "rgba(30,30,30,0.42)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SHARED SYMPTOMS BANNER ── */}
      <section style={{ background: charcoal, padding: "48px clamp(16px,5vw,72px)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
            <div style={{ flex: "0 0 auto" }}>
              <span className="shared-badge" style={{
                display: "inline-block", background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)", color: "white",
                fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
                padding: "5px 12px", borderRadius: 2,
              }}>Overlap Zone</span>
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <p className="cg" style={{ fontSize: "clamp(16px,2.5vw,22px)", color: "rgba(255,255,255,0.65)", fontStyle: "italic", lineHeight: 1.5, marginBottom: 20 }}>
                Many symptoms appear in both conditions. This is why correct identification matters — and why this page exists.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {sharedSymptoms.map((s, i) => (
                  <span key={i} style={{
                    fontSize: 12, fontWeight: 500, padding: "6px 14px",
                    borderRadius: 2, border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.5)",
                  }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROTOCOL CARDS ── */}
      <section style={{ padding: "80px clamp(16px,5vw,72px)", background: offWhite }} id="protocols">
        <div style={{ maxWidth: 1060, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(30,30,30,0.35)", marginBottom: 12 }}>Choose Your Path</p>
            <h2 className="cg" style={{ fontSize: "clamp(26px,4.5vw,56px)", fontWeight: 700, color: charcoal, lineHeight: 1.1 }}>
              Two conditions.<br />Two complete protocols.
            </h2>
          </div>

          {/* Cards */}
          <div className="cards-grid" style={{ display: "grid", gap: 24, gridTemplateColumns: "1fr" }}>

            {/* ── SIBO CARD ── */}
            <div id="sibo" className="card-sibo" style={{
              background: "white", borderRadius: 4,
              border: `2px solid ${hoveredCard === "sibo" ? siboColor : "rgba(77,122,82,0.18)"}`,
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            }}
              onMouseEnter={() => setHoveredCard("sibo")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card top bar */}
              <div style={{ background: `linear-gradient(135deg, ${siboColor} 0%, ${siboDark} 100%)`, padding: "32px 36px 28px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>Protocol 01</div>
                    <div className="cg" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "white", lineHeight: 1.05, marginBottom: 8 }}>
                      SIBO<br /><em style={{ color: siboLight }}>Healing</em> Protocol
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>Small Intestinal Bacterial Overgrowth</div>
                  </div>
                  <div style={{ fontSize: 48, opacity: 0.2 }}>🌿</div>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "32px 36px" }}>
                <p style={{ fontSize: "clamp(13px,1.8vw,15px)", lineHeight: 1.75, color: "rgba(30,30,30,0.6)", marginBottom: 28 }}>
                  Bacteria that should live in your colon have migrated into your small intestine, fermenting food and producing excess gas. This 3-phase protocol addresses every root cause — from MMC dysfunction to biofilms — and gives you a pattern-matched antimicrobial strategy based on your gas type.
                </p>

                {/* Key symptoms */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: siboColor, marginBottom: 14 }}>Common Symptoms</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 8 }}>
                    {siboSymptoms.map((s, i) => (
                      <div key={i} className="symptom-row" style={{ display: "flex", alignItems: "flex-start", gap: 10, opacity: 0.75 }}>
                        <span style={{ color: siboColor, fontSize: 12, marginTop: 2, flexShrink: 0 }}>→</span>
                        <span style={{ fontSize: 13, color: charcoal, lineHeight: 1.45 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase pills */}
                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: siboColor, marginBottom: 12 }}>What's Inside</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["Phase 1: Foundation (6 wks)", "Phase 2: Antimicrobials (8 wks)", "Phase 3: Rebuild (4+ wks)", "Gas pattern matching", "Full dosing tables", "Biofilm protocol", "71 pages"].map(t => (
                      <span key={t} style={{ background: siboMuted, color: siboColor, fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", padding: "4px 10px", borderRadius: 2 }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Price + CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", paddingTop: 24, borderTop: "1px solid rgba(77,122,82,0.12)" }}>
                  <div>
                    <div style={{ fontSize: 12, color: "rgba(30,30,30,0.35)", textDecoration: "line-through", marginBottom: 2 }}>$79</div>
                    <div className="cg" style={{ fontSize: "clamp(32px,4vw,44px)", fontWeight: 700, color: charcoal, lineHeight: 1 }}>$34</div>
                    <div style={{ fontSize: 11, color: "rgba(30,30,30,0.4)", marginTop: 4 }}>One-time · Instant PDF</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <a href="/sibo" className="btn-sibo" style={{
                      display: "block", textAlign: "center",
                      background: siboColor, color: "white",
                      padding: "15px 24px", borderRadius: 3,
                      fontSize: "clamp(11px,1.5vw,13px)",
                    }}>
                      Get the SIBO Protocol →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CANDIDA CARD ── */}
            <div id="candida" className="card-candida" style={{
              background: "white", borderRadius: 4,
              border: `2px solid ${hoveredCard === "candida" ? candidaColor : "rgba(201,123,42,0.2)"}`,
              overflow: "hidden",
              boxShadow: "0 4px 24px rgba(0,0,0,0.05)",
            }}
              onMouseEnter={() => setHoveredCard("candida")}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card top bar */}
              <div style={{ background: `linear-gradient(135deg, ${candidaMid} 0%, ${candidaColor} 100%)`, padding: "32px 36px 28px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 8 }}>Protocol 02</div>
                    <div className="cg" style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 700, color: "white", lineHeight: 1.05, marginBottom: 8 }}>
                      Candida<br /><em style={{ color: candidaLight }}>Recovery</em> Protocol
                    </div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 500 }}>Fungal Overgrowth & Terrain Restoration</div>
                  </div>
                  <div style={{ fontSize: 48, opacity: 0.2 }}>🌾</div>
                </div>
              </div>

              {/* Card body */}
              <div style={{ padding: "32px 36px" }}>
                <p style={{ fontSize: "clamp(13px,1.8vw,15px)", lineHeight: 1.75, color: "rgba(30,30,30,0.6)", marginBottom: 28 }}>
                  Candida yeast has switched into its invasive hyphal form, embedding into your gut lining and hiding behind biofilms. This 4-phase protocol fixes the terrain that allowed overgrowth in the first place — bile flow, stomach acid, immune regulation — then systematically eliminates the fungal burden for good.
                </p>

                {/* Key symptoms */}
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: candidaColor, marginBottom: 14 }}>Common Symptoms</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 8 }}>
                    {candidaSymptoms.map((s, i) => (
                      <div key={i} className="symptom-row" style={{ display: "flex", alignItems: "flex-start", gap: 10, opacity: 0.75 }}>
                        <span style={{ color: candidaColor, fontSize: 12, marginTop: 2, flexShrink: 0 }}>→</span>
                        <span style={{ fontSize: 13, color: charcoal, lineHeight: 1.45 }}>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Phase pills */}
                <div style={{ marginBottom: 32 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: candidaColor, marginBottom: 12 }}>What's Inside</div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["Phase 1: Foundation (4 wks)", "Phase 2: Elimination (8 wks)", "Phase 3: Repair (4–6 wks)", "Phase 4: Prevention", "Antifungal rotation", "Biofilm disruption", "Die-off management"].map(t => (
                      <span key={t} style={{ background: candidaMuted, color: candidaColor, fontSize: 11, fontWeight: 600, letterSpacing: "0.05em", padding: "4px 10px", borderRadius: 2 }}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Price + CTA */}
                <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", paddingTop: 24, borderTop: "1px solid rgba(201,123,42,0.12)" }}>
                  <div>
                    <div style={{ fontSize: 12, color: "rgba(30,30,30,0.35)", textDecoration: "line-through", marginBottom: 2 }}>$68</div>
                    <div className="cg" style={{ fontSize: "clamp(32px,4vw,44px)", fontWeight: 700, color: charcoal, lineHeight: 1 }}>$34</div>
                    <div style={{ fontSize: 11, color: "rgba(30,30,30,0.4)", marginTop: 4 }}>One-time · Instant PDF</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <a href="/candida" className="btn-candida" style={{
                      display: "block", textAlign: "center",
                      background: candidaColor, color: "white",
                      padding: "15px 24px", borderRadius: 3,
                      fontSize: "clamp(11px,1.5vw,13px)",
                    }}>
                      Get the Candida Protocol →
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Both bundle nudge */}
          <div style={{
            marginTop: 24, background: cream, border: "1px solid rgba(30,30,30,0.1)",
            borderRadius: 4, padding: "24px 32px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 20, flexWrap: "wrap",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{ fontSize: 24 }}>🔗</div>
              <div>
                <div className="cg" style={{ fontSize: "clamp(15px,2vw,20px)", fontWeight: 600, color: charcoal, marginBottom: 2 }}>Not sure which one? Many people have both.</div>
                <p style={{ fontSize: 13, color: "rgba(30,30,30,0.5)", lineHeight: 1.5 }}>SIBO and Candida frequently co-exist. Take the quiz below to identify your primary pattern first, then decide.</p>
              </div>
            </div>
            <a href="#quiz" style={{
              display: "inline-block", background: charcoal, color: "white",
              padding: "12px 28px", borderRadius: 3, fontSize: 12,
              fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase",
              textDecoration: "none", transition: "background 0.2s",
              whiteSpace: "nowrap",
            }}
              onMouseEnter={e => e.currentTarget.style.background = "#333"}
              onMouseLeave={e => e.currentTarget.style.background = charcoal}
            >Take the Quiz ↓</a>
          </div>
        </div>
      </section>

      {/* ── QUICK QUIZ ── */}
      <section id="quiz" style={{ background: charcoal, padding: "80px clamp(16px,5vw,72px)" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: 12 }}>Quick Identifier</div>
            <h2 className="cg" style={{ fontSize: "clamp(24px,4vw,52px)", fontWeight: 700, color: "white", lineHeight: 1.1, marginBottom: 16 }}>
              Which pattern fits you best?
            </h2>
            <p style={{ fontSize: "clamp(13px,1.8vw,16px)", color: "rgba(255,255,255,0.45)", lineHeight: 1.7 }}>
              Read through each cluster. The one that resonates most is your starting point.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* SIBO cluster */}
            <div className="quiz-option" style={{
              background: "rgba(77,122,82,0.08)", border: "1px solid rgba(77,122,82,0.22)",
              borderRadius: 4, padding: "28px 32px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: siboLight, flexShrink: 0 }} />
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: siboLight }}>Likely SIBO</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 10, marginBottom: 24 }}>
                {["Bloated 30–60 min after meals", "Constipation or diarrhea or both", "Symptoms worsen with garlic/onions/beans", "Belching and excessive gas", "Brain fog throughout the day", "Heartburn not responding to antacids"].map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: siboLight, marginTop: 2, fontSize: 11, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.45 }}>{s}</span>
                  </div>
                ))}
              </div>
              <a href="/sibo" className="btn-sibo" style={{
                display: "inline-block", background: siboColor, color: "white",
                padding: "12px 28px", borderRadius: 3, fontSize: "clamp(10px,1.5vw,12px)",
              }}>
                This is me → Get the SIBO Protocol
              </a>
            </div>

            {/* Candida cluster */}
            <div className="quiz-option" style={{
              background: "rgba(201,123,42,0.07)", border: "1px solid rgba(201,123,42,0.2)",
              borderRadius: 4, padding: "28px 32px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: candidaLight, flexShrink: 0 }} />
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: candidaLight }}>Likely Candida</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px,1fr))", gap: 10, marginBottom: 24 }}>
                {["Intense sugar & carb cravings", "White coating on tongue", "Brain fog after eating carbs/sweets", "Skin issues: fungal, acne, eczema", "Frequent infections or slow healing", "Antifungals helped but it came back"].map((s, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ color: candidaLight, marginTop: 2, fontSize: 11, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.45 }}>{s}</span>
                  </div>
                ))}
              </div>
              <a href="/candida" className="btn-candida" style={{
                display: "inline-block", background: candidaColor, color: "white",
                padding: "12px 28px", borderRadius: 3, fontSize: "clamp(10px,1.5vw,12px)",
              }}>
                This is me → Get the Candida Protocol
              </a>
            </div>

            {/* Both cluster */}
            <div className="quiz-option" style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 4, padding: "28px 32px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>Symptoms from both lists</div>
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginBottom: 20 }}>
                SIBO and Candida frequently co-exist — especially if you have a history of antibiotic use, multiple failed treatments, or both digestive and sugar-related symptoms. Start with the protocol that matches your <em>dominant</em> symptoms, then layer the second if needed.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/sibo" className="btn-sibo" style={{
                  display: "inline-block", background: "transparent",
                  border: `1px solid ${siboColor}`, color: siboLight,
                  padding: "11px 22px", borderRadius: 3, fontSize: "clamp(10px,1.5vw,12px)",
                }}>
                  Start with SIBO →
                </a>
                <a href="/candida" className="btn-candida" style={{
                  display: "inline-block", background: "transparent",
                  border: `1px solid ${candidaMid}`, color: candidaLight,
                  padding: "11px 22px", borderRadius: 3, fontSize: "clamp(10px,1.5vw,12px)",
                }}>
                  Start with Candida →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      {/* <section style={{ background: cream, padding: "80px clamp(16px,5vw,72px)" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <h2 className="cg" style={{ fontSize: "clamp(22px,3.5vw,46px)", fontWeight: 700, color: charcoal, marginBottom: 40, textAlign: "center" }}>
            How the protocols compare
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(12px,1.6vw,14px)" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "12px 16px", borderBottom: "2px solid rgba(30,30,30,0.1)", color: "rgba(30,30,30,0.4)", fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>Feature</th>
                  <th style={{ textAlign: "center", padding: "12px 16px", borderBottom: `2px solid ${siboColor}`, color: siboColor, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>🌿 SIBO Protocol</th>
                  <th style={{ textAlign: "center", padding: "12px 16px", borderBottom: `2px solid ${candidaMid}`, color: candidaColor, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>🌾 Candida Protocol</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Root cause targeted", "Bacterial overgrowth in small intestine", "Fungal overgrowth (terrain-driven)"],
                  ["Number of phases", "3 phases", "4 phases"],
                  ["Total duration", "~18+ weeks", "~14–18 weeks"],
                  ["Primary antimicrobials", "Berberine, Allicin, Neem, Black seed oil", "Berberine, Caprylic acid, Allicin, Monolaurin"],
                  ["Biofilm protocol", "✓ Included", "✓ Included"],
                  ["Die-off management", "✓ Full guide", "✓ Full guide"],
                  ["Probiotic restoration", "✓ Phased re-intro", "✓ Strain-by-strain"],
                  ["Motility/MMC restoration", "✓ Core focus", "Supporting role"],
                  ["Antifungal rotation", "—", "✓ 8-week rotation"],
                  ["Gut lining repair", "✓ Included", "✓ Included"],
                  ["Dosing & timing tables", "✓ Printable", "✓ Printable"],
                  ["Price", "$47", "$47"],
                ].map(([feat, sibo, cand], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "white" : "transparent" }}>
                    <td style={{ padding: "13px 16px", color: "rgba(30,30,30,0.5)", fontWeight: 500 }}>{feat}</td>
                    <td style={{ padding: "13px 16px", textAlign: "center", color: charcoal }}>{sibo}</td>
                    <td style={{ padding: "13px 16px", textAlign: "center", color: charcoal }}>{cand}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section> */}

      {/* ── FINAL DUAL CTA ── */}
      <section style={{ background: offWhite, padding: "80px clamp(16px,5vw,72px)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", textAlign: "center" }}>
          <h2 className="cg" style={{ fontSize: "clamp(24px,4vw,56px)", fontWeight: 700, color: charcoal, lineHeight: 1.1, marginBottom: 16 }}>
            Your path is waiting.<br /><em style={{ color: "rgba(30,30,30,0.3)", fontWeight: 400 }}>Choose your starting point.</em>
          </h2>
          <p style={{ fontSize: "clamp(13px,1.8vw,16px)", color: "rgba(30,30,30,0.5)", lineHeight: 1.75, maxWidth: 500, margin: "0 auto 48px" }}>
            Both protocols are one-time purchases with instant PDF download, yours to keep forever.
          </p>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            <div style={{ background: "white", border: "2px solid rgba(77,122,82,0.2)", borderRadius: 4, padding: "36px 40px", maxWidth: 340, flex: 1, minWidth: 260 }}>
              <div className="cg" style={{ fontSize: 32, fontWeight: 700, color: siboColor, marginBottom: 8 }}>SIBO Protocol</div>
              <p style={{ fontSize: 13, color: "rgba(30,30,30,0.5)", lineHeight: 1.6, marginBottom: 24 }}>For bacterial overgrowth. Gas, bloating, motility issues, food intolerances.</p>
              <div className="cg" style={{ fontSize: 40, fontWeight: 700, color: charcoal, marginBottom: 4 }}>$34</div>
              <div style={{ fontSize: 11, color: "rgba(30,30,30,0.35)", marginBottom: 24 }}>3 phases · 71 pages · Instant PDF</div>
              <a href="/sibo" className="btn-sibo" style={{
                display: "block", background: siboColor, color: "white",
                padding: "14px 20px", borderRadius: 3, fontSize: 12, textAlign: "center",
              }}>Get the SIBO Protocol →</a>
            </div>
            <div style={{ background: "white", border: "2px solid rgba(201,123,42,0.2)", borderRadius: 4, padding: "36px 40px", maxWidth: 340, flex: 1, minWidth: 260 }}>
              <div className="cg" style={{ fontSize: 32, fontWeight: 700, color: candidaColor, marginBottom: 8 }}>Candida Protocol</div>
              <p style={{ fontSize: 13, color: "rgba(30,30,30,0.5)", lineHeight: 1.6, marginBottom: 24 }}>For fungal overgrowth. Sugar cravings, white tongue, skin issues, relapse cycles.</p>
              <div className="cg" style={{ fontSize: 40, fontWeight: 700, color: charcoal, marginBottom: 4 }}>$34</div>
              <div style={{ fontSize: 11, color: "rgba(30,30,30,0.35)", marginBottom: 24 }}>4 phases · Complete system · Instant PDF</div>
              <a href="/candida" className="btn-candida" style={{
                display: "block", background: candidaColor, color: "white",
                padding: "14px 20px", borderRadius: 3, fontSize: 12, textAlign: "center",
              }}>Get the Candida Protocol →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#1A1A1A", padding: "24px clamp(16px,5vw,48px)" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div className="cg" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, letterSpacing: "0.08em" }}>Gut Healing Protocols</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
            <a href="/refund-policy" style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}
            >Refund Policy</a>
            <a href="mailto:biomeai01@gmail.com" style={{ color: "rgba(255,255,255,0.25)", fontSize: 12, textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.25)"}
            >Contact: biomeai01@gmail.com</a>
          </div>
        </div>
      </footer>
      <div style={{ background: "#141414", textAlign: "center", padding: "12px 16px", fontSize: 11, color: "rgba(255,255,255,0.18)", lineHeight: 1.6 }}>
        This page and its linked protocols are for educational purposes only and do not constitute medical advice. Always consult a qualified healthcare provider before making changes to your diet, supplement regimen, or health protocol. Individual results will vary.
      </div>
    </div>
  );
}
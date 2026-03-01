import React from "react";

export default function RefundPolicyPage() {
    const charcoal = "#1E1E1E";
    const offWhite = "#FDFAF6";
    const sage = "#4D7A52";

    return (
        <div style={{ fontFamily: "'DM Sans', sans-serif", background: offWhite, color: charcoal, minHeight: "100vh", padding: "80px 20px" }}>
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, marginBottom: "40px" }}>Refund Policy</h1>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px", color: sage }}>30-Day Money-Back Guarantee</h2>
                    <p style={{ lineHeight: 1.8, fontSize: "16px", marginBottom: "16px" }}>
                        We want you to feel confident in your journey towards gut health. That&apos;s why we offer a <strong>30-day money-back guarantee</strong> on all our digital protocols.
                    </p>
                    <p style={{ lineHeight: 1.8, fontSize: "16px", marginBottom: "16px" }}>
                        If you follow the protocol and feel it hasn&apos;t provided you with the value or guidance you expected, we will provide a full refund of your purchase price.
                    </p>
                </section>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px" }}>How to Request a Refund</h2>
                    <p style={{ lineHeight: 1.8, fontSize: "16px" }}>
                        To request a refund, simply send an email to <a href="mailto:biomeai01@gmail.com" style={{ color: sage, fontWeight: 600 }}>biomeai01@gmail.com</a> with your order details within 30 days of your purchase. No complicated forms or hoops to jump through.
                    </p>
                </section>

                <section style={{ marginBottom: "32px" }}>
                    <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "16px" }}>Digital Nature of the Product</h2>
                    <p style={{ lineHeight: 1.8, fontSize: "16px" }}>
                        As our products are digital downloads (PDF format), you will retain access to the files even after a refund is processed. We trust our community to use this policy fairly as they seek improvement in their digestive health.
                    </p>
                </section>

                <div style={{ marginTop: "60px", paddingTop: "20px", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
                    <a href="/" style={{ fontSize: "14px", color: charcoal, opacity: 0.6, textDecoration: "none" }}>← Back to Home</a>
                </div>
            </div>
        </div>
    );
}

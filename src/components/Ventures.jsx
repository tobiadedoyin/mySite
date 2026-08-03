import React from "react";

export default function Ventures() {
  return (
    <section id="ventures" className="ventures-section">
      <div className="container">
        <div className="ventures-header">
          <div className="section-label section-label--emerald">
            Technology Ventures
          </div>
          <h2 className="section-title">Engineering Applied to Ownership</h2>
          <p className="section-subtitle">
            Beyond client work, I co-found and build technology companies.
            These ventures demonstrate commercial thinking, product leadership,
            and the application of engineering capability to real markets.
          </p>
        </div>

        <div className="ventures-grid">
          {/* Bemfot Haven Trust */}
          <div className="venture-card venture-haven">
            <div className="venture-logo">🏛️</div>
            <div className="venture-role">Co-Founder & Technology Lead</div>
            <h3 className="venture-name">Bemfot Haven Trust</h3>
            <p className="venture-tagline">
              Technology-powered real estate trust &amp; property management for modern investors
            </p>
            <p className="venture-description">
              Haven Trust bridges the gap between real estate investment and technology,
              providing a digital platform for property acquisition, trust management,
              rental income disbursement, and investor reporting — making real estate
              accessible and transparent for a new generation of Nigerian investors.
            </p>
            <div className="venture-pillars">
              <div className="venture-pillar">
                <div className="venture-pillar-dot" />
                Property acquisition & trust management platform
              </div>
              <div className="venture-pillar">
                <div className="venture-pillar-dot" />
                Automated rent collection & investor disbursement
              </div>
              <div className="venture-pillar">
                <div className="venture-pillar-dot" />
                Digital KYC, compliance & investor onboarding
              </div>
              <div className="venture-pillar">
                <div className="venture-pillar-dot" />
                Multi-tenant SaaS model for estate managers
              </div>
            </div>
            <div className="venture-footer">
              <span className="venture-status">🔵 Active — Building</span>
              <a
                href="mailto:oladeletobiadedoyin@gmail.com"
                className="btn btn-outline"
                style={{ fontSize: "0.78rem", padding: "0.5rem 1rem" }}
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Bemfot Agrotech */}
          <div className="venture-card venture-agro">
            <div className="venture-logo">🌾</div>
            <div className="venture-role">Co-Founder & Technology Lead</div>
            <h3 className="venture-name">Bemfot Agrotech</h3>
            <p className="venture-tagline">
              Digital infrastructure for agricultural value chains in sub-Saharan Africa
            </p>
            <p className="venture-description">
              Agrotech digitises the agricultural supply chain — connecting farmers,
              aggregators, processors, and buyers through a unified platform. The
              technology layer enables farm input financing, produce tracking,
              market price discovery, and payment settlement for agri-businesses
              operating across Nigeria.
            </p>
            <div className="venture-pillars">
              <div className="venture-pillar">
                <div className="venture-pillar-dot" />
                Farm-to-market supply chain platform
              </div>
              <div className="venture-pillar">
                <div className="venture-pillar-dot" />
                Agri-input financing & payment infrastructure
              </div>
              <div className="venture-pillar">
                <div className="venture-pillar-dot" />
                Produce tracking & quality verification
              </div>
              <div className="venture-pillar">
                <div className="venture-pillar-dot" />
                Buyer-seller marketplace with escrow settlement
              </div>
            </div>
            <div className="venture-footer">
              <span className="venture-status">🟢 Active — Building</span>
              <a
                href="mailto:oladeletobiadedoyin@gmail.com"
                className="btn btn-outline"
                style={{ fontSize: "0.78rem", padding: "0.5rem 1rem" }}
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>

        {/* Founder narrative footer */}
        <div
          style={{
            marginTop: "3rem",
            padding: "1.75rem 2rem",
            borderRadius: "var(--radius-md)",
            background: "var(--bg-card)",
            border: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <div
            style={{
              fontSize: "1.75rem",
              flexShrink: 0,
              width: "3rem",
              textAlign: "center",
            }}
          >
            💡
          </div>
          <div>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                lineHeight: 1.8,
              }}
            >
              <strong style={{ color: "var(--text-primary)" }}>
                The Bemfot thesis:
              </strong>{" "}
              Apply rigorous engineering to markets that are large, underserved, and
              resistant to change — real estate and agriculture in Nigeria. Each venture
              is built on the same platform infrastructure I design as an engineer,
              making the feedback loop between product and technology direct and fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

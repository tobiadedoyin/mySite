import React, { useState } from "react";

const caseStudies = [
  {
    number: "01",
    title: "Digital Banking Platform",
    tagline: "Core banking infrastructure for a fintech serving SMEs",
    tags: ["Fintech", "Core Banking", "API Design", "Multi-tenant"],
    problem:
      "A fintech needed to launch a digital banking product for SMEs — requiring account management, ledger operations, transaction history, and compliance workflows. The existing legacy system couldn't support real-time operations or API-first architecture.",
    architecture:
      "Designed a modular monolith with clearly separated domains: accounts, ledger, transactions, compliance, and notifications. Used event sourcing for the transaction ledger to enable full auditability and replay capability.",
    decisions:
      "Chose a modular monolith over microservices to reduce operational complexity at early scale. Implemented double-entry bookkeeping at the database level with PostgreSQL constraints to guarantee ledger integrity. Used database-level row-level security for data isolation.",
    tech: ["NestJS", "PostgreSQL", "Prisma", "Redis", "Docker", "AWS EC2", "TypeScript"],
    outcome:
      "Delivered the core banking API foundation with distinct account, ledger, transaction, compliance, and notification domains. The design prioritised ledger integrity, traceability, and operational auditability.",
  },
  {
    number: "02",
    title: "Payment Routing Infrastructure",
    tagline: "Multi-provider payment orchestration with intelligent failover",
    tags: ["Payments", "Routing", "Failover", "Webhooks"],
    problem:
      "Financial services clients needed reliable payment processing across multiple Nigerian gateways (Paystack, Flutterwave, Interswitch) with automatic failover when a provider experienced downtime — without user-facing errors.",
    architecture:
      "Built a payment orchestration layer that abstracts provider differences behind a unified interface. Each provider is a pluggable adapter. A routing engine evaluates provider health, success rates, and transaction type to select the optimal gateway per request.",
    decisions:
      "Implemented circuit breakers per provider to avoid hammering failing gateways. Webhook verification and idempotency keys prevent duplicate processing. A reconciliation job runs hourly to detect and flag mismatched states between our ledger and provider records.",
    tech: ["Node.js", "TypeScript", "Paystack", "Flutterwave", "ISW", "Bull", "Redis", "PostgreSQL"],
    outcome:
      "Delivered a unified payment orchestration layer with provider adapters, health-aware routing, circuit breakers, idempotent webhook handling, and reconciliation workflows.",
  },
  {
    number: "03",
    title: "POS & Terminal Management System",
    tagline: "Fleet management for physical payment terminals at scale",
    tags: ["POS", "Terminal", "Device Management", "Real-time"],
    problem:
      "A payment company managing thousands of physical POS terminals needed a platform to monitor terminal health, push firmware updates, assign merchants, track transactions per terminal, and handle settlement reporting — all in real-time.",
    architecture:
      "Built a terminal management platform with a persistent connection layer using Server-Sent Events for real-time terminal status. Each terminal registers on boot and maintains a heartbeat. Backend maintains a state machine per terminal lifecycle.",
    decisions:
      "Used SSE over WebSockets for better proxy compatibility in the field. Implemented command queuing for terminals that go offline, with retry on reconnection. Terminal transaction data flows through an async pipeline to avoid blocking the primary connection.",
    tech: ["NestJS", "SSE", "PostgreSQL", "Redis", "Bull", "TypeScript", "AWS", "Nginx"],
    outcome:
      "Delivered terminal lifecycle monitoring, offline command queuing, retry-on-reconnection behaviour, asynchronous transaction processing, and automated settlement reporting.",
  },
  {
    number: "04",
    title: "Multi-Tenant Property Management SaaS",
    tagline: "End-to-end SaaS platform for estate and property businesses",
    tags: ["SaaS", "Multi-Tenant", "RBAC", "Subscription Billing"],
    problem:
      "Property management businesses were managing tenants, rent collection, maintenance tickets, and financial records across spreadsheets. They needed a platform that could support multiple independent property businesses on shared infrastructure without data bleed.",
    architecture:
      "Designed a schema-based multi-tenancy model with PostgreSQL row-level security. Each organisation gets isolated data with shared infrastructure. A subscription and billing engine controls feature access per tier. Role-based access control governs 6 user roles within each organisation.",
    decisions:
      "Chose schema-based over database-per-tenant to balance isolation and operational cost. Implemented soft deletes with audit logs for all tenant data changes. Background jobs for rent reminders, arrears detection, and financial report generation run per-tenant with priority queuing.",
    tech: ["NestJS", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Paystack", "AWS S3", "TypeScript"],
    outcome:
      "Delivered a multi-tenant property management foundation covering organisation-level data isolation, role-based access, subscription controls, rent reminders, arrears workflows, and scheduled financial reporting.",
  },
  {
    number: "05",
    title: "Bemfot Technology Platforms",
    tagline: "Internal platforms powering the Bemfot venture portfolio",
    tags: ["Platform Engineering", "Internal Tools", "Venture Tech"],
    problem:
      "The Bemfot group of ventures — spanning real estate trust and agricultural technology — needed shared technology infrastructure: identity, billing, notifications, file storage, and reporting, without rebuilding these primitives per product.",
    architecture:
      "Designed a shared platform services layer consumed by each venture. Common services include: authentication & authorization (JWT + refresh tokens), file management (S3-backed), notification delivery (email, SMS, push), and subscription billing. Each venture's core domain is independently deployed.",
    decisions:
      "Designed platform services as internal APIs with versioned contracts so ventures can evolve independently. Centralised observability with structured logging allows cross-product debugging. Chose NestJS modules for consistent patterns across all services in the group.",
    tech: ["NestJS", "TypeScript", "PostgreSQL", "AWS S3", "Redis", "Docker", "Paystack", "Firebase"],
    outcome:
      "Established reusable platform services for authentication, file management, notifications, and billing, allowing venture products to consume shared capabilities through internal APIs.",
  },
];

export default function CaseStudies() {
  const [openId, setOpenId] = useState(null);

  const toggle = (num) => {
    setOpenId((prev) => (prev === num ? null : num));
  };

  return (
    <section id="work">
      <div className="container">
        <div className="case-studies-header">
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">Engineering Case Studies</h2>
          <p className="section-subtitle">
            Selected engineering work, documented through the problems addressed,
            architectural decisions, technologies, and delivered capabilities.
            Quantified performance claims are intentionally omitted where
            independently verifiable evidence is not published.
          </p>
        </div>

        <div className="case-studies-list">
          {caseStudies.map((cs) => (
            <div
              key={cs.number}
              className={`glass-card case-study-card ${openId === cs.number ? "open" : ""}`}
            >
              <div
                className="case-study-header"
                onClick={() => toggle(cs.number)}
              >
                <div>
                  <div className="case-study-number">Case Study {cs.number}</div>
                  <h3 className="case-study-title">{cs.title}</h3>
                  <p className="case-study-tagline">{cs.tagline}</p>
                  <div className="case-study-tags">
                    {cs.tags.map((t) => (
                      <span key={t} className="cs-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="case-study-toggle">+</div>
              </div>

              <div className="case-study-body">
                <div className="case-study-content">
                  <div>
                    <div className="cs-section-label">Problem</div>
                    <p className="cs-section-text">{cs.problem}</p>
                  </div>
                  <div>
                    <div className="cs-section-label">Architecture</div>
                    <p className="cs-section-text">{cs.architecture}</p>
                  </div>
                  <div>
                    <div className="cs-section-label">Engineering Decisions</div>
                    <p className="cs-section-text">{cs.decisions}</p>
                  </div>
                  <div>
                    <div className="cs-section-label">Technology Stack</div>
                    <div className="cs-tech-stack">
                      {cs.tech.map((t) => (
                        <span key={t} className="cs-tech-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="cs-outcome">
                    <div className="cs-section-label">Outcome</div>
                    <p className="cs-section-text">{cs.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

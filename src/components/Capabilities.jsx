import React from "react";

const capabilities = [
  {
    icon: "⚙️",
    name: "Backend Architecture",
    desc: "Designing fault-tolerant, scalable backend systems for high-throughput environments. API design, service decomposition, and resilience patterns.",
    techs: ["Node.js", "NestJS", "TypeScript", "REST", "GraphQL"],
  },
  {
    icon: "🏦",
    name: "Financial Systems",
    desc: "Building transaction-intensive platforms with strict consistency, audit trails, regulatory compliance, and real-time reconciliation capabilities.",
    techs: ["Ledger Design", "ACID Transactions", "Audit Trails", "KYC/AML"],
  },
  {
    icon: "💳",
    name: "Payment Infrastructure",
    desc: "End-to-end payment routing, gateway integrations, POS/terminal management, and multi-provider orchestration with fallback logic.",
    techs: ["Paystack", "Flutterwave", "POS Terminals", "Webhooks", "ISW"],
  },
  {
    icon: "🔄",
    name: "Distributed Systems",
    desc: "Architecting event-driven microservices, message queues, background job processing, and cross-service consistency patterns.",
    techs: ["Message Queues", "Event-Driven", "Redis", "Bull/BullMQ", "Kafka"],
  },
  {
    icon: "☁️",
    name: "Cloud & DevOps",
    desc: "Infrastructure as code, containerisation, CI/CD pipelines, cloud deployments, and production observability at scale.",
    techs: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Nginx"],
  },
  {
    icon: "🏢",
    name: "Multi-Tenant SaaS",
    desc: "Building isolated, scalable multi-tenant platforms with per-tenant configuration, billing, resource management, and role-based access control.",
    techs: ["Multi-Tenancy", "RBAC", "Prisma", "PostgreSQL", "Subscriptions"],
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities">
      <div className="container">
        <div className="capabilities-header">
          <div className="section-label">Engineering Capabilities</div>
          <h2 className="section-title">Where I Engineer at Depth</h2>
          <p className="section-subtitle">
            Six domains where I bring architectural thinking, not just
            implementation — built through years of shipping financial
            infrastructure and enterprise platforms.
          </p>
        </div>

        <div className="capabilities-grid">
          {capabilities.map((cap, i) => (
            <article key={i} className="glass-card capability-card">
              <div className="capability-icon">{cap.icon}</div>
              <h3 className="capability-name">{cap.name}</h3>
              <p className="capability-desc">{cap.desc}</p>
              <div className="capability-techs">
                {cap.techs.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

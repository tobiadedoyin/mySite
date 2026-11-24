import React from "react";

const workstreams = [
  {
    title: "Consent and community agency",
    description:
      "Explore ways for people and participating communities to understand, express, review, and withdraw permission for specific uses of sensitive data."
  },
  {
    title: "Purpose-bound access",
    description:
      "Explore transparent access rules that make clear who may use data, for what purpose, under which conditions, and for how long."
  },
  {
    title: "Privacy and accountability",
    description:
      "Investigate privacy-preserving data practices and auditable records of access and governance decisions, without assuming that an audit log alone guarantees responsible use."
  },
  {
    title: "Community-centred governance",
    description:
      "Study how people with lived experience, community organisations, and relevant practitioners could participate meaningfully in setting and reviewing data-governance rules."
  }
];

export default function OpenMinds() {
  return (
    <section id="openminds">
      <div className="container">
        <div className="section-label">Public-interest technology · Early-stage concept</div>
        <h2 className="section-title">OpenMinds</h2>
        <p className="section-subtitle">
          Exploring community-centred governance for sensitive mental-health data.
        </p>

        <div className="case-study-content">
          <div>
            <div className="cs-section-label">The problem space</div>
            <p className="cs-section-text">
              Mental-health information is deeply personal. When it is collected
              or shared across services, research, and support systems, people
              need meaningful ways to understand how it is used, who can access
              it, and what choices they have. OpenMinds starts from the question
              of how communities can have a stronger voice in those decisions.
            </p>
          </div>

          <div>
            <div className="cs-section-label">The proposed direction</div>
            <p className="cs-section-text">
              OpenMinds is an exploration of open-source tools and governance
              practices that could help communities define consent, access,
              accountability, and stewardship around sensitive mental-health
              data. It is not intended to replace clinical systems or make
              decisions about people’s care.
            </p>
          </div>

          <div>
            <div className="cs-section-label">Areas to investigate</div>
            <div className="case-studies-list">
              {workstreams.map((item) => (
                <div className="glass-card" key={item.title}>
                  <div className="cs-section-label">{item.title}</div>
                  <p className="cs-section-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="cs-section-label">Research and validation priorities</div>
            <p className="cs-section-text">
              The next step is to listen to people with lived experience,
              mental-health practitioners, community organisations, and data
              protection specialists. Their input should shape the problem
              definition, safeguards, governance model, and whether software is
              needed at all. No community participation, clinical validation,
              or institutional partnership is claimed at this stage.
            </p>
          </div>

          <div>
            <div className="cs-section-label">Current status</div>
            <p className="cs-section-text">
              Concept stage — scope, requirements, governance approach, and
              technical design remain to be validated. OpenMinds is not a
              deployed product, funded programme, or established partnership.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

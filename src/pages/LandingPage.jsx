import React from "react";

const navItems = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#232b2b", background: "#f8fafc" }}>
      {/* Navigation Bar */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1rem 2rem", background: "#fff", boxShadow: "0 1px 8px rgba(0,0,0,0.04)", position: "sticky", top: 0, zIndex: 100,
      }}>
        <div style={{fontWeight: 800, fontSize: "1.25rem", letterSpacing: "0.5px", color: "#1276e3"}}>
          Consultio
        </div>
        <ul style={{ display: "flex", listStyle: "none", gap: "2rem", margin: 0, padding: 0 }}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} style={{
                textDecoration: "none", color: "#232b2b", fontWeight: 500, transition: "color 0.2s",
              }}>{item.name}</a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          style={{
            padding: "0.5rem 1.2rem", background: "#1276e3", color: "#fff",
            borderRadius: "6px", fontWeight: 600, textDecoration: "none", marginLeft: "2rem"
          }}
        >
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <section style={{display: "flex", flexDirection: "column", minHeight: 420, alignItems: "center", justifyContent: "center", background: "linear-gradient(103deg, #dbeafe 50%, #fff 100%)", padding: "5rem 1rem 4rem 1rem", textAlign: "center"}}>
        <h1 style={{fontSize: "2.8rem", fontWeight: 700, margin: 0, color: "#181f2b", letterSpacing: "-1px"}}>
          Unlock Your Business Potential
        </h1>
        <p style={{fontSize: "1.2rem", color: "#4a5568", maxWidth: 540, margin: "1.5rem auto 2.2rem"}}>
          Strategic marketing & business consulting for modern organizations seeking growth and differentiation. Let us help craft your story and accelerate your results.
        </p>
        <a
          href="#contact"
          style={{
            padding: "0.9rem 2.5rem", background: "#1276e3", color: "#fff",
            borderRadius: "8px", fontWeight: 700, fontSize: "1.2rem", letterSpacing: "0.5px", textDecoration: "none", boxShadow: "0 2px 8px #1276e332",
          }}
        >
          Request a Free Consultation
        </a>
      </section>

      {/* Services Section */}
      <section id="services" style={{background: "#fff", margin: "0 auto", padding: "4rem 1rem", maxWidth: 1100}}>
        <h2 style={{fontSize: "2rem", fontWeight: 700, textAlign: "center", marginBottom: "2.5rem", color: "#1276e3"}}>
          Our Expertise
        </h2>
        <div style={{display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center"}}>
          <FeatureCard
            title="Marketing Strategy"
            desc="End-to-end brand development, messaging and omni-channel marketing plans tailored to your goals."
            icon="🔍"
          />
          <FeatureCard
            title="Business Consulting"
            desc="Process optimization, market research, and organizational growth services for startups to enterprises."
            icon="📈"
          />
          <FeatureCard
            title="Digital Transformation"
            desc="Website, social, and automation solutions to modernize your brand and maximize reach."
            icon="💡"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{background: "#f8fafc", maxWidth: 1100, margin: "0 auto", padding: "4rem 1rem"}}>
        <div style={{maxWidth: 765, margin: "0 auto", textAlign: "center"}}>
          <h2 style={{fontSize: "2rem", fontWeight: 700, color: "#181f2b"}}>Why Choose Consultio?</h2>
          <p style={{color: "#475569", margin: "1.2rem 0 0.8rem", fontSize: "1.09rem"}}>
            Our seasoned consultants have helped startups and Fortune 500s clarify their vision, build market relevance, and deliver key results.<br/>
            We believe in data-driven, creative solutions — all with a personal touch.
          </p>
        </div>
      </section>

      {/* Contact/Footer Section */}
      <footer id="contact" style={{ background: "#1276e3", color: "#fff", padding: "2.7rem 1rem 1rem", marginTop: "3rem"}}>
        <div style={{maxWidth: 1100, margin: "0 auto"}}>
          <h3 style={{fontWeight: 700, fontSize: "1.3rem"}}>Ready to Start?</h3>
          <p style={{color:"#e3eefa", margin:"0.5rem 0 1.3rem", maxWidth: 400}}>
            Contact us for a free strategy session and see how we can help your business stand out.
          </p>
          <a href="mailto:info@consultio.com" style={{
            display: "inline-block", padding: "0.6rem 1.5rem", background: "#fff",
            color: "#1276e3", borderRadius: "6px", fontWeight: 600, textDecoration: "none",
          }}>info@consultio.com</a>
          <div style={{marginTop: "2rem", fontSize: "0.93rem", color: "#c0dafc"}}>
            © {new Date().getFullYear()} Consultio Consulting. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div style={{
      background: "#f2f6fd", borderRadius: "10px", padding: "2rem", flex: "1 1 270px", minWidth: 260, maxWidth: 330,
      boxShadow: "0 2px 12px 0 rgba(18,118,227,0.03)", textAlign: "center",
    }}>
      <div style={{fontSize: "2.5rem", marginBottom: "1.1rem"}}>{icon}</div>
      <h3 style={{fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.8rem", color: "#181f2b"}}>{title}</h3>
      <p style={{color: "#475569", fontSize: "1.04rem"}}>{desc}</p>
    </div>
  );
}

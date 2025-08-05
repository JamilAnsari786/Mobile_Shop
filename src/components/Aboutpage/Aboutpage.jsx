import React from "react";
import "./Aboutpage.css";

const teamMembers = [
  {
    name: "Jamil Ansari",
    role: "Store Manager",
    image: "https://i.pravatar.cc/200?img=10",
  },
  {
    name: "Aarav Verma",
    role: "Technical Specialist",
    image: "https://i.pravatar.cc/200?img=11",
  },
  {
    name: "Pooja Nair",
    role: "Customer Support Lead",
    image: "https://i.pravatar.cc/200?img=12",
  },
];

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About AJ Mobile Shop</h1>
        <p>
          Welcome to AJ Mobile Shop – your trusted mobile store for top brands,
          expert service, and unbeatable value.
        </p>
      </section>

      {/* Mission & Services Section */}
      <section className="about-mission">
        <div className="mission-box">
          <h2>What We Offer</h2>
          <ul>
            <li>📱 Latest Smartphones from Top Brands</li>
            <li>🔧 On-Site Repair & Service Center</li>
            <li>💳 Easy EMI & Payment Options</li>
            <li>🎁 Exclusive Deals & Combo Offers</li>
          </ul>
        </div>

        <div className="mission-box">
          <h2>Why Shop With Us</h2>
          <p>
            With over 5 years in the mobile industry, we understand your tech
            needs. Our mission is to make mobile shopping simple, affordable,
            and trustworthy — whether you're buying a new device or getting your
            old one fixed.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-wrapper">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <div className="team-image-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

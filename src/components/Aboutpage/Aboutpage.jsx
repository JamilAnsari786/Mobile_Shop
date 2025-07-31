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

      {/* Services Section */}
      <section className="about-mission">
        <div>
          <h2>What We Offer</h2>
          <p>📱 Latest Smartphones from Top Brands</p>
          <p>🔧 On-Site Repair & Service Center</p>
          <p>💳 Easy EMI & Payment Options</p>
          <p>🎁 Exclusive Deals & Combo Offers</p>
        </div>
        <div>
          
          <h2>Why Shop With Us</h2>
          <p>
            With over 5 years in the mobile industry, we understand your tech needs.
            Our mission is to make mobile shopping simple, affordable, and trustworthy — whether you're buying a new device or getting your old one fixed.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.image} alt={member.name} />
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

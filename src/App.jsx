import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Jobs from "./Jobs";
import "./App.css";
import Footer from "./footer";

import wocoLogo from "./assets/woco-logo.png";
import fastlaneLogo from "./assets/fastlane-logo.png";
import bradyLogo from "./assets/brady-logo.png";
import dqLogo from "./assets/dq-logo.png";
import flwashLogo from "./assets/flwash-logo.png";
import HIELogo from "./assets/HIE-logo.png";
import wocoTransLogo from "./assets/woco-trans.png";
import HIES from "./assets/HIES.jpg";
import fastlaneStore from "./assets/fastlaneStore.jpg";

import fastlanePumps from "./assets/fastlane-pumps.jpg";
import wocoTruck from "./assets/woco-truck.jpg";
import bradyHotel from "./assets/bradyhotel.png";
import flwashBigLogo from "./assets/flwashlogo.jpg";
import HIEfrontdoor from "./assets/HIE-frontdoor.jpg";

import hiring from "./assets/hiring.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    { src: bradyHotel, alt: "Brady Hotel exterior" },
    { src: fastlanePumps, alt: "FastLane fuel pumps" },
    { src: flwashBigLogo, alt: "FastLane Wash branding" },
    { src: wocoTruck, alt: "WOCO fuel delivery truck" },
    { src: HIEfrontdoor, alt: "Holiday Inn Express entrance" },
    { src: HIES, alt: "Holiday Inn Express and Suites entrance" },
    { src: fastlaneStore, alt: "FastLane store entrance" },
    { src: fastlaneLogo, alt: "FastLane flag" },
    { src: dqLogo, alt: "Dairy Queen" },
  ];

  <div id="top"></div>

  const brands = [
    {
      img: HIELogo,
      name: "Holiday Inn Express",
      desc: "Smart, simple travel made easy with reliable comfort and convenience.",
      link: "https://holidayinnexpress.bookonline.com/hotel/holiday-inn-express-&-suites-kingdom-city?utm_source=woilco"
    },
    {
      img: fastlaneLogo,
      name: "FastLane",
      desc: "Convenience stores serving communities with quality fuel and retail.",
      link: "https://refuelyourday.com/"
    },
    {
      img: wocoTransLogo,
      name: "WOCO Transportation",
      desc: "Dependable transportation solutions focused on safety and service.",
      link: "https://www.woilco.com"
    },
    {
      img: bradyLogo,
      name: "Brady Hospitality",
      desc: "A luxurious stay designed for relaxation and productivity.",
      link: "https://www.bradyhotel.us"
    },
    {
      img: dqLogo,
      name: "Dairy Queen",
      desc: "Classic treats and crave-worthy eats served with DQ fun.",
      link: "https://www.dairyqueen.com/en-us/locations/mo/kingdom-city/3259-county-road-211/44781/"
    },
    {
      img: flwashLogo,
      name: "FastLane Wash",
      desc: "A modern car wash delivering a spotless shine every time.",
      link: "https://www.fastlanewash.com"
    }
  ];

  const BrandCard = ({ img, name, desc, link }) => (
    <div className="brand-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="brand-link">
        Learn More →
      </a>
    </div>
  );

  const BrandsPage = () => (
    <div className="section" style={{ marginTop: "100px" }}>
      <h1>Our Companies</h1>
      <div className="brands">
        {brands.map((brand, index) => (
          <BrandCard key={index} {...brand} />
        ))}
      </div>
    </div>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* NAV */}
      <nav className="nav">
        <Link to="/">
          <img src={wocoLogo} alt="WOCO Logo" className="nav-logo" />
        </Link>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/brands" onClick={() => setMenuOpen(false)}>Our Companies</Link>
          <Link to="/jobs" onClick={() => setMenuOpen(false)}>Jobs</Link>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span />
          <span />
          <span />
        </button>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* HERO */}
<section className="hero-grid">
  {heroImages.map((img, index) => (
    <div
      key={index}
      className="hero-tile"
      style={{ backgroundImage: `url(${img.src})` }}
    />
  ))}

  <div className="hero-grid-overlay">
    <h1>Warrenton Oil Company</h1>
    <p>
      Delivering energy solutions and operating the FastLane
      family of convenience stores across the region.
    </p>
  </div>
</section>

{/* BRANDS */}
<section className="section dark">
  <h2 className="brands-title">Our Companies</h2>
  <div className="brands">
    {brands.map((brand, index) => (
      <BrandCard key={index} {...brand} />
    ))}
  </div>
</section>

{/* JOIN OUR TEAM */}
<section className="hiring-section">
  <div className="hiring-wrapper">
    <h2>Join Our Team</h2>

<p className="hiring-text">
  Looking for a career where you can grow? Join us at Warrenton Oil Company (WOCO),
  where we offer a variety of opportunities to develop your skills, explore new
  challenges, and be part of a team that values what you bring to the table.
</p>

<Link to="/jobs" className="hiring-card">
  <img src={hiring} alt="We're hiring" className="hiring-img" />
</Link>

  </div>
</section>

          {/* FOOTER */}
          <Footer />

            </>
          }
        />

        
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/about" element={<About />} />
        <Route path="/brands" element={<BrandsPage />} />
      </Routes>
    </div>
  );
}



export default App;
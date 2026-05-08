
import Footer from "./footer";
import "./Jobs.css";
import wocoTruck from "./assets/woco-truck.jpg";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div>
    <div className="jobs-page">
      <div className="jobs-container">
        
        {/* LEFT SIDE */}
        <div className="jobs-left">
          <h1 className="jobs-title">
            Fuel your future with Warrenton Oil Company!
          </h1>

          <a
             href="https://www.paycomonline.net/v4/ats/web.php/portal/d0ddb53fd1ee537645c66d835e79db15/career-page"
            className="jobs-btn"
            target="_blank"
            rel="noopener noreferrer"
        >
    BROWSE OPENINGS
        </a>

          <p className="jobs-note">
            <strong>Note:</strong> To view our current (awesome) job opportunities
            you will move from woilco.com to our partner site, Paycom.
          </p>

          <h2 className="section-title">Meet WOCO</h2>
          <p>
            Searching for a fulfilling career? Join our dynamic team and set out
            on a path marked by enthusiasm and results-driven success. At
            Warrenton Oil Company (WOCO), we offer a diverse portfolio of
            exciting work opportunities that can fuel your professional
            development.
          </p>

          <h2 className="section-title">Our Story</h2>
          <p>
            Established in 1972, Warrenton Oil Company is a proud, family-owned
            business with a rich legacy of serving our community. Our ambition
            and rapid growth have set us apart in our industry, and we’re
            dedicated to delivering innovative solutions to meet our customers’
            evolving needs.
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="jobs-right">
          <img src={wocoTruck} alt="Truck" />
        </div>

      </div>
            {/* VIDEO + CTA SECTION */}
      <section className="jobs-hero">
        <div className="jobs-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/kEyEP29yLkQ?start=77"
            title="Join the FastLane team!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="jobs-info">
          <h2>Your path to success</h2>
          <p>
            With our presence in retail, hospitality, food service, and transportation
            industries, WOCO provides a broad spectrum of career possibilities. Whether
            you’re just starting your journey or seeking new horizons, you can find your
            perfect fit at WOCO.
          </p>

          <a
            href="https://www.paycomonline.net/v4/ats/web.php/portal/d0ddb53fd1ee537645c66d835e79db15/career-page"
            className="jobs-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            BROWSE OPENINGS
          </a>

          <p className="jobs-note">
            Note: To view our current (awesome) job opportunities you will move from
            woilco.com to our partner site, Paycom.
          </p>
        </div>
      </section>

      {/* WHY WOCO SECTION */}
      <section className="jobs-why">
        <h3>Why WOCO?</h3>
        <ul className="jobs-benefits">
          <li>Competitive compensation</li>
          <li>Weekly pay</li>
          <li>Discounts on merchandise, food, and fuel</li>
          <li>Comprehensive benefits package</li>
          <li>Ongoing training and development</li>
          <li>Supportive work environment</li>
          <li>Opportunities for advancement</li>
          <li>Employee rewards program</li>
          <li>And MORE!</li>
        </ul>
      </section>

      {/* SECONDARY CTA */}
<section className="jobs-secondary">
  <p>
    Visit our companies page to learn more about WOCO’s diverse portfolio of
    companies.
  </p>

  <Link to="/brands" className="jobs-btn secondary">
    Our Companies
  </Link>
</section>
    </div>
<Footer/>
    </div>
  
    
  );
};

export default Jobs;
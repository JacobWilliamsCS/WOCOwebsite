import { Link } from "react-router-dom";
import wocoLogoFooter from "./assets/woco-logo2.png"; // adjust path if needed

export default function Footer() {
  return (
    <footer className="footer">

      {/* TOP SECTION */}
      <div className="footer-top">

        {/* COMPANY */}
        <div className="footer-col">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src={wocoLogoFooter}
              alt="Warrenton Oil Company Logo"
              className="footer-logo-img"
            />
          </Link>

          <p className="footer-tagline">
            {/* Optional tagline here */}
          </p>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>(636) 456-3346</p>
          <p>
            <a href="mailto:info@woilco.com">info@woilco.com</a>
          </p>
          <p>2299 S Spoede Ln</p>
          <p>Truesdale, MO</p>
        </div>

        {/* MAP */}
        <div className="footer-col footer-map">
          <iframe
            title="WOCO Location"
            src="https://www.google.com/maps?q=2299+S+Spoede+Ln+Truesdale+MO&output=embed"
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="footer-divider" />

      {/* ADA NOTICE */}
      <div className="footer-ada">
        <p>
          Americans with Disabilities Notice: At Warrenton Oil Company, we believe usability
          and ADA compliance are essential. We are actively taking steps to improve the
          accessibility of our website to ensure a more inclusive experience for all users.
          We welcome your feedback on how we can make our website more accessible and
          user-friendly. If you experience any difficulty or have suggestions for improvement,
          please contact us at marketing@woilco.com or call us at (636) 456-3346.
          Thank you for your patience as we work toward these enhancements — please stay tuned
          for updates.
        </p>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Warrenton Oil Company</p>
      </div>

    </footer>
  );
}
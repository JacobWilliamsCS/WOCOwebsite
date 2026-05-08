import "./about.css";
import Footer from "./footer";

function About() {
  return (
    <>
      <div className="about-page">

        {/* HERO SECTION */}
        <section className="about-hero">
          <h1>Our Story</h1>
          <p>A Journey Through Time at Warrenton Oil Company</p>
        </section>

        {/* CONTENT SECTION */}
        <section className="about-content">

          <div className="about-block">
            <h2>A Journey Through Time</h2>
            <p>
              In 1972, R.G. and Betty Baker began an extraordinary journey founding
              First Capitol Oil in St. Charles, MO. Initially focusing on selling
              fuel oil and lubricants, their vision expanded. With dedication, they
              entered direct gasoline marketing, acquiring their first service station.
            </p>
          </div>

          <div className="about-block">
            <h2>A Union of Ambition</h2>
            <p>
              Fast forward to 1984, a pivotal year. R.G. and son Wayne seized the
              opportunity to buy Warrenton Oil Company, shaping our business.
              First Capitol Oil thrived as a Warrenton Oil Company division,
              opening the road to success.
            </p>
          </div>

          <div className="about-block">
            <h2>Westward Expansion</h2>
            <p>
              By 1993, we aimed west, acquiring Columbia operations of Davis Oil.
              The expansion journey began, ready for new challenges. Acquisitions
              and fresh startups became the norm, symbolizing our unwavering
              commitment to growth and service.
            </p>
          </div>

          <div className="about-block">
            <h2>A Family Legacy</h2>
            <p>
              Notably, all eight of R.G. and Betty’s children actively contributed
              to the company’s progress. Their shared dedication and hard work
              drove our evolution.
            </p>
          </div>

          <div className="about-block">
            <h2>The Future of WOCO</h2>
            <p>
              Today, Warrenton Oil Company is one of the fastest-growing oil
              companies in our region. Our family of businesses includes FastLane
              convenience stores, car and truck washes, restaurants, and hotels.
              FastLane embodies our pride and passion, reflecting our commitment
              to serving the community.
            </p>
          </div>

        </section>

      </div>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default About;
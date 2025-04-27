import "./Features.css";
import Navbar from "./Navbar";


const Features = () => {
  return (
    <>
    <Navbar />
    <div>     

      {/* Features Section */}
      <div className="features-section">
        <h2>Why Choose AgriRent?</h2>
        <p>
          At AgriRent, we aim to make modern agricultural equipment accessible and affordable for every farmer.
          Discover the benefits of renting top-notch machinery to simplify your farming operations.
        </p>
        <div className="features">
          {/* Feature 1 */}
          <div className="feature-item">
            <img src="/images/quality.jpg" alt="High-Quality Equipment" className="feature-image" />
            <h3>High-Quality Equipment</h3>
            <p>
              We provide well-maintained and high-performance machines to ensure smooth and efficient farming operations.
              All equipment is regularly inspected and serviced.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-item">
            <img src="/images/flexibility.jpg" alt="Flexible Rentals" className="feature-image" />
            <h3>Flexible Rental Options</h3>
            <p>
              Whether you need equipment for a day, a week, or a season, we offer rental plans that fit your needs and budget.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-item">
            <img src="/images/support.jpg" alt="Expert Support" className="feature-image" />
            <h3>Expert Support</h3>
            <p>
              Our dedicated support team is available to assist you with setup, usage, and troubleshooting for all rented equipment.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-item">
            <img src="/images/eco-friendly.jpg" alt="Eco-Friendly Solutions" className="feature-image" />
            <h3>Eco-Friendly Solutions</h3>
            <p>
              AgriRent promotes sustainable farming with a range of eco-friendly machines that help reduce environmental impact.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="feature-item">
            <img src="/images/network.jpg" alt="Wide Network" className="feature-image" />
            <h3>Extensive Network</h3>
            <p>
              With a wide network of rental partners, we ensure timely delivery and availability of equipment in your region.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="feature-item">
            <img src="/images/insurance.jpg" alt="Insurance Options" className="feature-image" />
            <h3>Insurance Coverage</h3>
            <p>
              Opt for our insurance plans to safeguard your rental experience and cover unforeseen damages.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Features;

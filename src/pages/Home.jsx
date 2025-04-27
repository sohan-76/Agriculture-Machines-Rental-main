import Navbar from './Navbar';
import './Home.css';



const Home = () => (
  <>
  <Navbar />
  <div className="home-container">
    {/* Hero Section */}
    <div className="hero-section">
      
      <h1 className="fade-in">Welcome to AgriRent</h1>
      <img src="/images/logo1.png"></img>
      <p className="fade-in"><b>Your one-stop solution for renting agricultural machines.</b></p>
      <p className="fade-in"><b>We offer a wide range of machines to meet your farming needs, 
        from tractors to harvesters, all available at affordable prices. Rent with ease, 
        and get the job done faster!</b></p><br></br>
      <a href="/catalog" className="btn hover-effect fade-in">Explore Machines</a>
    </div>
    <br></br>
    {/* Features Section */}
    <div id="features" className="features-section">
      <h2>Why Choose AgriRent?</h2>
      <div className="features">
        <div className="feature-item fade-in">
          <img src="/images/quality.jpg" alt="Tractor" className="feature-image" />
          <h3>Affordable Rates</h3>
          <p>Rent high-quality agricultural machines at affordable rates.</p>
        </div>
        <div className="feature-item fade-in">
          <img src="/images/harvester.jpg" alt="Harvester" className="feature-image" />
          <h3>Easy Booking</h3>
          <p>Quick and easy online booking with flexible rental terms.</p>
        </div>
        <div className="feature-item fade-in">
          <img src="/images/sprayer.jpg" alt="Sprayer" className="feature-image" />
          <h3>Wide Range of Machines</h3>
          <p>Choose from a variety of machines for all your farming needs.</p>
        </div>
      </div>
    </div>
    <br></br>

    {/* Footer Section */}
    <div className="created-by-section">
    </div>
  </div>
  </>
);

export default Home;

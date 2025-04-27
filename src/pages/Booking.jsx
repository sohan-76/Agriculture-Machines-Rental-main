import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Booking.css";

const Booking = () => {
  const location = useLocation();
  const { machine, daysBooked, totalAmount } = location.state || {};

  const [userDetails, setUserDetails] = useState({
    name: "",
    contact: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking confirmed for ${userDetails.name}!\nMachine: ${machine.name}\nTotal Amount: Rs ${totalAmount}`
    );
     navigate("/catalog"); 
  };

  useEffect(() => {
    if (!machine) {
      alert("No machine selected for booking!");
    }
  }, [machine]);

  return (
    
    <div className="booking-page">
      <div className="booking-container">
        <div className="product-image">
          <img src={machine?.image} alt={machine?.name} />
        </div>

        <div className="booking-card">
          <h1 className="product-name">{machine?.name}</h1>
          <p className="product-description">{machine?.description}</p>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact">Contact</label>
              <input
                type="text"
                id="contact"
                name="contact"
                value={userDetails.contact}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={userDetails.address}
                onChange={handleChange}
                required
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="daysBooked">No. of Days</label>
              <input
                type="number"
                id="daysBooked"
                name="daysBooked"
                value={daysBooked}
                readOnly
                className="input-field read-only"
              />
            </div>

            <div className="form-group">
              <label htmlFor="totalAmount">Total Amount (Rs)</label>
              <input
                type="number"
                id="totalAmount"
                name="totalAmount"
                value={totalAmount}
                readOnly
                className="input-field read-only"
              />
            </div>

            <button type="submit" className="confirm-button">
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;

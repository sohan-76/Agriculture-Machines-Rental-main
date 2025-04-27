import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Catalog.css";
import Navbar from "./Navbar";

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [days, setDays] = useState({}); 

  const navigate = useNavigate(); 
  // Sample machine data
  const machines = [
    { id: 1, name: "Tractor", description: "High-power tractor for farming.", image: "/images/quality.jpg", dailyRent: 1000 },
    { id: 2, name: "Harvester", description: "Efficient harvester for crops.", image: "/images/harvester.jpg", dailyRent: 1500 },
    { id: 3, name: "Plough", description: "Durable plough for soil preparation.", image: "/images/plough.jpg", dailyRent: 600 },
    { id: 4, name: "Seeder", description: "Precision seeder for planting crops.", image: "/images/seeder.jpg", dailyRent: 800 },
    { id: 5, name: "Sprayer", description: "Advanced sprayer for pest control.", image: "/images/sprayer.jpg", dailyRent: 1200 },
    { id: 6, name: "Baler", description: "Reliable baler for compacting hay.", image: "/images/baler.jpg", dailyRent: 900 },
    { id: 7, name: "Rotavator", description: "Powerful rotavator for soil tilling.", image: "/images/rotavator.jpg", dailyRent: 1100 },
    { id: 8, name: "Combine Harvester", description: "Multifunctional combine harvester.", image: "/images/combine-harvester.jpg", dailyRent: 2000 },
    { id: 9, name: "Cultivator", description: "Efficient cultivator for soil aeration.", image: "/images/cultivator.jpg", dailyRent: 700 },
    { id: 10, name: "Disc Harrow", description: "Heavy-duty disc harrow for field preparation.", image: "/images/disc-harrow.jpg", dailyRent: 850 },
    { id: 11, name: "Loader", description: "Heavy loader for lifting materials.", image: "/images/loader.jpg", dailyRent: 1400 },
    { id: 12, name: "Excavator", description: "Powerful excavator for digging and construction.", image: "/images/excavator.jpg", dailyRent: 1800 },
    { id: 13, name: "Mower", description: "Efficient mower for cutting grass and crops.", image: "/images/mower.jpg", dailyRent: 750 },
    { id: 14, name: "Tiller", description: "Soil tiller for preparing fields for planting.", image: "/images/tiller.jpg", dailyRent: 950 },
    { id: 15, name: "Water Pump", description: "High-efficiency water pump for irrigation.", image: "/images/water-pump.jpg", dailyRent: 500 },
    { id: 16, name: "Post Hole Digger", description: "Machine for digging holes for fence posts.", image: "/images/post-hole-digger.jpg", dailyRent: 600 },
    { id: 17, name: "Forklift", description: "Heavy-duty forklift for lifting and moving materials.", image: "/images/forklift.jpg", dailyRent: 1300 },
    { id: 18, name: "Shredder", description: "Machine for shredding agricultural waste and debris.", image: "/images/shredder.jpg", dailyRent: 1100 },
  ];


  // Filter machines based on search query
  const filteredMachines = machines.filter((machine) =>
    machine.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle booking action
  const handleBook = (machine) => {
    const daysBooked = days[machine.id] || 1; // Default to 1 day if no input
    const totalAmount = machine.dailyRent * daysBooked;

    // Navigate to the Booking page and pass the machine details
    navigate("/booking", {
      state: {
        machine: machine,
        daysBooked: daysBooked,
        totalAmount: totalAmount,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="catalog-container">
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for a machine..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        {/* Display filtered machines */}
        <div className="machines-list">
          {filteredMachines.map((machine) => (
            <div key={machine.id} className="machine-item">
              <img src={machine.image} alt={machine.name} className="machine-image" />
              <h3>{machine.name}</h3>
              <p>{machine.description}</p>
              <p className="daily-rent">Daily Rent: Rs {machine.dailyRent}</p>
              <div className="days-container">
                <label htmlFor={`days-${machine.id}`} className="strong-label">No. of Days: </label>
                <input
                  id={`days-${machine.id}`}
                  type="number"
                  min="1"
                  value={days[machine.id] || ""}
                  onChange={(e) => setDays({ ...days, [machine.id]: parseInt(e.target.value, 10) })}
                  className="days-input"
                />
              </div>
              <button className="book-button" onClick={() => handleBook(machine)}>
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;

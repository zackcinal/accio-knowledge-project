import React, { useState, useEffect } from "react";
import axios from "axios";

function Staff() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(
          "https://hp-api.onrender.com/api/characters/staff"
        );
        setData(res.data);
        setFilteredData(res.data)
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);

    const filteredStaff = data.filter((staff) =>
      staff.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredData(filteredStaff);
  };

  return (
    <div className="staff">
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && (
        <div className="staff-info">
          <input
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Type to search for a specific staff..."
          />
          {filteredData.map((staff) => (
            <div key={staff.id} className="staff-in">
              <img src={staff.image} alt="staff image"/>
              <h2>{staff.name}</h2>
              <p><span className="student-span">House: </span>{staff.house}</p>
              <p><span className="student-span">Year of birth: </span>{staff.yearOfBirth}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Staff;

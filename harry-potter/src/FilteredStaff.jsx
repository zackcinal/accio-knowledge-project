import React, { useState, useEffect } from "react";
import axios from "axios";

function FilteredStaff() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [staffName, setStaffName] = useState("Minerva McGonagall");
  const [staff, setStaff] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(
          "https://hp-api.onrender.com/api/characters/staff"
        );
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  function handleChange(e) {
    setStaffName(e.target.value);

    const foundStaff = data.find((staffData) => {
      return staffData.name === e.target.value;
    });

    setStaff(foundStaff);
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading staff...</p>
      ) : error ? (
        <p>Error fetching staff: {error.message}</p>
      ) : (
        <form>
          {data.length === 0 ? (
            <p>No staff found</p>
          ) : (
            <div>
              <select value={staffName} onChange={handleChange}>
                {data.map((staff) => (
                  <option key={staff.id}>{staff.name}</option>
                ))}
              </select>
            </div>
          )}
        </form>
      )}
      {staff.name && (
        <div>
          <h1>{staff.name}</h1>
        </div>
      )}
    </div>
  );
}

export default FilteredStaff;

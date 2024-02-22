import React, { useState, useEffect } from "react";
import axios from "axios";

// Fetching Data with axios

function Students() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([])
  const [searchItem, setSearchItem] = useState("")
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(
          "https://hp-api.onrender.com/api/characters/students"
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

  //Mapping through all students

  const handleInputChange = (e) => {
    setSearchItem(e.target.value);

    const filteredStudents = data.filter((student) =>
      student.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setFilteredData(filteredStudents)
  };

  return (
    <div className="students">
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && (
        <div className="students-info">
          <input
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Type to search for a specific student..."
          />
          {filteredData.map((student) => (
            <div key={student.id} className="student">
              <img src={student.image} />
              <h2>{student.name}</h2>
              <h4>{student.alternate_names[0]}</h4>
              <p>House: {student.house}</p>
              <p>Ancestry: {student.ancestry}</p>
              <p>Wand Core: {student.wand.core}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Students;

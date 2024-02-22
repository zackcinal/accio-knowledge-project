import React, { useState, useEffect } from "react";
import axios from "axios";

function FilteredStudents() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [studentName, setStudentName] = useState("Harry Potter")
  const [student, setStudent] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(
          "https://hp-api.onrender.com/api/characters/students"
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

  function handleChange(e){
    setStudentName(e.target.value)

    const foundStudent = data.find((studentData) => {
      return studentData.name === e.target.value
    })

    setStudent(foundStudent) 
  }

  return (
    <div>
      {isLoading ? (
        <p>Loading students...</p>
      ) : error ? (
        <p>Error fetching students: {error.message}</p>
      ) : (
        <form>
          {data.length === 0 ? (
            <p>No students found</p>
          ) : (
            <div>
              <select value={studentName} onChange={handleChange}>
                {data.map((student) => (
                  <option key={student.id}>{student.name}</option>
                ))}
              </select>
            </div>
          )}
        </form>
      )}
      {
        student.name && (
          <div>
            <h1>{student.name}</h1>
          </div>
        )
      }
    </div>
  );
}

export default FilteredStudents;

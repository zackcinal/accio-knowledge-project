import React, { useState, useEffect } from "react";
import axios from "axios";

function Spells() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios(
          "https://hp-api.onrender.com/api/spells"
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

  return (
    <div className="spells">
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && (
        <div className="spells-info">
          {data.map((spell) => (
            <div key={spell.id} className="spell-in">
              <h2>{spell.name}🪄</h2>
              <h4>{spell.description}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Spells;

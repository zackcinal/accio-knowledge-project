import React from 'react';

const StudentsCard = ({ name, image, house }) => {
  return (
    <div className="card">
      {<img src={image} alt={`${name} avatar`} />}
      <h2>{name}</h2>
      {<p>House: {house}</p>}
    </div>
  );
};

export default StudentsCard;
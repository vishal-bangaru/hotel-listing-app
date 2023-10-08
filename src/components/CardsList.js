import React from 'react';
import Cards from './Cards';
import './CardsList.css'
const CardsList = ({ items}) => {
  


 
  
   
  return (
    <div className="card-container">
      {items.map((item, index) => (
        <Cards key={index} item={item} />
      ))}
    </div>
  );
};


export default CardsList;

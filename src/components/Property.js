import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Card ,Button} from 'react-bootstrap';
import Cards from './Cards';
import { useState } from 'react';
const Property = () => {
    const num=+(useParams().id)
    console.log(num)
    const totalData=useSelector(state=>state.hotel.totaldata)
    let item={}
    
    for (let city in totalData) {
       let cityFound=city;
       for(let hotel of totalData[cityFound])
       {
            if(hotel.id==num)
            {
              console.log(hotel)
              item=hotel
              break;
            }
       }
    }
    return (
      <div className='d-flex justify-content-center'>
      <Cards item={item}/>
      </div>
      
    );
}

export default Property;

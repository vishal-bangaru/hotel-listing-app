import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {BsFillBuildingFill,BsArrowsMove} from "react-icons/bs"
import {BiBed} from "react-icons/bi"
import {LuBath} from "react-icons/lu"

function Cards({ item }) {
  const navigate = useNavigate();
  const fun=(id)=>{
   console.log(id)
   navigate(`/property/${id}`)
   }
    return (
        <Card  onClick={()=>{ fun(item.id)}  }>
        <Card.Img variant="top" src="https://23c133e0c1637be1e07d-be55c16c6d91e6ac40d594f7e280b390.ssl.cf1.rackcdn.com/u/gpch/Park-Hotel-Group---Explore---Grand-Park-City-Hall-Facade.jpg" style={{height:200,borderRadius:10}}/>
        <Card.Body>
          <Card.Title>{item.hotelName}</Card.Title>
          <Card.Text>
          <div className='d-flex justify-content-between mt-3'>
             <span><BsFillBuildingFill/></span><BsFillBuildingFill/><span><BiBed/></span><span><LuBath/></span>             
            </div>
           <div className='d-flex justify-content-between '>
             <span>Room</span> <span>4Bed</span> <span>1Bath</span> <span>732sft</span>            
            </div>
          </Card.Text>
          <div className='d-flex justify-content-between '>
            <div className='pt-1'><span className='text-primary'>$7,255</span>/month</div>
          <button type="button" class="btn btn-outline-primary">Read More</button>
          </div>
          
        </Card.Body>
      </Card>
      
      
    );
}

export default Cards;

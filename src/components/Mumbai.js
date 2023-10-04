import React from 'react';
import { useSelector,useDispatch } from "react-redux";
import CardsList from './CardsList';
import { hotelActions } from '../store/hotelslice';

const Mumbai = () => {
    const {Mumbai}=useSelector(state=>state.hotel.totaldata)
    const showMore=useSelector(state=>state.hotel.showMore)
    const lessdata=Mumbai.slice(0,6)
    const dispatch=useDispatch()
    const fun=()=>{
        dispatch(hotelActions.setShowMore())
      }
    return (
        <div>
            {
                showMore ? <CardsList items={Mumbai}/>:<CardsList items={lessdata}/>
            }
            <div className='d-flex justify-content-center m-5'>
      <button className='btn btn-primary ' onClick={fun} >Show more</button>
      </div>
        </div>
    );
}

export default Mumbai;

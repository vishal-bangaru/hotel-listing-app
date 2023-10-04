import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import './App.css';
import NewYork from './components/NewYork';
import Mumbai from './components/Mumbai';
import London from './components/London';
import Paris from './components/Paris';
import RootLayout from './components/RootLayout';
import { useDispatch } from "react-redux";
import { hotelActions } from './store/hotelslice';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Cards from './components/Cards';
import {useParams} from 'react-router-dom'
import Property from './components/Property';
function App() {
  const router=createBrowserRouter(
    [
      {
        path:"/",
        element:<RootLayout/>,
        children:
        [
          {
          path:"/newyork",
          element:<NewYork/>
         },
         {
          path:"/mumbai",
          element:<Mumbai/>
         },
         {
          path:"/paris",
          element:<Paris/>
         },
         {
          path:"/london",
          element:<London/>
         },
         {
         path:"/property/:id",
         element:<Property />
         }
         
        ]
      }
    ]
  )

  const [totalData,setTotalData]=useState({})
  const dispatch=useDispatch()
  useEffect(()=>{
    axios.get(" http://localhost:4000/hotels")
   .then(res=>setTotalData(res.data))
   .catch(err=>console.log(err))
  },[])
  dispatch(hotelActions.setData(totalData))
  
  return (
    <div className="App">
      
      <RouterProvider router={router}/>
      
      
    </div>
  );
}

export default App;

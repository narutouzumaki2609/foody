import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Carousel from '../components/Carousel'


export default function Home() {

  const [Foodcat, setFoodcat] = useState([]);
  const [Fooditem, setFooditem] = useState([])

  var loadData = async () => {
    let response = await fetch("http://localhost:5000/api/Display", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json()
    setFoodcat(response[1]);
    setFooditem(response[0]);
    console.log(response[0], response[1])
  }

  useEffect(() => {
    loadData()
  }, []
  );
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className='container'>
        {

          Foodcat.map((data) => {
            return <div className='row mb-3'>
             <div key={data._id} className='fs-3 m-3'>
            {data.CategoryName}
            </div> 
            <br/>
            {
              Fooditem.filter((item)=> 
                item.CategoryName === data.CategoryName).map((filtereditems)=>{
                  return <div key={filtereditems._id} className='col-12 col-md-6 col-lg-3'>
                  <Card Foodname={filtereditems.name} options={filtereditems.options} imgsrc={filtereditems.img} description={filtereditems.description}/></div>
                })
            }
            </div>

        })
        
      }
     </div>
     
    </div>
      )
}

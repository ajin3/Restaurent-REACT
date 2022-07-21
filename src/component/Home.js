import React from 'react'
import {useState,useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import {Row,Col} from 'react-bootstrap'
function Home() {
    const [restaurants,setRestaurants]=useState([])

   
    useEffect(()=>{
      async function fetchData(){
        await fetch('./restaurants.json')
        .then((data)=>data.json())
        .then((res)=>setRestaurants(res.restaurants))
    }
        fetchData()

    },[])
  return (
    <Row>
      {restaurants.map(item=>(
        <Col sm={12} md={8} lg={6} xl={3}>
          <RestaurantCard item = {item}/>
        </Col>
      ))}
    </Row>
  )
}

export default Home

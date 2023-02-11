import React from "react";
import Card from "./components/Card"
import Hero from  "./components/Hero"
import Navbar from "./components/Navbar"
import Data from "./data"

export default function App(){
  const elements = Data.map(element => {
    return <Card 
      key={element.id}
      img={element.coverImg}
      rating={element.stats.rating}
      reviewCount={element.stats.reviewCount}
      location={element.location}
      title={element.title}
      price={element.price}
    />
  })
  return (  
    <>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {elements}
      </section>
    </>
  )
}

import React from 'react'
import './Home.css'
import Card from './Card'
import Banner from './Banner'

function Home() {
  return (
    <div className='home'>
        
        <Banner />
        <div className='home__section'>
          <Card
          src="https://images.unsplash.com/photo-1547469447-4afec158715b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
          />
          <Card 
          src="https://images.unsplash.com/photo-1550355191-aa8a80b41353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          title="Unique stayes"
          description="Spaces that are more than just a place to sleep."
          />
          <Card 
          src="https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
          />
        </div>
        <div className='home__section'>
        <Card 
        src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="3 Bedroom California Home"
        description="Amazing home in Beverly Hills, CA. Enough room for the whole family! Just make sure to bring your swim suits and hop in the pool"
        price="$229/night"
        />
        <Card 
        src="https://images.unsplash.com/photo-1590490360836-2e3b067c082b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Studio in London"
        description="Cozy studio in the heart of London. Sleeps 2 people. Dont worry about the size of this studio, because you will find yourself exploring the city!"
        price="$89/night"
        />
        <Card
        src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        title="Trailer in Enterprise, Utah"
        description="Call this large 4 person trailer home for a weekend in the gorgeous mountains of Enterprise, Utah"
        price="$150/night"
       />
        </div>
    </div>
  )
}

export default Home
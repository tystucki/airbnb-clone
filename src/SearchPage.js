import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className='searchPage__info'>
            <p>62 stays | 26 August to 30 August | 2 Guest</p>
            <h1>Stays nearby</h1>
            <button>Cancellation Flexibility</button>
            <button>Type of place</button>
            <button>Price</button>
            <button>Rooms and beds</button>
            <button>More Filters</button>
        </div>
        <SearchResult 
        img="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        location="Malibu, Ca"
        title="Beach house in Malibu, Ca"
        description="Gorgeous 5bd, 5ba beach house in Malibu, Ca. Close to fancy dining, shopping and the beach!"
        star=""
        price="$489.00 / night"
        total="$1,956.00 total"
        />
        <SearchResult 
        img="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
        location="West Hollywood"
        title="Large Home in Hollywood"
        description="Immaculate 3bd, 2ba house in West Hollywood, Ca. Close walking distance to many stores and restraunts. About 35 minute drive to the beach and many other attractions"
        star=""
        price="$350.00 / night"
        total="$1,400.00 total"
        />
        <SearchResult 
        img="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
        location="Los Angeles, Ca"
        title="Apartment in Los Angeles, Ca"
        description="1bd 1ba apartment in downtown Los Angeles. Free way access and many amentities in the building."
        star=""
        price="$115.00 / night"
        total="$460.00 total"
        />

    </div>
  )
}

export default SearchPage
import React from 'react'
import './SearchResult.css'

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
})

{
  return (
    <div className='searchResult'>
        <img src={img} alt="" />
        <div className='seachResult__info'>
            <div className='searchResult__infoTop'>
                <p>{location}</p>
                <h3>{title}</h3>
                <p>_____</p>
                <p>{description}</p>
            </div>

            <div className='searchResult__infoBottom'>
                <p><strong>{star}</strong></p>
            </div>
            <div className='searchResults__price'>
                <h2>{price}</h2>
                <p>{total}</p>
            </div>
        </div>
    </div>
  )
}

export default SearchResult
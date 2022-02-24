import React, { useState } from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import data from '../../sfpopos-data.js';
import './POPOSList.css';

function POPOSList() {
  const [ query, setQuery ] = useState("")
  const spaces = data
  .filter((obj) => {
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase()) 
    const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
    return inTitle || inAddress
  }).map((obj) => {
    const { id, title, address, images, hours, features } = obj
    return (
      <POPOSSpace
        id={id}
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
        features={features}
      />
    ) 
  })
    return (
      <div className='POPOSList'>
          <form >
            <input
              value={query}
              placeholder="search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          { spaces }
      </div>
    )
}


export default POPOSList;

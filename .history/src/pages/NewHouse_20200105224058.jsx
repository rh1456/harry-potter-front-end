import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'



const NewHouse = () => {
  const [house setHouse] = useState ({
  houseName: '',
  color: '',

  })
const[houseId, setHouseId] = useState()
const[wasHouseCreatedSuccessfully,
setWasHouseCreatedSuccessfully] = useState(false)
  
  return (
    <div>
      
    </div>
  );
}

export default NewHouse;

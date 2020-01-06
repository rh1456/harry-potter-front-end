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

const updateHouseObject = e => {
  e.persist()
  setHouse(prevHouse => ({
    ...prevHouse,
    [e.target.name]: e.target.value,
  }))
}
const submitHouse = async e => {
  e.preventDefault()
  const isValid = Object.keys(house).reduce((acc, key) => {
    return acc && student [key] ! == ''
  }, true)
  if(isValid) {
    const resp = await axios.post('https://localhost:5001/api/House', {
      ...house,
    })
    if (resp.status === 200) 
    {
      setHouseId(resp.data.id)
    }
  }
}
useEffect (() => {
  if (houseId) 
  {
    setWasHouseCreatedSuccessfully(true)
  }
}, [houseId])


  return (
    <div>
      
    </div>
  );
}

export default NewHouse;

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NewHouse = () => {
  const [house, setHouse] = useState({
    houseName: '',
    color: '',
  })
  const [houseId, setHouseId] = useState()
  const [
    wasHouseCreatedSuccessfully,
    setWasHouseCreatedSuccessfully,
  ] = useState(false)

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
      return acc && house[key] !== ''
    }, true)
    if (isValid) {
      const resp = await axios.post('https://localhost:5001/api/House', {
        ...house,
      })
      if (resp.status === 200) {
        setHouseId(resp.data.id)
      }
    }
  }
  useEffect(() => {
    if (houseId) {
      setWasHouseCreatedSuccessfully(true)
    }
  }, [houseId])

  return wasHouseCreatedSuccessfully ? (
    <Redirect to={`/house/${houseId}`} />
  ) : (
    <div>
      <form onSubmit={submitHouse}>
        <input
          type="text"
          placeholder="House Name"
          value={house.houseName}
          name="houseName"
          onChange={updateHouseObject}
        />
        <input
          type="text"
          placeholder="House Color"
          value={house.color}
          name="houseColor"
          onChange={updateHouseObject}
        />
        <button>Create New House</button>
      </form>
    </div>
  )
}

export default NewHouse

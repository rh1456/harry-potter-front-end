import React from 'react'
import axios from 'axios'

const HogwartStudents = props => {
  const [students, setStudents] = useState('')
  const [name, setName] = useState('')
  const [houseId, setHouseId] = useState('')
    const resp = await axios.get(`https://localhost:5001/api/Student`)
    setStudent(resp.data)
}

const sentStudentToApi = async () => {
  const resp = await axios.post('https://localhost:5001/api/Student', {
    name: name, 
    houseId: parseInt(props.match.params.id),
  })
  console.log(resp.data)
  setStudents(prev => {
    return {
      ...prev,
      students: [...prev.students.concat(resp.data)], 
    }
  })
}

const Students = () => {
  return <div></div>
}

export default HogwartStudents

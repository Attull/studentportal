import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DisplayStudent } from './DisplayStudent'

export const Home = () => {
  let [searchVal, setSearchVal] = useState("")
  const studentData =  useSelector(state => state)
  console.log(studentData)
  const navigate = useNavigate()

  const filterData = studentData.filter((stuData) =>{
    return stuData.name.toLowerCase().includes(searchVal.toLowerCase())
  })

  return (
    <div>
      <input type="text" onChange={(e)=>setSearchVal(e.target.value)}/>
      <button onClick={() => navigate("/add")}>Add student</button>
      <div className='d-flex justify-content-between flex-wrap'>
      {
        (filterData.length) ? filterData.map((stuData, ind) =>{
          return (
            <DisplayStudent 
              id={stuData.id}
              image={stuData.image}
              name={stuData.name}
              email={stuData.email}
              number = {stuData.number}
              batch = {stuData.batch}
            />
          )
        }) : <h2>No record found</h2>
      }
      </div>
      </div>
  )
}

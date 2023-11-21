import { Button } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteStu } from '../redux/action'

export const DisplayStudent = (props) => {
    const {name, email, number, batch, image, id} = props
    const navigate =  useNavigate()
    const dispatch =  useDispatch()
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image['data_url']} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Email : {email}</p>
                <p className="card-text">Number : {number}</p>
                <a href="#" className="btn btn-primary">Batch{batch}</a>
                <Button onClick={()=> navigate(`/edit/${id}`)}>Edit</Button>
                <Button onClick={()=> dispatch(deleteStu(id))}>Delete</Button>
            </div>
        </div>
    )
}

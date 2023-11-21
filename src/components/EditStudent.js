import { Button, Form, Input, Typography } from 'antd'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStu, editStu } from '../redux/action'
import { useNavigate, useParams } from 'react-router-dom'
import ImageUploading from 'react-images-uploading';


export const EditStudent = () => {

    const {id} = useParams()

    const stuData = useSelector(state => state)

    const editUser =  stuData.filter((stu) =>{
        return stu.id == id
    })

    let [uData, setUdata] = useState(editUser[0])

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const inputChange = (e) => {
        if(Array.isArray(e)){
            setUdata({
                ...uData,
                image: e[0]
            })
        }else{
            const { name, value } = e
            setUdata({
                ...uData,
                [name]: value
            })
        }
    }
    const submit = () => {

        dispatch(editStu(uData))
        navigate("/")
    }

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;


    return (
        <div className='form-container'>
            <Form style={{ width: "40%", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", padding: "20px" }}>
                <Typography.Title level={5}>Name</Typography.Title>
                <Input placeholder="Enter the name" name="name" value={uData.name} onChange={(e) => inputChange(e.target)} />
                <Typography.Title level={5}>Email</Typography.Title>
                <Input placeholder="Enter the email" name="email" value={uData.email} type="email" onChange={(e) => inputChange(e.target)} />
                <Typography.Title level={5}>Mobile number</Typography.Title>
                <Input placeholder="Enter the mobile number" name="number" value={uData.number} onChange={(e) => inputChange(e.target)} />
                <Typography.Title level={5}>Batch No.</Typography.Title>
                <Input placeholder="Enter the batch number" type="number" value={uData.batch} name="batch" onChange={(e) => inputChange(e.target)} />
                <Typography.Title level={5}>Profile Image</Typography.Title>
                <ImageUploading
                    multiple
                    value={images}
                    onChange={(e)=>inputChange(e)}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                >
                    {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                    }) => (
                        // write your building UI
                        <div className="upload__image-wrapper">
                            <Button
                                style={isDragging ? { color: 'red' } : undefined}
                                onClick={onImageUpload}
                                {...dragProps}
                            >
                                Click or Drop here
                            </Button>
                            &nbsp;
                            <Button onClick={onImageRemoveAll}>Remove image</Button>
                            {imageList.map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image['data_url']} alt="" width="100" />
                                </div>
                            ))}
                        </div>
                    )}
                </ImageUploading>
                <Button type="primary" size="large" style={{ marginTop: "30px" }} onClick={() => submit()}>Submit</Button>
            </Form>

        </div>
    )
}

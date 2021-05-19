import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, navigate} from '@reach/router';

const UpdateAuthor = props =>{
    const [authorInfo, setAuthorInfo] = useState({
        name: ""
    })
    const [errors, setErrors] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/authors/${props.id}`)
        .then(response=>{
            console.log(response)
            if(response.data.Author){
                setAuthorInfo(response.data.Author)
            }
            else{
                console.log("This Author does is not recognized")
                navigate("/authors/new")
            }
        })
        .catch(err=>console.log(err))
    },[props.id])
    const updateHandler = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/authors/${props.id}/update`, authorInfo)
            .then(response=>{
                console.log(response)
                if(response.data.Author){
                    navigate('/')
                }
                else{
                    setErrors(response.data.errors)
                }
            })
            .catch(err=>console.log(err))
    }
    const changeHandler = (e)=>{
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="container mt-5">
            <Link to="/" className="text-decoration-none float-end">Home</Link>
            <h1 className="text-center">Edit this Author</h1>
            <form onSubmit={updateHandler} className="w-50 mx-auto mt-3">
                <label htmlFor="">Name:</label>
                <input type="text" onChange={changeHandler} name="name" value={`${authorInfo.name}`}  className="form-control"/>
                {errors.name? <p className="text-danger">{errors.name.message}</p>: ""}
                <Link to="/" className="btn btn-primary">Cancel</Link>
                <input type="submit" className="btn btn-primary m-3" value="Update" />
            </form>
        </div>
    )
}
export default UpdateAuthor;
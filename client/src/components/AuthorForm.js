import React, {useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AuthorForm = props =>{
    const [authorInfo, setAuthorInfo] = useState({
        name: ""
    });
    const [errors, setErrors] = useState({})
    const submitHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors/new', authorInfo)
            .then(response=>{
                console.log("Response: ", response)
                if(response.data.Author){
                    navigate('/')
                } 
                else{
                    setErrors(response.data.errors)
                }
            })
            .catch(err=>console.log("Error: ", err))
    }
    const changeHandler = (e) =>{
        setAuthorInfo({
            ...authorInfo,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="container mt-5">
            <Link to="/" className="text-decoration-none float-end">Home</Link>
            <h1 className="text-center">Add a new Author</h1>
            <form onSubmit={submitHandler} className="w-50 mx-auto mt-3">
                <label htmlFor="">Name:</label>
                <input type="text" onChange={changeHandler} name="name" className="form-control"/>
                {errors.name? <p className="text-danger">{errors.name.message}</p>: ""}
                <Link to="/" className="btn btn-primary">Cancel</Link>
                <input type="submit" className="btn btn-primary m-3" value="Create" />
            </form>
        </div>
    )
}
export default AuthorForm;
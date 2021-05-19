import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const Author = props =>{
    const [authors, setAuthors] = useState([]);
    const [deleteClicked, setDeleteClicked] = useState(false)
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(response=>{
                console.log(response)
                setAuthors(response.data.Authors)
            })
            .catch(err=>console.log(err))
    },[deleteClicked])
    const deleteHandler = (e, authorId)=>{
        axios.delete(`http://localhost:8000/api/authors/${authorId}/delete`)
            .then(response=>{
                console.log(response)
                setDeleteClicked(!deleteClicked)
            })
    }
    return(
        <div className="container mt-5">
            <Link to="/authors/new" className="btn btn-outline-primary float-end">Add an Author</Link>
            <h1 className="text-center">Favorite Authors</h1>
            <h4>We have quotes by:</h4>
            <table className="table table-striped border mt-3">
            <thead>
                <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {authors.map((author, index)=>{
                        return <tr key={index}>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/authors/${author._id}/update`} className="text-decoration-none">Edit</Link>
                                <Link onClick={(e)=>deleteHandler(e, author._id)} to="" className="text-danger text-decoration-none m-3">Delete</Link>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Author;
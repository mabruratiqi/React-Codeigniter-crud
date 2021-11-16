/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";

const PropertyList = () => {

    const [properties, setProperty] = useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");

    const getProperties = async () => {
        const properties = await axios.get('http://localhost:8080/properties');
        setProperty(properties.data);
    }
    
    useEffect(() => {
        getProperties();
    },[]);

    
    const results = !searchTerm
    ? properties
    : properties.filter(item => {
        const query = searchTerm.toLowerCase();
        return (
            item.title.toLowerCase().indexOf(query) >= 0 ||
            item.price.toLowerCase().indexOf(query) >= 0
          )
        }
      );

    const deleteProperty = async (id) =>{
        await axios.delete(`http://localhost:8080/properties/${id}`);
        getProperties();
    }
    

    return (
        <div className="container is-max-desktop">
        <div class="notification is-primary">
            <div className="is-size-4">Property List</div>
            <hr className="m-1" />
            <div className="field">
            <Link to="/add" className="button is-info is-small mt-4">Add New</Link>
            </div>
            <div className="field">
             <Search {...{searchTerm,setSearchTerm}} />
            </div>
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Property Title</th>
                        <th>Property Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { results.map((proerty, index) => (
                        <tr key={proerty.id}>
                            <td>{index + 1}</td>
                            <td>{proerty.title}</td>
                            <td>{proerty.price}</td>
                            <td>
                                <div class="field is-grouped">
                                    <div class="control">
                                     <Link to={`/edit/${proerty.id}`} className="button is-small is-info">Edit</Link>
                                    </div>
                                    <div class="control">
                                     <button onClick={() => deleteProperty(proerty.id)} className="button is-small is-danger">Delete</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )) }
                    
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default PropertyList

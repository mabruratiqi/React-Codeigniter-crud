/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";

const EditProperty = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const updateProperty = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:8080/properties/${id}`,{
            title: title,
            price: price
        });
        history.push("/");
    }

    useEffect(() => {
        getPropertyById();
    },[]);

    const getPropertyById = async () => {
        const response = await axios.get(`http://localhost:8080/properties/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price);
    }

    return (
        <div class="notification is-primary">
        <div className="is-size-4">Property List</div>
        <hr className="m-1" />
            <form className="mt-4" onSubmit={ updateProperty }>
                <div className="field">
                    <label className="label">Title</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ title } 
                        onChange={ (e) => setTitle(e.target.value) }
                        placeholder="Title"
                    />
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ price } 
                        onChange={ (e) => setPrice(e.target.value) }
                        placeholder="Price"
                    />
                </div>
                <div className="field">
                    <button className="button is-info">Update</button>
                </div>
                <Link to="/" className="mt-5">Back to Home</Link>

            </form>
        </div>
    )
}

export default EditProperty

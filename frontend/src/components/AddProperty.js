import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";

const AddProperty = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const history = useHistory();

    const saveProperty = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/properties',{
            title: title,
            price: price
        });
        history.push("/");
    }

    return (
        <div>
        <div class="notification is-primary">
            <div className="is-size-4">Add Property</div>
            <hr className="m-1" />
            <form onSubmit={ saveProperty } className="mb-2 mt-4">
                <div className="field">
                    <label className="label">Property Title</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ title } 
                        onChange={ (e) => setTitle(e.target.value) }
                        placeholder="Title"
                    />
                </div>
                <div className="field">
                    <label className="label">Property Price</label>
                    <input 
                        type="text" 
                        className="input" 
                        value={ price } 
                        onChange={ (e) => setPrice(e.target.value) }
                        placeholder="Price"
                    />
                </div>
                <div className="field">
                    <button className="button is-info">Save</button>
                </div>
            </form>
            <Link to="/" className="mt-5">Back to Home</Link>
            </div>

        </div>
    )
}

export default AddProperty

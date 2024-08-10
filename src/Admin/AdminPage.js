import React, { useState } from 'react';
import axios from 'axios';
import "./AdminPage.css"
 // Ensure this file contains the CSS styles

const AdminPage = () => {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file.size > 10485760) { // 10 MB
            alert('File size exceeds 10 MB');
            return;
        }
        setFile(file);
    };
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('price', price);
    
        try {
            await axios.post('http://localhost:8080/api/products/addcase', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Case uploaded successfully');
            // Clear form fields after successful upload
            setFile(null);
            setName('');
            setPrice('');
        } catch (error) {
            console.error('Error uploading case:', error);
            alert('Failed to upload');
        }
    };
    
    
    return (
        <div className="admin-page">
            <h1>Admin Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        value={price}
                        onChange={handlePriceChange}
                        required
                    />
                </div>
                <div>
                    <label>Image:</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <button type="submit">Upload Case</button>
            </form>
        </div>
    );
};

export default AdminPage;

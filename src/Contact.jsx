import React, { useState } from 'react';
import './App.css';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Update form data as user types
    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    function handleSubmit (e) {
        e.preventDefault();
        // Simple validation to ensure fields are not empty
        if (!formData.name || !formData.email || !formData.message) {
            alert('Please fill in all fields.');
            return;
        }
        console.log('Form Data Submitted:', formData);
        // Reset form fields
        setFormData({
            name: '',
            email: '',
            message: ''
        });
        // Add here your logic to send data to a server or email service
    };

    return (
        <div className="content-box">
            <h2>Reach out!</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label><br />
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className>Message:</label> <br />
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;


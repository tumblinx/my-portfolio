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
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);

        // URL where backend server is listening
        const apiUrl = 'http://localhost:3001/send-email';

        // Fetch API to send the form data via POST
        fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Message sent successfully!');
            // Reset form fields after successful send
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to send message');
        });
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
                <button type="submit" className="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;


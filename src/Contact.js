import React from 'react';
import './Style.css';

export default function Contact() {
    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Get in Touch</h1>
                <p className="paragraph">
                    We would love to hear from you! Whether you have questions about our services, 
                    need support, or just want to say hello, feel free to reach out. Our team is 
                    here to assist you.
                </p>

                <div className="details">
                    <h2 className="subtitle">Contact Information</h2>
                    <p className="paragraph">
                        <strong>Email:</strong> info@ourcompany.com
                    </p>
                    <p className="paragraph">
                        <strong>Phone:</strong> +1 234 567 890
                    </p>
                    <p className="paragraph">
                        <strong>Address:</strong> 1234 Business Lane, Suite 100, City, Country
                    </p>
                    <p className="paragraph">
                        <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
                    </p>
                </div>

                <h2 className="subtitle">Send Us a Message</h2>
                <form className="form">
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" className="form-input" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" className="form-textarea" required></textarea>
                    </div>
                    <button type="submit" className="form-button">Send Message</button>
                </form>
            </div>
        </div>
    );
}

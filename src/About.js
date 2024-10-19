import React from 'react';
import './Style.css';

export default function About() { 
    return (
        <div className="container">
            <div className="content">
                <h1 className="title">About Us</h1>
                <p className="paragraph">
                    Welcome to our company! We are a passionate team dedicated to delivering 
                    high-quality services and creating value for our clients. With years of 
                    experience in our field, we bring innovative solutions and a customer-first 
                    approach to everything we do.
                </p>
                <p className="paragraph">
                    Our mission is to exceed expectations by providing top-notch products and 
                    exceptional service. Whether you're a small startup or a large enterprise, 
                    we tailor our solutions to meet your unique needs, ensuring success at every 
                    stage of your journey.
                </p>

                <h2 className="subtitle">Our Values</h2>
                <p className="paragraph">
                    We believe in integrity, transparency, and collaboration. Our core values drive 
                    us to continuously improve and adapt in a fast-changing world. We pride ourselves 
                    on building lasting relationships with our clients, partners, and team members.
                </p>

                <h2 className="subtitle">Why Choose Us?</h2>
                <p className="paragraph">
                    From expert consultation to reliable support, we are committed to helping your 
                    business thrive. Our expertise spans across multiple industries, and we bring 
                    cutting-edge technology and best practices to deliver exceptional results.
                </p>
                <p className="paragraph">
                    Let us help you achieve your goals. We look forward to being a trusted partner on your journey to success.
                </p>
            </div>
        </div>
    );
}

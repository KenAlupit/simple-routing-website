import React from 'react';
import './Style.css';

export default function Content() {
    return (
        <div className="container">
            <div className="content">
                <h1 className="title">Welcome to Our Company</h1>
                <p className="paragraph">
                    At our company, we are driven by a passion for innovation and excellence. Our goal is 
                    to provide top-quality solutions tailored to your unique needs, no matter the size of 
                    your business. We take pride in offering cutting-edge services designed to help you succeed.
                </p>

                <h2 className="subtitle">Our Services</h2>
                <p className="paragraph">
                    We offer a wide range of services to help your business thrive in today's competitive market:
                </p>
                <ul className="service-list">
                    <li className="service-item">Expert Consulting</li>
                    <li className="service-item">Custom Software Development</li>
                    <li className="service-item">Cloud Solutions</li>
                    <li className="service-item">Digital Marketing Strategies</li>
                    <li className="service-item">Data Analytics and Insights</li>
                </ul>

                <h2 className="subtitle">Why Work With Us?</h2>
                <p className="paragraph">
                    We are committed to delivering exceptional results, combining innovation, experience, and 
                    a customer-first approach. Here's what sets us apart:
                </p>
                <ul className="benefits-list">
                    <li className="benefit-item">Industry-leading expertise across multiple sectors</li>
                    <li className="benefit-item">Tailored solutions designed to meet your specific needs</li>
                    <li className="benefit-item">Proven track record of delivering successful projects</li>
                    <li className="benefit-item">Dedicated support at every step of your journey</li>
                </ul>

                <h2 className="subtitle">Get Started Today</h2>
                <p className="paragraph">
                    Ready to take your business to the next level? Contact us today to learn how we can help 
                    you achieve your goals. We look forward to being your partner in success.
                </p>
            </div>
        </div>
    );
}

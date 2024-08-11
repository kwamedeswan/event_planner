import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import './Footer.jsx' // Import the Footer component
import Footer from './Footer.jsx';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className="description">
                <p>
                    Plan and organize your events effortlessly with Event Planner. From
                    birthdays to corporate meetings, we've got you covered.
                </p>
                <button className="get-started-button"></button>
            </section>
            <section className="events_categories">
                <ul>
                    <h2>Outdoor Events</h2>
                    <li>Cookouts</li>
                    <li>Yoga Classes</li>
                    <li>Workplace Gatherings</li>
                    <li>Weddings</li>
                </ul>

                <ul>
                    <h2>Indoor Events</h2>
                    <li>Roller Skating</li>
                    <li>Community Meetings</li>
                    <li>Bingo</li>
                    <li>Dancehall</li>
                </ul>

                <ul>
                    <h2>Private Events</h2>
                    <li>Contact to discuss details</li>
                </ul>
            </section>
            <section className="features">
                <h2>Features</h2>
                <ul>
                    <li>Tables and chairs</li>
                    <li>Bartenders and wait staff</li>
                    <li>PA system/DJ Equipment</li>
                    <li>Podium and stage</li>
                </ul>
            </section>
            <section className="testimonials">
                <h2>Testimonials</h2>
                <div className="testimonial">
                <p>"Event Planner made organizing my wedding a breeze. Highly recommended!"</p>
                <p className="author">- Emily Johnson</p>
                </div>

                <div className="testimonial">
                <p>"Their attention to detail and flawless execution made our corporate gala an unforgettable success."</p>
                <p className="author">- Randy Savage</p>
                </div>

                <div className="testimonial">
                <p>"I couldn't believe how stress-free planning my daughter's Sweet 16 was with this incredible team."</p>
                <p className="author">- Claude Frenly</p>
                </div>
            </section>
            <section className="contact">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button className="submit-button">Send</button>
                </form>
            </section>
            <Footer className="event-planner-container" />
        </div>
    );
};

export default EventPlanner;

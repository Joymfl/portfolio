import React from 'react';
import '../styling/LandingPage.css'

export function LandingApp() {
    return (
        <div className="main">
            <div className="navbar">
                <ul>
                    <li>portfolio</li>
                    <li>projects</li>
                </ul>
            </div>
            <div className="header">
                <h1>Portfolio</h1>
                <h2 className="first">Navbar</h2>
            </div>
            <div className="first_text">
                <ul>
                    <li>Azure labs</li>
                    <li>Star Atlas</li>
                </ul>
            </div>
        </div>
    );
}
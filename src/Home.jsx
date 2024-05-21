import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Home = () => {
    return (
        <div className="home-bg" id="home">
            <section className="home">
                <div className="content">
                    <span>Supercar News: Fuel Your Passion</span>
                    <h3>Stay updated with the latest in supercar innovations, exclusive reviews, and thrilling test drives.</h3>
                    <p>Discover the world of high-performance automotive excellence!</p>
                    <HashLink to="#more" className="btn">Explore More</HashLink>
                </div>
            </section>
        </div>
    );
};

export default Home;

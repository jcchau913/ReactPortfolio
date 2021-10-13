import React from 'react';
import ContactList from '../components/ContactList';
import '../styles/Home.css'
import jeffHeadShot from '../assets/IMG_0182.jpg'

const Home = () => {
    return (
        <div>
            <h1 id='name'>Welcome to Jeff Chau's Portfolio Page</h1>
            <div className='home-container'>
                <img
                    className='jeff-headshot'
                    src={jeffHeadShot}
                    alt="headshot"
                />

                <p className='bio-text'>I'm a software developer.</p>
            </div>

            <ContactList />
        </div>
    );
};

export default Home;
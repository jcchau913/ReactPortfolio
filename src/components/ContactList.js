import React from 'react';
import jeffContactData from '../data/jeffContactData.json'
import ContactCard from './ContactCard';

const ContactList = () => {

    const contactInfoList = jeffContactData.map((contact, i) => <ContactCard {...contact} key={i} />)

    return (
        <footer className='contact-list'>
            {contactInfoList}
        </footer>
    );
};

export default ContactList;
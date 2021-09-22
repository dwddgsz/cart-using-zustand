import React from 'react'
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';


const Contact = () => {
    return (
        <Hero
        title={"We appriciate your feedback!"}
        description={"Something isn't clear? You have an idea that may improve users experience while using our website? Use this form! Every information is important."}
        >
            <ContactForm/>
        </Hero>
    )
}

export default Contact;
import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';
import learning from '../assets/learning.jpg'
import SectionTitle from '../components/SectionTitle';
import CardsList from '../components/CardsList';

const bestsellers = [
    {
        data: {
            title:'Coaching',
            description: '150h of pure coaching stuff',
            author: 'Sam Smith',
            price:99,
        },
        key: 1,
    },
    {
        data: {
            title:'Graphics',
            description: 'Using Adobe, Figma and Gimp',
            author: 'Adam Doe',
            price:59,
        },
        key: 2,
    },
    {
        data: {
            title:'Copywriting',
            description: 'You are going to become top paid copywriter after this lecture. Author has 10 years of experience as copywriter at Google',
            author: 'Sam Adams',
            price:349,
        },
        key: 3,
    },
    {
        data: {
            title:'Content Cretor',
            description: 'We will teach you how to be creative',
            author: 'John Adams',
            price:49,
        },
        key: 4,
    },
    {
        data: {
            title:'Databases',
            description: '30h of lectures + 50h of exercises',
            author: 'Smith Jones',
            price:49,
        },
        key: 5,
    },
    {
        data: {
            title:'Programming',
            description: '#1 on the market. Free support',
            author: 'Adam Chris',
            price:149,
        },
        key: 6,
    },
]



const LearningWrapper = styled.div`
    width:70%;
    height:70%;
    background-image: url(${learning});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 1px 6px 10px rgba(0,0,0,.2);
`


const Home = () => {
    return (
        <>
            <Hero>
                <LearningWrapper/>
            </Hero>
            <SectionTitle>
                Our Bestsellers
            </SectionTitle>
            <CardsList cards={bestsellers}/>
        </>
    )
}

export default Home;
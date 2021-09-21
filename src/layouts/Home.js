import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';
import learning from '../assets/learning.jpg'

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
        </>
    )
}

export default Home;
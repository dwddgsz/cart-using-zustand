import React from 'react';
import Hero from '../components/Hero';
import styled from 'styled-components';
import learning from '../assets/learning.jpg'
import SectionTitle from '../components/SectionTitle';
import CardsList from '../components/CardsList';
import useStore from '../store/Store';




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

    const products = useStore(state=>state.products)

    return (
        <>
            <Hero 
            title={"Enjoy best quality"} 
            description={"Our courses were prepared with care by experienced professionals working for biggest comapnies: Google, Amazon and Intel."}
            >
                <LearningWrapper/>
            </Hero>
            <SectionTitle>
                Our Bestsellers
            </SectionTitle>
            <CardsList cards={products} bestsellers={true}/>
        </>
    )
}

export default Home;
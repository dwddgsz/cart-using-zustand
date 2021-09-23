import React from 'react'
import styled from 'styled-components'
import Card from './Card';


const CardsListWrapper = styled.ul`
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const CardsList = ({cards, isBestsellers=false}) => {

    let cardsToMap = cards;
    if(isBestsellers) {
        cardsToMap = cards.filter(card=>{
            if(card.data.isBestseller) return card;
        })
    }

    const renderCards = cardsToMap.map((data)=>{
        return <Card key={data.id} data={data}/>
    })

    return (
        <CardsListWrapper>
            {renderCards}
        </CardsListWrapper>
    )
}

export default CardsList;
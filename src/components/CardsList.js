import React from 'react'
import styled from 'styled-components'
import Card from './Card';


const CardsListWrapper = styled.ul`
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const CardsList = ({cards, bestsellers=false}) => {

    let cardsToMap = cards;
    if(bestsellers) {
        cardsToMap = cards.filter(card=>{
            if(card.data.isBestseller) return card;
        })
    }

    const renderCards = cardsToMap.map(({data,key})=>{
        return <Card key={key} data={data}/>
    })

    return (
        <CardsListWrapper>
            {renderCards}
        </CardsListWrapper>
    )
}

export default CardsList;
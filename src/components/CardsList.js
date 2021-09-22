import React from 'react'
import styled from 'styled-components'
import Card from './Card';


const CardsListWrapper = styled.ul`
    display:flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const CardsList = ({cards}) => {

    const renderCards = cards.map(({data,key})=>{
        return <Card key={key} data={data}/>
    })

    return (
        <CardsListWrapper>
            {renderCards}
        </CardsListWrapper>
    )
}

export default CardsList;
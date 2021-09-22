import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.li`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:310px;
    height:280px;
    margin:0 15px 30px;
    padding:10px;
    border-radius:5px;
    box-shadow: 1px 6px 10px rgba(0,0,0,.2);
    transition:box-shadow .25s, transform .25s;
    &:hover {
        box-shadow: 1px 10px 20px rgba(0,0,0,.16);
        transform: translateY(-10px);
    }
    > h4 {
        font-size:1.7rem;
        font-weight: 500;
        text-transform: uppercase;
    }
    >h4,p,span {
        max-width:100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    > p,span,button {
        font-size:1.4rem;
    }
    > span {
        margin: 14px 0;
        font-size:1.5rem;
        font-weight: 500;
    }
    > button {
        margin-top:20px;
        padding:4px 13px;
        border-radius:4px;
        background-color: var(--dark);
        color: var(--light);
        cursor:pointer;
    }
`


const Card = ({data}) => {
    const {title,description,author,price} = data;
    return (
        <CardWrapper> 
            <h4>{title}</h4>
            <p title={description}>{description}</p>
            <p>{author}</p>
            <span>{price} $</span>
            <button>More</button>
        </CardWrapper>
    )
}

export default Card;
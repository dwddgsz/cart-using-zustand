import React from 'react'
import styled from 'styled-components'
import authorSVG from '../assets/author.svg'
import starSVG from '../assets/star.svg'
import useStore from '../store/Store'

const CardWrapper = styled.li`
    display:flex;
    flex-direction: column;
    align-items: center;
    width:280px;
    height:240px;
    margin:0 15px 30px;
    padding:10px;
    border-radius:5px;
    box-shadow: 1px 6px 10px rgba(0,0,0,.2);
    transition:box-shadow .25s, transform .25s;
    @media only screen and (min-width:768px) {
        width:310px;
    }
    &:hover {
        box-shadow: 1px 10px 20px rgba(0,0,0,.16);
        transform: translateY(-10px);
    }
    .card {
        &__button {
            margin-top:20px;
            padding:4px 13px;
            border-radius:4px;
            font-weight: 500;
            background-color: var(--dark);
            color: var(--light);
            cursor:pointer;
            &:disabled {
                cursor:auto;
                background-color: var(--disabled)
            }
        }
        &__title {
            font-size:1.7rem;
            font-weight: 500;
        }
        &__description {
            font-size:1.4rem;
        }
        &__author {
            display:flex;
            align-items:center;
            font-size:1.4rem;
            span:nth-child(1) {
                margin-right:5px;
            }
        }
        &__rate-and-price {
            font-size:1.4rem;
            display:flex;
        }
        &__rate {
            display:flex;
            align-items:center;
            margin-right:10px;
            img {
                margin-right:5px;
            }
        }
        &__price {
            font-weight:700;
        }
    }
    p {
            max-width:100%;
            margin:12px 0;
            overflow:hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
    }
    img {
        width:15px;
        height:15px;
    }
`


const Card = ({data}) => {

    const addToCart = useStore(state=>state.addToCart);

    const {title,description,author,rate,price,inCart,id} = data;
    return (
        <CardWrapper> 
            <h4 className="card__title">{title}</h4>
            <p className="card__description" title={description}>{description}</p>
            <p className="card__author"><span><img src={authorSVG} alt="author"/></span> <span>{author}</span></p>
            <p className="card__rate-and-price"><span className="card__rate"><img src={starSVG} alt="star"/> {rate}/5</span><span className="card__price">{price} $</span></p>
            <button className="card__button" disabled={inCart} onClick={()=>addToCart(id)}>{inCart ? 'In cart' : 'Add to cart'}</button>
        </CardWrapper>
    )
}

export default Card;
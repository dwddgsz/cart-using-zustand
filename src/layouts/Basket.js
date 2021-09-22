import React from 'react'
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import authorSVG from '../assets/author.svg'
import trashSVG from '../assets/trash.svg'


const BasketWrapper = styled.section`
.basket {
    &__subtitle {
        margin-bottom:60px;
        font-size:1.7rem;
        font-weight: 500;
        text-align:center;
    }
    &__products-headings {
        display:flex;
        align-items:center;
        width:100%;
        max-width:700px;
        margin-bottom:20px;
        @media only screen and (min-width:768px) {
            margin:0 auto 20px;
        }
        span{
            font-size:1.3rem;
            font-weight: 700;
            &:nth-child(1){
                width:35%;
            }
            &:nth-child(2){
                display:none;
                width:32%;
            }
            &:nth-child(3){
                width:20%;
            }
            &:nth-child(4){
                width:40%;
            }
            &:nth-child(5){
                width:5%;
            }
            @media only screen and (min-width:768px) {
                &:nth-child(1){
                width:35%;
                }
                &:nth-child(2){
                    display:block;
                }
                &:nth-child(3){
                    width:15%;
                }
                &:nth-child(4){
                    width:15%;
                }
                &:nth-child(5){
                    width:3%;
                }
            }
        }
    }
    &__products-list {
        display:flex;
        flex-direction:column;
    }
    &-product{
        display:flex;
        align-items:center;
        width:100%;
        max-width:700px;
        margin-bottom:20px;
        @media only screen and (min-width:768px) {
            margin:0 auto 20px;
        }
        &__title {
            width:35%;
            font-size:1.3rem;
            font-weight: 400;
        }
        &__author {
            display:none;
            width:32%;
            max-width:32%;
            font-size:1.3rem;
            img {
                width:15px;
                height:15px;
                margin-right:10px;
            }
        }
        &__price {
            width:20%;
            max-width:20%;
            font-size:1.3rem;
        }
        &__amount{
            display:flex;
            width:40%;
            max-width:40%;
            font-size:1.3rem;
            span:nth-child(1),
            span:nth-child(3) {
                display:flex;
                justify-content: center;
                align-items:center;
                width:21px;
                border-radius:5px;
                background-color: var(--dark);
                color: var(--light);
                cursor:pointer;
            }
            span:nth-child(2) {
                margin:0 6px;
            }
        }
        &__trash-bin {
            width:3%;
            max-width:3%;
            cursor:pointer;
            img {
                width:15px;
                height:15px;
            }
        }
        &__title,
            &__author,
            &__price, 
            &__amount,
            &__trash-bin {
                overflow: hidden;
                white-space:nowrap;
                text-overflow: ellipsis;
            }
        @media only screen and (min-width:768px) {
            &__title {
            width:35%;
            max-width:35%;
            }
            &__author {
                display:flex;
                width:32%;
                max-width:32%;
            }
            &__price {
                width:15%;
                max-width:15%;
            }
            &__amount{
                width:15%;
                max-width:15%;
            }
            &__trash-bin {
                width:3%;
                max-width:3%;
            }
            }
    }
}
`

const Basket = () => {
    return (
        <>
            <BasketWrapper>
                <SectionTitle>
                    Basket
                </SectionTitle>
                <h3 className="basket__subtitle">After purchase You will receive activation code by email in 2 hours</h3>
                <div className="basket__products-headings">
                    <span>Title</span>
                    <span>Author</span>
                    <span>Price</span>
                    <span>Amount</span>
                    <span></span>
                </div>
                <ul className="basket__products-list">
                    <li className="basket-product">
                        <h4 className="basket-product__title">Graphics</h4>
                        <p className="basket-product__author"><span><img src={authorSVG} alt="author"/></span> <span>Adam Smith</span></p>
                        <span className="basket-product__price">43 $</span>
                        <span className="basket-product__amount"><span>-</span><span>1</span><span>+</span></span>
                        <span className="basket-product__trash-bin"><img src={trashSVG} alt="trash"/></span>
                    </li>   
                    <li className="basket-product">
                        <h4 className="basket-product__title">Graphics</h4>
                        <p className="basket-product__author"><span><img src={authorSVG} alt="author"/></span> <span>Adam Smith</span></p>
                        <span className="basket-product__price">43 $</span>
                        <span className="basket-product__amount"><span>-</span><span>1</span><span>+</span></span>
                        <span className="basket-product__trash-bin"><img src={trashSVG} alt="trash"/></span>
                    </li>   
                    <li className="basket-product">
                        <h4 className="basket-product__title">Graphics</h4>
                        <p className="basket-product__author"><span><img src={authorSVG} alt="author"/></span> <span>Adam Smith</span></p>
                        <span className="basket-product__price">43 $</span>
                        <span className="basket-product__amount"><span>-</span><span>1</span><span>+</span></span>
                        <span className="basket-product__trash-bin"><img src={trashSVG} alt="trash"/></span>
                    </li>   
                    <li className="basket-product">
                        <h4 className="basket-product__title">Graphics</h4>
                        <p className="basket-product__author"><span><img src={authorSVG} alt="author"/></span> <span>Adam Smith</span></p>
                        <span className="basket-product__price">43 $</span>
                        <span className="basket-product__amount"><span>-</span><span>1</span><span>+</span></span>
                        <span className="basket-product__trash-bin"><img src={trashSVG} alt="trash"/></span>
                    </li>   
                </ul>

            </BasketWrapper>
        </>
    )
}

export default Basket;
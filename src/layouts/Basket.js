import React, {useState} from 'react'
import styled from 'styled-components';
import SectionTitle from '../components/SectionTitle';
import authorSVG from '../assets/author.svg'
import trashSVG from '../assets/trash.svg'
import useStore from '../store/Store';
import shallow from 'zustand/shallow'


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
    &__email-form {
        display:flex;
        flex-direction: column;
        max-width:280px;
        margin: 30px auto 0;
        button {
        height: 40px;
        line-height: 40px;
        margin-top:40px;
        border-radius: 4px;
        font-weight: 500;
        background-color: var(--dark);
        color: var(--light);
        cursor: pointer;
        &:disabled {
            background-color: var(--disabled);
            cursor:auto;
        }
        }
    }
    &__email-label,
    &__price-label {
        margin-bottom: 5px;
        font-size: 1.3rem;
        font-weight: 500;
    }
    &__email-input,
    &__price-input {
        width: 280px;
        max-width: 280px;
        height: 40px;
        padding-left: 7px;
        border: none;
        border-radius: 5px;
        outline: none;
        box-shadow: 1px 6px 10px rgba(0,0,0,.2);
        font-size: 1.15rem;
    }
    &__price-input {
        margin-bottom:15px;
    }
    &__products-headings.hidden, 
    &__email-form.hidden {
        display:none;
    } 
}
.container {
position: relative;
display: block;
padding-left: 28px;
margin-top:12px;
font-size: 1.4rem;
user-select: none;
cursor: pointer;
    a {
        font-weight: 700;
    }
}
.container input {
position: absolute;
height: 0;
width: 0;
opacity: 0;
cursor: pointer;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: var(--light);
  border:1px solid var(--dark);
  border-radius:3px;
}

.container:hover input ~ .checkmark {
  background-color: var(--light);
}

.container input:checked ~ .checkmark {
  background-color: var(--dark);
}

.checkmark:after {
    content: "";
    position: absolute;
    display: none;
}
.container input:checked ~ .checkmark:after {
    display: block;
}

.container .checkmark:after {
    left: 6.5px;
    top: 3px;
    width: 5px;
    height: 10px;
    border: 1px solid var(--light);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
}
`
const Basket = () => {

    const {products,increase,decrease,remove} = useStore(({products,increase,decrease,remove})=>({products,increase,decrease,remove}),shallow);
    const [areTermsAccepted,setAreTemsAccepted] = useState(false);
    const [email,setEmail] = useState('');


    let productsInCartAmount = 0;
    let totalValue = 0;
    products.forEach(product=>{
        totalValue += product.amount * product.price;
        console.log(product.amount > 0)
        productsInCartAmount = product.amount > 0 ? productsInCartAmount+1 : productsInCartAmount;
    })

    return (
        <>
            <BasketWrapper>
                <SectionTitle>
                    {productsInCartAmount > 0 ? 'Cart' : 'Your cart is empty'}
                </SectionTitle>
                <h3 className="basket__subtitle">{productsInCartAmount > 0 ? 'After purchase You will receive activation code by email in 2 hours' : ''}</h3>
                <div className={`basket__products-headings ${productsInCartAmount > 0 ? '' : 'hidden'}`}>
                    <span>Title</span>
                    <span>Author</span>
                    <span>Price</span>
                    <span>Amount</span>
                    <span></span>
                </div>
                <ul className="basket__products-list">

                {
                    products.map(({inCart,price,amount,title,author,id})=>{
                        if (inCart) {
                            return (
                                <li className="basket-product" key={id}>
                                <h4 className="basket-product__title">{title}</h4>
                                <p className="basket-product__author"><span><img src={authorSVG} alt="author"/></span> <span>{author}</span></p>
                                <span className="basket-product__price">{price} $</span>
                                <span className="basket-product__amount"><span onClick={()=>{decrease(id,amount)}}>-</span><span>{amount}</span><span onClick={()=>increase(id,amount)}>+</span></span>
                                <span className="basket-product__trash-bin" onClick={()=>{remove(id)}}><img src={trashSVG} alt="trash"/></span>
                                </li>   
                            )
                        }
                    })
                }


 
                </ul>

                <form onSubmit={()=>{return window.confirm('Proceed with the payment')}} className={`basket__email-form ${productsInCartAmount > 0 ? '' : 'hidden'}`} >
                    <label className="basket__price-label">Total price</label>
                    <input type="number" value={totalValue} disabled className="basket__price-input"/>
                    <label className="basket__email-label">Email</label>
                    <input type="email" value={email} onInput={(e)=>{setEmail(e.target.value)}} className="basket__email-input"/>
                    <label className="container">Ive read and accept <a href="/basket">terms</a>
                        <input type="checkbox" onInput={(e)=>{setAreTemsAccepted(e.currentTarget.checked)}}/>
                        <span className="checkmark"></span>
                    </label>
                    <button type="submit" disabled={!areTermsAccepted || email.replace(' ','').length == 0}>Buy</button>
                </form>


            </BasketWrapper>
        </>
    )
}

export default Basket;
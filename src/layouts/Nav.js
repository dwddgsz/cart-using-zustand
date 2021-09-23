import React from 'react'
import styled from 'styled-components';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import ProductsPage from './ProductsPage';
import Basket from './Basket';
import Footer from './Footer';
import useStore from '../store/Store';

const NavWrapper = styled.nav`
    padding-top:8px;
    ul {
        display:flex;
        align-items:center;
        height:50px;
        margin:0;
        padding:0;
        li:not(:last-child) {
            margin-right:18px;
        }
        li:last-child {
            margin-left:auto;
            a {
                padding:7px 20px;
                border-radius:7px;
                background-color: var(--dark);
                color:var(--light);
            }
        }
        a {
                font-size:1.4rem;
                @media only screen and (min-width:1280px) {
                    font-size:1.6rem;
                }
            }
    }
`

const Nav = () => {

    const products = useStore(state=>state.products);

    let productsInCart = 0;
    products.forEach(product=>{
        console.log(product.amount);
        productsInCart += parseFloat(product.amount);
    })

    return (
        <>
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/basket">Cart (<span>{productsInCart}</span>)</Link>
                </li>
            </ul>
        </NavWrapper>
        <Switch>
            <Route path="/products">
                <ProductsPage/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="/basket">
                <Basket/>
            </Route>
            <Route path="/">
                <Home/>  
            </Route>
        </Switch>
        <Footer/>
        </>
    )
}

export default Nav;
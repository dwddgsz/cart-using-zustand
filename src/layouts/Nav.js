import React from 'react'
import styled from 'styled-components';
import { Switch, Link, Route } from 'react-router-dom';
import Home from '../layouts/Home';
import Contact from '../layouts/Contact';
import AllProducts from '../layouts/AllProducts';
import Basket from '../layouts/Basket';

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
            padding:7px 20px;
            border-radius:7px;
            background-color: var(--dark);
            a {
                color:var(--light);
            }
        }
    }
`

const Nav = () => {
    return (
        <>
        <NavWrapper>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/all-products">All Products</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/basket">Basket</Link>
                </li>
            </ul>
        </NavWrapper>
        <Switch>
            <Route path="/all-products">
                <AllProducts/>
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
        </>
    )
}

export default Nav;
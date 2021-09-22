import React from 'react'
import styled from 'styled-components'


const FooterWrapper = styled.footer`
    display:flex;
    justify-content: center;
    align-items:center;
    height:50px;
    > p,a {
        font-size:1.5rem;
    }
    a {
        font-weight: 500;
    }
`

const Footer = ({children}) => {
    return (
        <FooterWrapper>
            <p>
                Created by <a href="https://github.com/dwddgsz" target="_blank" rel="noreferrer">Dawid Długosz</a> &copy;  
            </p>
        </FooterWrapper>
    )
}

export default Footer;
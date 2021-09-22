import React from 'react'
import styled from 'styled-components';

const HeroWrapper = styled.section`
    display:flex;
    flex-direction: column;
    height:700px;
    > div {
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:50%;
        @media only screen and (min-width:768px) {
            width:50%;
            height:100%;
        }
        &:nth-child(1) {
            h2 {
                margin:0;
                font-size:2.5rem;
                text-align:center;
                @media only screen and (min-width:1280px) {
                    font-size:3rem;
                    text-align:left;
                }
            }
            p {
                font-size:2rem;
                text-align:center;
                @media only screen and (min-width:1280px) {
                    font-size:2.5rem;
                    text-align:left;
                }
            }
        }
    }
    @media only screen and (min-width:768px) {
            flex-direction: row;
            height:500px;
        }
`

const Hero = ({children,title,description}) => {
    return (
        <HeroWrapper>
            <div>
                <div>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
            <div>
                {children}
            </div>
        </HeroWrapper>
    )
}

export default Hero;
import React from 'react'
import styled from 'styled-components';


const SectionTitleWrapper = styled.h3`
    text-align:center;
    font-size:2.5rem;
    font-weight:500;
    margin: 50px 0;
    @media only screen and (min-width:768px) {
        font-size:3rem;
    }
`

const SectionTitle = ({children}) => {
    return (
        <SectionTitleWrapper>
            {children}
        </SectionTitleWrapper>
    )
}

export default SectionTitle;

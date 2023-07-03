import React from 'react'
import styled from 'styled-components'
import DropdownCategory from './DropdownCategory'

function NavbarSq3() {
  return (
    <DivContainer>
        <DivButtons>
        <DropdownCategory />
        <a href="">FIXTURE</a>
        <a href="">SANCIONES</a>
        <a href="">REGLAMENTO</a>
        </DivButtons>
    </DivContainer>
  )
}

export default NavbarSq3

const DivContainer = styled.div`
	position: relative;
	z-index: -3;
    background-color: rgb(208, 140, 30);
    width: 100%;
    height: 40px;
    margin-bottom: 50px;
`;

const DivButtons = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    
    a{
        text-decoration: none;
        color: white;
        font-size: .9rem;
        font-weight: 500;
    }
`
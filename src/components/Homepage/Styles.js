import styled from 'styled-components';

export const Cards = styled.div`
    background-color: #333333;
    border-radius: 7px;
    display:flex;
    flex-direction: column;
    align-items: center;
    width:250px;
    height: 300px;
    img{
        width: 175px;
        object-fit: contain;
        -webkit-transition: -webkit-transform .5s ease;
        transition: transform .5s ease;
        :hover {
            -webkit-transform: scale(1.1);
            transform: scale(1.2);
        }
    }    
`

export const CardsDiv = styled.div`
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    row-gap: 20px;
    flex-wrap: wrap;
    margin-left: 50px;
    margin-right: 50px;
`

export const P = styled.p`
    color: white;
    text-align: center;
`

export const H3 = styled.h3`
    color: white;
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    background: linear-gradient(#002e57 50%, #1a1a1a 50%);
`

export const Input = styled.input`
    width: 40vw;
    border: 1px solid black;
    border-radius: 5px;
    height: 40px;
    background-color: lightgray;
`

export const Button = styled.button `
    width: 90px;
    height: 45px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: yellow;
    :hover{
        background-color: #2866a1;
    }
`
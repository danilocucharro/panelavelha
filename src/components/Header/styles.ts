import styled from 'styled-components';

export const Container = styled.header`
    height: 100px;
    background: var(--green);
`

export const Content = styled.div`
    margin: auto;
    height: 100px;
    background: var(--green);
    align-items: center;
    display: flex;

`

export const BtnCadastro = styled.button`
    width: 100px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #33995d;
    height: 50px;
    margin-right: 5%;
    font-weight: bold;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8);
    }
`

export const BtnLogin = styled.button`
    width: 100px;
    border: none;
    border-radius: 10px;
    color: white;
    background-color: #33995d;
    height: 50px;
    font-weight: bold;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8);
    }
`

export const InserirReceita = styled.input`
    width: 80%;
    height: 50px;
    border: none;
    border-radius: 10px 0px 0px 10px;
    font-size: 20px;
`

export const BtnPesquisarReceita = styled.button`
    height: 50px;
    width: 20%;
    border: none;
    border-radius: 0px 10px 10px 0px;
    background-color: #33995d;
    color: white;

    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.8);
    }
`

export const NomeLogo = styled.label`
    color: white;
    font-weight: bold;
    font-size: 20px;
    margin-left: 5%;
    
`

export const ImgLogo = styled.img`
    height: 50px;
    margin-left: 1%
`

export const FormReceita = styled.form`
    width: 30%;
    margin-left: 10%;
    margin-right: 10%
`
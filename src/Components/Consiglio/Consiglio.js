import React from 'react';
import styled from 'styled-components'

const Consiglio = ({fortune, clickHandler}) => {
    const Div = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        padding: 2%;
    `
    const Button = styled.button`
        width: fit-content;
        cursor: pointer;
        padding: 1%;
        border-radius: 5px;
        background-color: lemonchiffon;
        border: 1px solid darkkhaki;
    `
    return (<Div>
        <h3>The fortune cookie says:</h3>
        <h1>{fortune}</h1>
        <Button onClick={clickHandler}>open another</Button>
        
    </Div>)
}

export default Consiglio
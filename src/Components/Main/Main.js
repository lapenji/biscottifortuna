import React, {useState} from 'react';
import Consiglio from '../Consiglio/Consiglio';
import styled from 'styled-components'
import paper from './img/ricepaper.png'

const Main = () => {
    const Div = styled.div`
        width: 500px;
        height: 400px;
        
        background-image: url(${paper});
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0.5cm;
        box-shadow: 0 0 0.5cm rgba(0,0,0,0.5);
        @media only screen and (max-width: 600px){
            margin-left: 5%;
            margin-right: 5%;
            max-height: 90%;
            max-width: 90%;
        }
        
    
    `
    const recuperaConsigli = async () => {
        const nuovoConsiglio = await fetch('https://fortunecookieapi.herokuapp.com/v1/cookie?fortuneId=&lottoId=&lessonId=&limit=');
        const jsonAto = await nuovoConsiglio.json()
        setConsiglio(jsonAto[0])
        setLoaded(true)
    }
    const clickHandler = () => {
        recuperaConsigli()
    }
    const [consiglio, setConsiglio] = useState(recuperaConsigli);
    const [loaded, setLoaded] = useState(false);
    return(
        <Div>
        {loaded ? <Consiglio fortune={consiglio.fortune.message} clickHandler={clickHandler}/> : <h1>Loading</h1>}
        </Div>
    )
}

export default Main
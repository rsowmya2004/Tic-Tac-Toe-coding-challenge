import React from 'react'
import './TicTacToe.css';
import tick from '../assets/tick1.webp';
import wrong from '../assets/wrong.png';

const TicTacToe = () => {
  return (
    <div className='main1'>
        <div className='box'>
            <h1 className='head1'>TIC-TAC-TOE</h1>
            
            <div className='he11'>
                <p className='he1'>PLAYER 1 WON!</p>
                <br />
                <br />
            </div>
            <div className='game'>
                <button className='bu1'><img src='tick'></img></button>
                
                <button className='bu1'></button>
                <button className='bu1'><img src='tick'></img></button>
                
            </div>
            <br />
            <div className='game'>
                <button className='bu1'><img src='wrong'></img></button>
                <button className='bu1'><img src='wrong'></img></button>
                <button className='bu1'><img src='tick'></img></button>

            </div>
            <br />
            <div className='game'>
                <button className='bu1'></button>
                <button className='bu1'><img src='wrong.png'></img></button>
                <button className='bu1'><img src='tick'></img></button>

            </div>
            <div>
                <button className='fin'>RESET</button>
            </div>



        </div>



    </div>
  )
}
export default TicTacToe
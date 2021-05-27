import React from 'react'
function Currency({ coin, onClick }) {
    return (
        <div className='coin-container' onClick={onClick}>
            <div className='coin-symbol'>
                <h2>{coin.symbol}</h2>
            </div>
            <div className='coin-information'>
                <p className='coin-name'>{coin.title}</p>
                <p className='coin-country'>Pais: {coin.title}</p>
                <p className='coin-code'>codigo: {coin.code}</p>
            </div>
        </div>
    )
}
export default React.memo(Currency)

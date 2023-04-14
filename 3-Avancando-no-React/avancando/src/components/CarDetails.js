import React from 'react'

function CarDetails({brand, km, color, newCar }) {
  return (
    <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {/* se a condição for verdadeira ira exibir este componente*/}
        {newCar && <p>Este Carro é novo!</p>}
    </div>
  )
}

export default CarDetails
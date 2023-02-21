import React from 'react'

function Container({children, myValue}) {
  return (
    <div>
        <h2>Esse é o Título do Container</h2>
        {children}
        <p>o valor é: {myValue}</p>

    </div>
  )
}

export default Container;
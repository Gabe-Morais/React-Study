import React from 'react'

function Fragment({propFragment}) {
  return (
    <>
        <h2>Primeiro Título</h2>
        <h3>Segundo Título</h3>
        <h4>{propFragment}</h4>
    </>
  )
}

export default Fragment;
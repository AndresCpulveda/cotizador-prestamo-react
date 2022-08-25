import React from 'react'

const Resultado = ({total, plazo, cantidad}) => ( 
    <div className='u-full-width resultado'>
      <h2>Resumen:</h2>
      <p>Cantidad solicitada: ${cantidad}</p>
      <p>A pagar en: {plazo} meses</p>
      <p>Su pago mensual es: ${(total / plazo).toFixed(2)}</p>
      <p>Total a pagar es: ${total.toFixed(2)}</p>

    </div> 
  )
 
export default Resultado;
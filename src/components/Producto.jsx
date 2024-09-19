import React from 'react'

export default function Producto({producto}) {

    const {id, nombre, precio, imagen} = producto
  return (
    <div className='border p-3 shadow bg-white'>
        <img 
            src={`/img/${imagen}.jpg`}
            alt={`imgane ${nombre}`}
            className='w-full'
        />
        <p className='text-lg font-bold'>{nombre}</p>
        <p className='text-gray-500'>${precio}</p>
    </div>
  )
}

import React from 'react'

export default function Categoria({categoria}) {

    const {icono, id, nombre} = categoria
  return (
    <div className='flex items-center gap-4 borde w-full p-3 hover:bg-green-300 cursor-pointer'>
        <img 
        alt="Imagen Icono"
        src={`/img/ico_${icono}.svg`}
        className='w-12'
        />

        <p className='text-lg'>{nombre}</p>
        
    </div>
  )
}

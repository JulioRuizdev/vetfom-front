import useQuiosco from "../hooks/useQuiosco"



export default function Categoria({categoria}) {

  const {handleClickCategoria} = useQuiosco()
  const {icono, id, nombre} = categoria
  return (
    <div className='flex items-center gap-4 borde w-full p-3 hover:bg-green-300 cursor-pointer'>
        <img 
        alt="Imagen Icono"
        src={`/img/ico_${icono}.svg`}
        className='w-12'
        />

        <button className='text-lg'
          type="button"
          onClick={() => handleClickCategoria(id)}
        >

          {nombre}
          </button>
        
    </div>
  )
}

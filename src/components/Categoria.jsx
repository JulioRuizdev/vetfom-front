import useQuiosco from "../hooks/useQuiosco"



export default function Categoria({categoria}) {

  const {handleClickCategoria, categoriaActual} = useQuiosco()
  const {icono, id, nombre} = categoria

  const resaltarCategoria = () => {
    categoriaActual.id === id ? "bg-green-300" : "bg-white"
  }
  return (
    <div className={`${resaltarCategoria()} flex items-center gap-4 borde w-full p-3 hover:bg-green-300 cursor-pointer`}>
      <button
        className='text-lg flex items-center gap-4 w-full'
        type="button"
        onClick={() => handleClickCategoria(id)}
      >
        <img 
          alt="Imagen Icono"
          src={`/img/ico_${icono}.svg`}
          className='w-12'
        />
        {nombre}
      </button>
    </div>
  )
}

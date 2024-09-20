import { formatearDinero } from "../helpers"
import useQuiosco from "../hooks/useQuiosco"

export default function Producto({producto}) {

    const { handleClickModal, handleSetProducto } = useQuiosco()
    const {id, nombre, precio, imagen} = producto


return (
    <div className='border p-3 shadow bg-white flex flex-col items-center'>
            <img 
                src={`/img/${imagen}.jpg`}
                alt={`imagen ${nombre}`}
                className='w-15 h-40 object-cover'
            />

            <div className='p-5 text-center'>
                <h3 className='text-2xl font-bold'>{nombre}</h3>
                <p className='t-5 font-black text-4xl text-amber-500'>{formatearDinero(precio) }</p>

                <button type="button" 
                className=" bg-indigo-600 hover:bg-indigo-800 text-white w-full p-3 rounded-lg mt-5 uppercase font-bold"
                onClick={() => {
                    handleClickModal();
                    handleSetProducto(producto);
                }}
                >
                    Agregar
                </button>
            </div>
    </div>
)
}

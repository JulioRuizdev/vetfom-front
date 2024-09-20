import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from "../helpers";
import { useState } from "react";


export default function ModalProducto() {

    const { producto, handleClickModal } = useQuiosco();
    const [cantidad, setCantidad] = useState(1);

return (
    <div className="md:flex gap-10 bg-white rounded-lg shadow-lg p-10 max-w-4xl mx-auto relative" style={{ width: '600px', height: '400px' }}>
        <button onClick={handleClickModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        </button>
        <div className="md:w-1/2">
            <img 
                src={`/img/${producto.imagen}.jpg`} 
                alt={`imagen ${producto.nombre}`} 
                className="w-full h-auto rounded-lg"
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
            />
        </div>
        <div className="md:w-1/2 flex flex-col justify-between">
            <div>
                <h1 className="text-4xl font-bold mb-4">
                    {producto.nombre}
                </h1>
                <p className="font-black text-5xl text-amber-500 mb-4">
                    {formatearDinero(producto.precio)}
                </p>
            </div>

            <div className="flex gap-4 mt-5">
                <button type="button"
                    onClick={() => {
                        if (cantidad <= 1) return
                        setCantidad(cantidad - 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
                <p className="text-3xl">{cantidad}</p>
                <button type="button"
                    onClick={() => {
                        if (cantidad >= 10) return
                        setCantidad(cantidad + 1)
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                </button>
            </div>

            <button 
                type="button"
                className="bg-indigo-600 hover:bg-indigo-800 text-white w-full p-3 rounded-lg mt-5 uppercase font-bold"
            >
                Añadir al carrito
            </button>
        </div>
    </div>
)
}

import { productos } from '../data/productos'
import Producto from '../components/Producto'
import useQuisco from '../hooks/useQuiosco'

export default function Inicio() {

  const {categoriaActual} = useQuisco()
  console.log(categoriaActual)

  return (
    <>
      <h1 className='text-4xl font-black'>{categoriaActual.nombre}</h1>
      <p className='text-2xl my-10'>Elige y personaliza tu pedido</p>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {productos.map(producto => (
          <Producto 
            key={producto.id} className='bg-white shadow rounded-lg'
            producto = {producto}
            />

        ))}
      </div>
    </>
  )
}

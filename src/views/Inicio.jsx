import { productos as data} from '../data/productos'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco'

export default function Inicio() {

  const { categoriaActual } = useQuiosco()
  
  const productos = categoriaActual.id === 1 
    ? data 
    : data.filter(producto => producto.categoria_id === categoriaActual.id)

  return (
    <>
      <h1 className='text-4xl font-black ml-2'>{categoriaActual.nombre}</h1>
      <p className='text-2xl my-10 ml-2'>Elige y personaliza tu pedido</p>

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

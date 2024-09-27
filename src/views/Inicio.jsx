import useSWR from 'swr'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco'
import ClienteAxios from '../config/axios'

export default function Inicio() {

  const { categoriaActual } = useQuiosco()

  const fetcher = () => ClienteAxios('/api/productos').then(data => data.data)
  const { data, error, isLoading } = useSWR('/api/productos', fetcher,{
    refreshInterval: 1000
  })
  
  if(isLoading) return <p>Cargando...</p>
  let productos;
  if (categoriaActual.id === 1) {
    productos = data.data;
  } else {
    productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id);
  }
  
  return (
    <>
      <h1 className='text-4xl font-black ml-2'>{categoriaActual.nombre}</h1>
      <p className='text-2xl my-10 ml-2'>Elige y personaliza tu pedido</p>

      <div className='grid grid-cols-1 px-2 md:grid-cols-2 xl:grid-cols-3 gap-4'>
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

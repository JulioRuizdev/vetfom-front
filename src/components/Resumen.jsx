import useQuiosco from "../hooks/useQuiosco"
import REsumenProducto from "./ResumenProducto";



export default function Resumen() {
  
  const { pedido } = useQuiosco();

  return (
    <aside className="md:w-72 h-screen overflow-y-scroll p-5">
      <h1 className="text-4xl font-black">
        Mi pedido
      </h1>
      <p className="text-lg my-5">
        Aqui veras el resumen y total de tu pedido
      </p>
      <div className="py-10">
        {pedido.lenght === 0 ? (
         <p className="text-center text-2xl">No hay productos en tu pedido aun</p> 
        ):
        (
          pedido.map(producto => (
            <REsumenProducto 
              key={producto.id}
              producto={producto}
            />
          ))
        )}

      </div>

      <p className="text-xl mt-10">
        Total: {''}
      </p>

      <form action="w-full">
        <div className="mt-5">
          <input type="submit" 
          className="bg-indigo-500 hover:bg-indigo-700 cursor-pointer uppercase font-bold text-white w-full text-cente px-5 py-2" value="Confirmar Pedido"/>
        </div>
      </form>

      </aside>
  )
}

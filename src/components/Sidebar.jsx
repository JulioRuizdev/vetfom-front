import Categoria from "./Categoria"
import { categorias } from "../data/categorias"

export default function Sidebar() {
  return (
    <aside className="md:w-72">
        <div className="md:p-4">
            <img
                className="w-40"
                src="img/vetfom.jpg"
            />
        </div>

        <div className="mt-10">
            {categorias.map(categoria => (
                <Categoria
                    key={categoria.id} 
                    categoria={categoria}

                />
            
            ))}

        </div>

        <div className="mt-10">
            <button
                className=" text-center bg-red-500 text-white p-2 w-full truncate"
            
            >Cerrar Sesión
            </button>
           </div>         
    </aside>
  )
}

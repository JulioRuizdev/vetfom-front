import useQuisco from "../hooks/useQuiosco"
import Categoria from "./Categoria"
import { useAuth } from "../hooks/useAuth";


export default function Sidebar() {
    const {categorias} = useQuisco();
    const {logout, user} = useAuth({middleware: 'auth'});


  return (
    <aside className="md:w-72">
        <div className="md:p-4">
            <img
                className="w-40"
                src="img/vetfom.jpg"
            />
        </div>

        <p className=" text-xl text-center">Hola: {user?.name}</p>

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
            onClick={logout}
            >Cerrar Sesión
            </button>
        </div>         
    </aside>
  )
}

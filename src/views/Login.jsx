import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
        <h1 className="text-4xl font-black">Iniciar Sesion</h1>
        <p>Para generar pedido debes iniciar sesion</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10" >
            <form>

                <div className="mb-4"> 
                    <label className="text-slate-800" htmlFor="name">
                        Nombre:</label> 
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Tu nombre"
                        className="w-full border border-gray-200 p-2 rounded-md"
                    />
            
                </div>
                <div className="mb-4"> 
                    <label className="text-slate-800" htmlFor="email">
                        Email:</label> 
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu email"
                        className="w-full border border-gray-200 p-2 rounded-md"
                    />
            
                </div>
                <div className="mb-4"> 
                    <label className="text-slate-800" htmlFor="password">
                        Password:</label> 
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Tu password"
                        className="w-full border border-gray-200 p-2 rounded-md"
                    />
            
                </div>
                <div className="mb-4"> 
                    <label className="text-slate-800" htmlFor="password_confirmation">
                        Repetir Password:</label> 
                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Repetir Password"
                        className="w-full border border-gray-200 p-2 rounded-md"
                    />
            
                </div>

                <input type="submit" value="Crear cuenta" className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded-md cursor-pointer" />
            </form>
        </div>

        <nav className="mt-5"> 
            <ul className="flex justify-center">
                <li className="mr-4">No tienes cuenta?
                    <Link to="/auth/registro" className="text-blue-500 hover:text-blue-700 ml-2">Crear cuenta</Link>
                </li>
                <li>
                    <Link to="#" className="text-blue-500 hover:text-blue-700">Olvide mi contraseña</Link>
                </li>
            </ul>
        </nav>
    </>

  )
}

import { Link } from 'react-router-dom';


export default function Registro() {
  return (
    <>
        <h1 className="text-4xl font-black mt-5">Crea tu cuenta</h1>
        <p>Completa el formulario</p>

        <div className="bg-white shadow-md rounded-md mt-5 px-5 py-10" >
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
                <li className="mr-4">Ya tienes Cuenta? 
                    <Link to="/auth/login" className="text-blue-500 hover:text-blue-700 ml-2">Iniciar sesión</Link>
                </li>
            </ul>
        </nav>

    </>



  )
}

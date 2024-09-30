import { Link } from 'react-router-dom';
import { createRef, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Alerta from '../components/Alerta';

export default function Login() {
    
    const emailRef = createRef();
    const passwordRef = createRef();

    const  [errores, setErrores] = useState([]);
    const {login} = useAuth({
        middleware: 'guest', 
        url: '/'
    });
    
    const handleSubmit = async e =>{
        e.preventDefault();


        const datos ={
            email: emailRef.current.value,
            password: passwordRef.current.value,

        }

        login(datos, setErrores);

    }
  return (
    <>
        <h1 className="text-4xl font-black">Iniciar Sesion</h1>
        <p>Para generar pedido debes iniciar sesion</p>

        <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10" >
            <form
                onSubmit={handleSubmit}
                noValidate
            >
                {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}

            
                <div className="mb-4"> 
                    <label className="text-slate-800" htmlFor="email">
                        Email:</label> 
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Tu email"
                        className="w-full border border-gray-200 p-2 rounded-md"
                        ref={emailRef}
                    />
            
                </div>
                <div className="mb-4"> 
                    <label className="text-slate-800" htmlFor="password">
                        Contraseña:</label> 
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Tu Contraseña"
                        className="w-full border border-gray-200 p-2 rounded-md"
                        ref={passwordRef}
                    />
            
                </div>

                <input type="submit" value="Iniciar Sesion" className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded-md cursor-pointer" />
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

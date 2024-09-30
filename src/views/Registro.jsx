import { Link } from 'react-router-dom';
import { createRef, useState } from 'react';
import ClienteAxios from '../config/axios';
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';



export default function Registro() {

    const nameRef = createRef();
    const phoneRef = createRef();
    const emailRef = createRef();
    const passwordRef = createRef();
    const passwordConfirmationRef = createRef();

    const  [errores, setErrores] = useState([]);
    const {register} = useAuth({middleware: 'guest', url: '/'});
    
    const handleSubmit = async e =>{
        e.preventDefault();


        const datos ={
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value

        }
        Registro(datos, setErrores);
    }




  return (
    <>
        <h1 className="text-4xl font-black mt-5">Crea tu cuenta</h1>
        <p>Completa el formulario</p>

        <div className="bg-white shadow-md rounded-md mt-5 px-5 py-10" >
            <form
                onSubmit={handleSubmit}
                noValidate
            >
                {errores ? errores.map((error, i) => <Alerta key={i}>{error}</Alerta>) : null}
                <div className="mb-4"> 
                    <label className="text-slate-800" htmlFor="name">
                        Nombre:</label> 
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Tu nombre completo"
                        className="w-full border border-gray-200 p-2 rounded-md"
                        ref={nameRef}
                    />
            
                </div>
                <div className="mb-4"> 
                    <label className="text-slate-800" htmlFor="phone">
                        Telefono:</label> 
                    <input
                        type="phone"
                        id="phone"
                        name="phone"
                        // size="10"
                        maxLength={9}
                        placeholder="Tu numero de telefono"
                        className="w-full border border-gray-200 p-2 rounded-md"
                        ref={phoneRef}
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
                        placeholder="Minimo 1 simbolo y 1 numero"
                        className="w-full border border-gray-200 p-2 rounded-md"
                        ref={passwordRef}
                    />
            
                </div>
                <div className="mb-4"> 
                    <label className="text-slate-800" htmlFor="password_confirmation">
                        Repetir Contraseña:</label> 
                    <input
                        type="password"
                        id="password_confirmation"
                        name="password_confirmation"
                        placeholder="Repetir Contraseña"
                        className="w-full border border-gray-200 p-2 rounded-md"
                        ref={passwordConfirmationRef}
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

import useSWR from "swr";
import { useEffect } from "react";
import ClienteAxios from "../config/axios";
import { useNavigate } from "react-router-dom";

export const useAuth = ({ middleware, url}) => {

    const token= localStorage.getItem('AUTH_TOKEN');
    const navigate = useNavigate();

    const {data: user, error, mutate} = useSWR('/api/user', () =>  
        ClienteAxios('/api/user', {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => { 
            throw Error(error?.response?.data?.errors);
        })
    )

    const login = async (datos, setErrores) => {

        try {
            const {data} = await ClienteAxios.post('/api/login', datos);
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrores([])
            await mutate();
   

        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrores(Object.values(error.response.data.errors));
            }
            console.error("Error en la solicitud:", error);
        }
    }

    const logout = async () => {
        try {
            await ClienteAxios.post('/api/logout', null, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem('AUTH_TOKEN');
            await mutate(undefined);
        } catch (error) {
            throw Error(error?.response?.data?.errors);
        }
    }

    const register = () => {}

    console.log(user);
    console.log(error);

    console.log('middleware', middleware);
    console.log('url', url);

    useEffect(() => {
        if (user && url && middleware === 'guest') {
            navigate(url)
        }
        if(middleware === 'auth' && error){
            navigate('/auth/login')
        }
    }, [user, error])

    console.log(middleware);

    return {
        login,
        logout,
        register,
        user,
        error
    }



}
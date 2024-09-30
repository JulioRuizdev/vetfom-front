import { createContext, useState, useEffect } from "react";
import { categorias as categoriasDB} from "../data/categorias"
import { toast } from "react-toastify";
import ClienteAxios from "../config/axios";

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategorialActual] = useState({})
    const [modal, setModal] = useState(false)
    const [producto, setProducto] = useState({})
    const [pedido, setPedido] = useState([])  
    const [total, setTotal] = useState(0) 
    

    useEffect(() => {
        const nuevototal = pedido.reduce((total, producto) => (producto.precio * producto.cantidad) + total, 0)
        setTotal(nuevototal)
    },[pedido])

    const obtenerCategorias = async () => {
        try {
            const {data} = await ClienteAxios('/api/categorias')
            console.log(data.data)
            setCategorias(data.data)
            setCategorialActual(data.data[0])
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerCategorias()
    }, [])

    const handleClickCategoria = (id) => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategorialActual(categoria)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleAgregarPedido = ({categoria_id, ...producto}) => {
        
        if(pedido.some( pedidoState => pedidoState.id === producto.id)){
            const pedidoActualizado= pedido.map(pedidoState => pedidoState.id === 
                producto.id ? producto : pedidoState)
            setPedido(pedidoActualizado)
            toast.success('Agregado al pedido')
        }else{
            setPedido([...pedido, producto])
            toast.success('Agregado al pedido')
        }

    }

    const handleEditarCantidad = id => {
        const productoActualizar = pedido.filter(producto => producto.id === id)[0]
        setProducto(productoActualizar)
        setModal(!modal)
    }

    const handleEliminarProductoPedido = id => {
        const pedidoActualizado = pedido.filter(producto => producto.id !== id)
        setPedido(pedidoActualizado)
        toast.error('Producto eliminado del pedido')
    }

    const handleSubmitNuevaOrden = async () => {
        const token= localStorage.getItem('AUTH_TOKEN');
        try {
            await ClienteAxios.post('/api/pedidos', {
                total
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }catch (error) {
            console.log(error)
            toast.error('Ocurrio un error al realizar el pedido')
        }
    }
        
    return (
        <QuioscoContext.Provider 
            value={{ 
                categorias,
                categoriaActual,
                handleClickCategoria,
                modal,
                handleClickModal,
                producto,
                handleSetProducto,
                pedido,
                handleAgregarPedido,
                handleEditarCantidad,
                handleEliminarProductoPedido,
                total,
                handleSubmitNuevaOrden
            }}>
        
        {children}</QuioscoContext.Provider>
    );
}

export { QuioscoProvider }

export default QuioscoContext
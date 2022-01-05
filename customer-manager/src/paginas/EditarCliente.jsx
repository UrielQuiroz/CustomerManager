import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Formulario from '../components/Formulario';

const EditarCliente = () => {

    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(false)

    const {id} = useParams();

    useEffect(() => {

        setCargando(!cargando);
        const obtenerClienteAPI = async () => {
            try {
                const url = `http://localhost:3004/clientes/${id}`
                const rpta = await fetch(url);
                const result = await rpta.json();
                setCliente(result);
            } catch (error) {
                console.log(error);
            }

            setCargando(false);
        }

        obtenerClienteAPI();
    }, [])

    return (
        <>
            <h1 className='font-black text-4xl text-blue-700'>Editar Cliente</h1>
            <p className='mt-3'>Utiliza este formulario para editar datos de un cliente.</p>
             
            <Formulario 
                cliente={cliente}
                cargando={cargando} />
        </>
    )
}

export default EditarCliente
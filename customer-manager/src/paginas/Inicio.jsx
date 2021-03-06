import { useEffect, useState } from "react";
import Cliente from "../components/Cliente";


const Inicio = () => {

    const [clientes, setClientes] = useState([])

    useEffect(() => {

        const obtenerClientesApi = async () => {
            try {

                const url = 'http://localhost:3004/clientes';
                const rpta = await fetch(url);
                const result = await rpta.json();
                setClientes(result);

            } catch (error) {
                console.log(error)
            }
        }

        obtenerClientesApi(); 

    }, [])


    const handleEliminar = async id => {
        const confirm =  window.confirm('Desea eliminar el registro?');
        if (confirm) {
            try {
                const url = `http://localhost:3004/clientes/${id}`;
                const rpta = await fetch(url, {
                    method: 'DELETE'
                })
                await rpta.json();

                const arrayClientes = clientes.filter( cliente => cliente.id !== id);
                setClientes(arrayClientes);

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <h1 className='font-black text-4xl text-blue-700'>Clientes</h1>
            <p className='mt-3'>Administra tus Clientes</p>

            <table className="w-full mt-5 table-auto shadow bg-white">
                <thead className="bg-blue-800 text-white">
                    <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Empresa</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    {clientes.map( cliente => (
                        <Cliente
                            key={cliente.id}
                            cliente={cliente}
                            handleEliminar={handleEliminar}
                        />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Inicio
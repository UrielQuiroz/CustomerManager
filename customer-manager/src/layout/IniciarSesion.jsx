import { Outlet } from 'react-router-dom';

const IniciarSesion = () => {
    return (
        <div>
            <h1>Desde Inicio de Sesión</h1>
            <Outlet />
        </div>
    )
}

export default IniciarSesion

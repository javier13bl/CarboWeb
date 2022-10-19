import { Link } from 'react-router-dom'
import errorPh from '../imgs/error.jpg'

const ErrorPage = () => {
    return (
        <section className='wrapperContent errorPage'>
            <div className='errorL'>
                <h1>Ooops!</h1>
                <h2>404 - Página no encontrada</h2>
                <p>Esta página no existe o fue removida.<br/>Te sugerimos regresar a la página principal.</p>
                <Link to={'/'}>Volver a Inicio</Link>
            </div>
            <div className='errorR'>
                <img src={errorPh}/>
            </div>
        </section>
    )
}

export default ErrorPage
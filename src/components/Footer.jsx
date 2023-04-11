import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer>
            <div className='wrapperContent'>
                <div className='footerTop'>
                    <h4>Carbo<span>web</span></h4>
                    <nav className='footerNav'>
                        <Link to={'/'}>Inicio</Link>
                        <Link to={'/nosotros'}>Nosotros</Link>
                        <Link to={'/productos'}>Productos</Link>
                        <Link to={'/sostenible'}>Sostenible</Link>
                        <Link to={'/contacto'}>Contáctanos</Link>
                    </nav>
                </div>
                <div className='footerMiddle'>
                    <p>Horario: Lun-Vie 08:00 - 18:00 / Sáb 08:00 - 12:00</p>
                    <p>Calle 1 #2-30</p>
                    <p>Colombia - Suramérica</p>
                </div>
                <div className='footerBottom'>
                    <p>&copy; Todos los derechos reservados, 2022.</p>
                    <a href='https://github.com/javier13bl'>Desarrollado por Javier Buitrago</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
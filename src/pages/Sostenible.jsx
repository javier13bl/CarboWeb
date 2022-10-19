import { Link } from 'react-router-dom'
import arboles from '../imgs/hero/arboles.jpg'
import refo1 from '../imgs/eco/refo1.jpg'
import refo2 from '../imgs/eco/refo2.jpg'
import refo3 from '../imgs/eco/refo3.jpg'
import via1 from '../imgs/eco/via1.jpg'
import via2 from '../imgs/eco/via2.jpg'
import via3 from '../imgs/eco/via3.jpg'
import Marquesina from '../components/Marquesina'

const Sostenible = () => {
    return (
        <main className='verde'>
            <section className='hero wrapperContent'>
                <div className='heroTitle'>
                    <h1>Carbo<span>ex</span>co</h1>
                    <h4><span>Ambiental</span></h4>
                </div>
                <div className='heroImg'>
                    <div className='circle'></div>
                    <div className='heroContent'>
                        <h2>Sostenible</h2>
                        <p>Nuestra empresa está comprometida con el cuidado del medio ambiente.</p><p>Con la ayuda de todo nuestro personal calificado y comprometido, tomamos cuidado de todas las especies de nuestra región y preservamos nuestro entorno.</p>
                    </div>
                    <img src={arboles}/>
                </div>
            </section>
            <Marquesina>
                &nbsp;Desarrollo con enfoque &#0126; Producción y consumo responsable &#0126; Filosofía sostenible &#0126; Gestión ambiental &#0126;
            </Marquesina>
            <section className='fondoGris'>
                <h2>Conciencia</h2>
                <div className='ecoIntro wrapperContent'>
                    <div className='ecoBg'>
                        <p>CARBOEXCO, consciente de su compromiso social y de conservación del  ambiente, establece como directriz el uso racional y eficiente de los recursos naturales,</p>
                    </div>
                    <div className='ecoNoBg'>
                        <p>a través de la innovación y mejoramiento continuo de sus procesos, con el propósito de alcanzar el desarrollo sostenible de la región, cumpliendo con la normatividad ambiental vigente.</p>
                    </div>
                </div>
            </section>
            <section className='fondoBlanco'>
                <h2>Programas</h2>
                <div className='wrapper gridEmpresa'>
                    <div className='empresaTexto'>
                        <div className='texto1'>
                            <div id='cuadrado'></div>
                            <h4>Programa</h4>
                        </div>
                        <h3>Reforestal</h3>
                        <p>La reforestación es un programa pilar para la ejecución de la gestión ambiental en la planta de coquización.<br/>La planeación de los trabajos que se han realizado, es por la necesidad que genera la vegetación existente y se debe ejecutar su mantenimiento respectivo para tener las barreras vivas necesarias.</p>
                        <Link to={'/nosotros'}>Contáctanos</Link>
                    </div>
                    <div className='empresaItem'>
                        <img src={refo1}/>
                        <h3>Ecosistema</h3>
                        <p>Sistema biológico constituido por una comunidad de organismos vivos y el medio físico donde se relacionan.</p>
                    </div>
                    <div className='empresaItem'>
                        <img src={refo2}/>
                        <h3>Conservación</h3>
                        <p>Es un tema central en el contexto de cambio climático.</p>
                    </div>
                    
                    <div className='empresaItem'>
                        <img src={refo3}/>
                        <h3>Vegetación</h3>
                        <p>Conjunto de plantas propias de una zona o un lugar o existentes en un terreno determinado.</p>
                    </div>
                </div>
                <div className='wrapper gridEmpresa'>
                    <div className='empresaTexto'>
                        <div className='texto1'>
                            <div id='cuadrado'></div>
                            <h4>Programa</h4>
                        </div>
                        <h3>De vías</h3>
                        <p>Las diferentes actividades de mantenimiento vial, se han venido implementando a través del tiempo, debido a la necesidad de conservar un buen estado de funcionamiento y preservar las inversiones realizadas en su construcción o rehabilitación.</p>
                        <Link to={'/nosotros'}>Contáctanos</Link>
                    </div>
                    <div className='empresaItem'>
                        <img src={via1}/>
                        <h3>Mantenimiento</h3>
                        <p>Los mantenimientos viales se clasifican normalmente en rutinarias y periódicas, dependiendo de la frecuencia con la cuál se realicen.</p>
                    </div>
                    <div className='empresaItem'>
                        <img src={via2}/>
                        <h3>Rehabilitación</h3>
                        <p>Consisten en la eliminación de basura, piedras, desperdicios y obstáculos (como pequeños derrumbes) que estén dentro del derecho vial.</p>
                    </div>
                    
                    <div className='empresaItem'>
                        <img src={via3}/>
                        <h3>Construcción</h3>
                        <p>Permiten el buen funcionamiento de las obras de drenaje, una buena visibilidad a los conductores y facilidad en la circulación.<br/> Brindan comodidad y seguridad a los usuarios.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Sostenible
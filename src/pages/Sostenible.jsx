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
                    <h1>Carbo<span>web</span></h1>
                    <h4><span>Ambiental</span></h4>
                </div>
                <div className='heroImg'>
                    <div className='circle'></div>
                    <div className='heroContent'>
                        <h2>Sostenible</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ullamcorper diam.</p>
                        <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit.</span> Aenean eu ullamcorper diam. Nullam tempor, ante et rhoncus lacinia, turpis urna semper mauris.</p>
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
                        <p>CARBOWEB, consciente de su compromiso social y de conservación del  ambiente, establece como directriz el uso racional y eficiente de los recursos naturales,</p>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ullamcorper diam. Nullam tempor, ante et rhoncus lacinia, turpis urna semper mauris, <span>vel eleifend ante neque eu massa.</span></p>
                        <Link to={'/nosotros'}>Contáctanos</Link>
                    </div>
                    <div className='empresaItem'>
                        <img src={refo1}/>
                        <h3>Ecosistema</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ullamcorper diam.</p>
                    </div>
                    <div className='empresaItem'>
                        <img src={refo2}/>
                        <h3>Conservación</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ullamcorper diam.</p>
                    </div>
                    
                    <div className='empresaItem'>
                        <img src={refo3}/>
                        <h3>Vegetación</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ullamcorper diam.</p>
                    </div>
                </div>
                <div className='wrapper gridEmpresa'>
                    <div className='empresaTexto'>
                        <div className='texto1'>
                            <div id='cuadrado'></div>
                            <h4>Programa</h4>
                        </div>
                        <h3>De vías</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ullamcorper diam. Lorem ipsum dolor sit amet.</p>
                        <Link to={'/nosotros'}>Contáctanos</Link>
                    </div>
                    <div className='empresaItem'>
                        <img src={via1}/>
                        <h3>Mantenimiento</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ullamcorper diam.</p>
                    </div>
                    <div className='empresaItem'>
                        <img src={via2}/>
                        <h3>Rehabilitación</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ullamcorper diam.</p>
                    </div>
                    
                    <div className='empresaItem'>
                        <img src={via3}/>
                        <h3>Construcción</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ullamcorper diam.</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Sostenible
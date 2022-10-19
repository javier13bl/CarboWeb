import React, { useState } from 'react';
import ns from '../imgs/ns.png'
import nsCol from '../imgs/nsCol.png'
import planetA from '../imgs/pA.png'
import planetB from '../imgs/pB.png'
import tunel from '../imgs/hero/tunel.jpg'
import Marquesina from '../components/Marquesina';

const Nosotros = () => {
    const [misionClicked, setMisionClicked] = useState(false);
    const [misionBtnClass, setMisionBtnClass] = useState('btnClicked');
    const [misionPlanetClass, setMisionPlanetClass] = useState('planeta visible');
    const [misionTextClass, setMisionTextClass] = useState('texto visible');

    const [visionClicked, setVisionClicked] = useState(false);
    const [visionBtnClass, setVisionBtnClass] = useState('');
    const [visionPlanetClass, setVisionPlanetClass] = useState('planeta hidden');
    const [visionTextClass, setVisionTextClass] = useState('texto hidden');

    const updateMisVis = () => {
        if (misionClicked) {
            setMisionBtnClass('btnClicked')
            setMisionPlanetClass('planeta visible')
            setMisionTextClass('visible')
            setVisionClicked(!misionClicked)
            setVisionBtnClass('')
            setVisionPlanetClass('planeta hidden')
            setVisionTextClass('hidden')
        } else {
            setVisionBtnClass('btnClicked')
            setVisionPlanetClass('planeta visible')
            setVisionTextClass('visible')
            setMisionClicked(!visionClicked)
            setMisionBtnClass('')
            setMisionPlanetClass('planeta hidden')
            setMisionTextClass('hidden')
        }
        setMisionClicked(!misionClicked)
    }

    return (
        <main className='cafe'>
            <section className='hero wrapperContent'>
                <div className='heroTitle'>
                    <h1>carbo<span>ex</span>co</h1>
                    <h4><span>empresa</span></h4>
                </div>
                <div className='heroImg'>
                    <div className='circle'></div>
                    <div className='heroContent'>
                        <h2>Nosotros</h2>
                        <p>CARBOEXCO C.I Ltda. define una <span>estructura organizacional</span> jerárquica, ambigua, pero altamente funcional.</p>
                        <p>Su efectividad ha logrado mantener en el tiempo a la compañía, cuyo objetivo principal ha sido mantenerse <span>competitivamente</span> como uno de los principales <span>productores de coque.</span></p>
                    </div>
                    <img src={tunel}/>
                </div>
            </section>
            <Marquesina>
                &nbsp;mercado internacional &#0126; suministro confiable &#0126; excelente calidad &#0126; líder en el sector &#0126;
            </Marquesina>
            <section className='fondoBlanco'>
                <h2>Perspectiva</h2>
                <div className='wrapperContent perspectiva'>
                    <img src={planetA} className={misionPlanetClass}/>
                    <img src={planetB} className={visionPlanetClass}/>
                    <div className='perspBtns'>
                        <button type='button' className={misionBtnClass} onClick={updateMisVis}>Misión</button>
                        <button type='button' className={visionBtnClass} onClick={updateMisVis}>Visión</button>
                    </div>
                    <div className='perspInfo'>
                        <div className={misionTextClass}>
                            <p>Suministrar de manera confiable, a los mercados internacionales, <span>coque de excelente calidad</span> producido con mezclas de carbones cuidadosamente seleccionados.</p>
                            <p>Garantizando un producto que satisfaga los requerimientos de la industria de ferroaleaciones, con un desarrollo ambiental, social y económico. Cumpliendo con las normas constitucionales e institucionales; <span>comprometidos con el desarrollo</span> de Norte de Santander y Colombia.</p>
                        </div>
                        <div className={visionTextClass}>
                            <p>En el año 2030 estar posicionados como la empresa líder del sector, manteniendo la <span>dinámica de crecimiento y calidad</span> obtenida hasta ahora, para una proyección internacional como <span>proveedor seguro y competitivo.</span></p>
                        </div>
                    </div>

                </div>
            </section>
            <section className='bateriasBg'>
                <div className='datosExco wrapperContent'>
                    <h2>Reconocimiento por:</h2>
                    <div className='panel'>
                        <h3>Trayecto</h3>
                        <p>Más de 40 años de experiencia.</p>
                    </div>
                    <div className='panel'>
                        <h3>Calidad</h3>
                        <p>Coque de Nivel Mundial. Certificación SGS.</p>
                    </div>
                    <div className='panel'>
                        <h3>Mercado</h3>
                        <p>Nacional e Internacional.</p>
                    </div>
                    <div className='panel'>
                        <h3>Producto</h3>
                        <p>Coque Reactivo de ultra bajo fósforo.</p>
                    </div>
                    <div className='panel'>
                        <h3>Capacidad</h3>
                        <p>Aprox. 12.000 Toneladas/Mes.</p>
                    </div>
                    <div className='panel'>
                        <h3>Ubicación</h3>
                        <p>Norte de Santander, Colombia.</p>
                    </div>
                    <div className='panel'>
                        <h3>Minería</h3>
                        <p>Más de 8 títulos mineros.</p>
                    </div>
                    <h4>Comprometidos con el futuro</h4>
                </div>
            </section>
            <section className='fondoBlanco'>
                <h2>Proyectos Mineros</h2>
                <div className='pMinasBg wrapperContent'>
                    <div className='pMinas'>
                        <div className='pMinasImg'>
                            <img src={nsCol}/>
                            <h3>Colombia</h3>
                        </div>
                        <div className='pMinasImg'>
                            <img src={ns}/>
                            <h3>Norte de Santander</h3>
                        </div>
                    </div>
                    <div className='pLocacion'>
                        <h3>Información</h3>
                        <ol>
                            <li>Estrella 2</li>
                            <li>Estrella 1</li>
                            <li>La Contenta</li>
                            <li>Casa Zinc</li>
                            <li>Rancho Grande</li>
                            <li>San Jose I</li>
                            <li>San Jose II</li>
                            <li>Delicias</li>
                            <li>Toledo</li>
                            <li>Toledo I</li>
                            <li>Toledo II</li>
                        </ol>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Nosotros
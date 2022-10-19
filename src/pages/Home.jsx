import { Link } from 'react-router-dom'
import Marquesina from '../components/Marquesina'
import coque from '../imgs/hero/coque.jpg'
import metCoke from '../imgs/coque/metCoke.png'
import cokeDust from '../imgs/coque/cokeDust.png'
import altoHorno from '../imgs/coque/altoHorno.png'
import lab from '../imgs/empresa/lab.jpg'
import inter from '../imgs/empresa/inter.jpg'
import produ from '../imgs/empresa/produ.jpg'

const Home = () => {
    return (
        <main>
            <section className='hero wrapperContent'>
                <div className='heroTitle'>
                    <h1>carbo<span>ex</span>co</h1>
                    <h4>desde <span>1982</span></h4>
                </div>
                <div className='heroImg'>
                    <div className='circle'></div>
                    <div className='heroContent'>
                        <h2>Bienvenidos</h2>
                        <p>CARBOEXCO C.I. LTDA. es una empresa industrial ubicada en Norte de Santander, <span>Colombia.</span></p>
                        <p>Fundada por el economista <span>Dr. Jesús Andelfo Villamizar Peñaranda</span>, cuenta con más de 40 años de experiencia en la producción de <span>coque metalúrgico reactivo.</span></p>
                    </div>
                    <img src={coque}/>
                </div>
            </section>
            <Marquesina>
                &nbsp;coque metalúrgico reactivo &#0126; coque para el alto horno &#0126; coque siderúrgico &#0126; Minería de Carbón &#0126;
            </Marquesina>
            <section className='fondoBlanco'>
                <h2>Productos</h2>
                <div className='gridProductos'>
                    <div className='productoHome'>
                        <div className='productoHomeImg'>
                            <img src={metCoke} />
                        </div>
                        <div className='productoHomeInfo'>
                            <div id='cuadrado'></div>
                            <div>
                                <h3>Metalúrgico Reactivo</h3>
                                <p>De bajo nivel de Fósforo.</p>
                            </div>
                        </div>
                    </div>
                    <div className='productoHome'>
                        <div className='productoHomeImg'>
                            <img src={altoHorno} />
                        </div>
                        <div className='productoHomeInfo'>
                            <div id='cuadrado'></div>
                            <div>
                                <h3>Alto Horno</h3>
                                <p>Producción de Acero.</p>
                            </div>
                        </div>
                    </div>
                    <div className='productoHome'></div>
                    <div className='productoHome'>
                        <span>
                            <p>+</p>
                            <Link to={'/productos'}>Detalles</Link>
                        </span>
                    </div>
                    <div className='productoHome'>
                        <div className='productoHomeImg'>
                            <img src={metCoke} />
                        </div>
                        <div className='productoHomeInfo'>
                            <div id='cuadrado'></div>
                            <div>
                                <h3>Siderúrgico</h3>
                                <p>Combustible, agente reductor.</p>
                            </div>
                        </div>
                    </div>
                    <div className='productoHome'>
                        <div className='productoHomeImg'>
                            <img src={cokeDust} />
                        </div>
                        <div className='productoHomeInfo'>
                            <div id='cuadrado'></div>
                            <div>
                                <h3>Finos de Coque</h3>
                                <p>Sinterización.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='fondoGris'>
                <h2>Empresa</h2>
                <div className='wrapper gridEmpresa'>
                    <div className='empresaTexto'>
                        <div className='texto1'>
                            <div id='cuadrado'></div>
                            <h4>A la vanguardia con</h4>
                        </div>
                        <h3>Enfoque</h3>
                        <p>Tenemos el propósito de producir y distribuir, a <span>nivel nacional e internacional</span>, carbones térmicos y coquizables de alta calidad; siguiendo con el ideal de mejoramiento continuo y la proyección empresarial.</p>
                        <Link to={'/nosotros'}>Conoce más</Link>
                    </div>
                    <div className='empresaItem'>
                        <img src={produ}/>
                        <h3>Producción</h3>
                        <p>Compañía líder en la producción de Coque Reactivo de ultra bajo fósforo.<br/>Contamos con una capacidad mensual de 12.000 toneladas aproximadamente.</p>
                    </div>
                    <div className='empresaItem'>
                        <img src={inter}/>
                        <h3>Internacional</h3>
                        <p>Más de 40 años de experiencia en el mercado Nacional e Internacional.<br/>Fortaleciendo el sector del Coque de bajo fósforo de Colombia y Norte de Santander.</p>
                    </div>
                    <div className='empresaItem'>
                        <img src={lab}/>
                        <h3>Calidad</h3>
                        <p>Nuestros productos cumplen con las normas y reglamentos bajo la Certificación SGS.<br/> La calidad de nuestro Coque resalta a Nivel Mundial.</p>
                    </div>
                </div>
            </section>
            <section className='fondoBlanco'>
                <h2>Gestión Ambiental</h2>
                <div className='ecoIntro wrapperContent'>
                    <div className='ecoBg'>
                        <Link to={'/sostenible'}>Nuestro compromiso &#10142;</Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home
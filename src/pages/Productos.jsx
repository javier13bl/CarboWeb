import coalmine from '../imgs/hero/coalmine.jpg'
import metCoke from '../imgs/coque/metCoke.png'
import cokeDust from '../imgs/coque/cokeDust.png'
import altoHorno from '../imgs/coque/altoHorno.png'
import Marquesina from '../components/Marquesina'

const Productos = () => {
    return (
        <main className='gris'>
            <section className='hero wrapperContent'>
                <div className='heroTitle'>
                    <h1>Carbo<span>web</span></h1>
                    <h4><span>Productos</span></h4>
                </div>
                <div className='heroImg'>
                    <div className='circle'></div>
                    <div className='heroContent'>
                        <h2>Calidad</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ullamcorper diam.</p>
                        <p>Lorem ipsum dolor sit amet, <span>consectetur adipiscing elit.</span> Aenean eu ullamcorper diam. Nullam tempor, ante et rhoncus lacinia, turpis urna semper mauris, vel eleifend ante neque eu massa.</p>
                    </div>
                    <img src={coalmine}/>
                </div>
            </section>
            <Marquesina>
                &nbsp;metalúrgico reactivo &#0126; de alto horno &#0126; siderúrgico &#0126; finos de coque &#0126;
            </Marquesina>
            <section className='fondoBlanco'>
                <h2>Coque</h2>
                <article className='fondoBlanco'>
                    <div className='wrapperContent coqueBlanco'>
                        <span>Coque</span>
                        <div className='coqueInfo'>
                            <h3>metalúrgico reactivo</h3>
                            <div className='coqueUses'>
                                <div className='uso'>
                                    <div className='usoTitle'>
                                        <div id='cuadrado'></div>
                                        <h4>Usos</h4>
                                    </div>
                                    <p>Producción de Carburo/Carbonato de Calcio, Ferromanganeso, Ferrocromo, Ferrosilicomanganeso.</p>
                                    <p>Alta calidad en la producción de Ferrocromo por su bajo nivel de Fósforo.</p>
                                </div>
                                <img src={metCoke} />
                            </div>
                            <table className='coqueTable'>
                                <tbody>
                                    <tr>
                                        <th>Humedad</th>
                                        <th>Ceniza</th>
                                        <th>Azufre</th>
                                        <th>Materia volátil</th>
                                        <th>Carbón fijo</th>
                                    </tr>
                                    <tr>
                                        <td>6% máx.</td>
                                        <td>9.5 - 12% máx.</td>
                                        <td>0.75 - 0.85%</td>
                                        <td>0.8 - 2.0%</td>
                                        <td>88 - 90%</td>
                                    </tr>
                                    <tr>
                                        <th>Fósforo</th>
                                        <th>CSR</th>
                                        <th>CRI</th>
                                        <th>Tamaño</th>
                                        <th>Tamaño</th>
                                    </tr>
                                    <tr>
                                        <td>0.005 máx.</td>
                                        <td>55 - 63</td>
                                        <td>20 - 28</td>
                                        <td>Personalizado</td>
                                        <td>5 - 30mm, 10 - 40mm, 20 - 50mm, 15 - 60mm.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
                <article className='fondoGris'>
                    <div className='wrapperContent coqueGris'>
                        <span>coque</span>
                        <div className='coqueInfo'>
                            <h3>alto horno</h3>
                            <div className='coqueUses'>
                                <div className='uso'>
                                    <div className='usoTitle'>
                                        <div id='cuadrado'></div>
                                        <h4>Usos</h4>
                                    </div>
                                    <p>Producción de Acero.</p>
                                </div>
                                <img src={altoHorno} />
                            </div>
                            <table className='coqueTable'>
                                <tbody>
                                    <tr>
                                        <th>Humedad</th>
                                        <th>Ceniza</th>
                                        <th>Azufre</th>
                                        <th>Materia volátil</th>
                                        <th>Carbón fijo</th>
                                    </tr>
                                    <tr>
                                        <td>2 - 6% máx.</td>
                                        <td>10 - 13%</td>
                                        <td>0.75 - 0.85%</td>
                                        <td>0.5 - 2.0%</td>
                                        <td>87 - 90%</td>
                                    </tr>
                                    <tr>
                                        <th>Fósforo</th>
                                        <th>CSR</th>
                                        <th>CRI</th>
                                        <th>M+40</th>
                                        <th>M+10</th>
                                    </tr>
                                    <tr>
                                        <td>0.050 máx.</td>
                                        <td>65%</td>
                                        <td>22%</td>
                                        <td>80% min.</td>
                                        <td>8-10 || 28 - 80mm, 30 - 80mm, 40 - 100mm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
                <article className='fondoBlanco'>
                    <div className='wrapperContent coqueBlanco'>
                        <span>Coque</span>
                        <div className='coqueInfo'>
                            <h3>siderúrgico</h3>
                            <div className='coqueUses'>
                                <div className='uso'>
                                    <div className='usoTitle'>
                                        <div id='cuadrado'></div>
                                        <h4>Usos</h4>
                                    </div>
                                    <p>Combustible, agente reductor y soporte para otras materias primas en la fabricación de hierro.</p>
                                </div>
                                <img src={metCoke} />
                            </div>
                            <table className='coqueTable'>
                                <tbody>
                                    <tr>
                                        <th>Humedad</th>
                                        <th>Ceniza</th>
                                        <th>Azufre</th>
                                        <th>Materia volátil</th>
                                        <th>Carbón fijo</th>
                                    </tr>
                                    <tr>
                                        <td>5 - 6% máx.</td>
                                        <td>10 - 13%</td>
                                        <td>0.75 - 0.85%</td>
                                        <td>1.2 - 1.9%</td>
                                        <td>86 - 90%</td>
                                    </tr>
                                    <tr>
                                        <th>Fósforo</th>
                                        <th>CSR</th>
                                        <th>CRI</th>
                                        <th>M+40</th>
                                        <th>M+10</th>
                                    </tr>
                                    <tr>
                                        <td>0.050 máx.</td>
                                        <td>65%</td>
                                        <td>Menor a 26%</td>
                                        <td>80% min.</td>
                                        <td>8 - 10 || 25 - 80mm, 30 - 80mm, 40 - 100mm.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
                <article className='fondoGris'>
                    <div className='wrapperContent coqueGris'>
                        <span>coque</span>
                        <div className='coqueInfo'>
                            <h3>Finos de coque</h3>
                            <div className='coqueUses'>
                                <div className='uso'>
                                    <div className='usoTitle'>
                                        <div id='cuadrado'></div>
                                        <h4>Usos</h4>
                                    </div>
                                    <p>Sinterización.</p>
                                    <div className='usoTitle'>
                                        <div id='cuadrado'></div>
                                        <h4>Tamaño</h4>
                                    </div>
                                    <p>0 - 6mm.</p>
                                </div>
                                <img src={cokeDust} />
                            </div>
                            <table className='coqueTable'>
                                <tbody>
                                    <tr>
                                        <th>Humedad</th>
                                        <th>Ceniza</th>
                                        <th>Azufre</th>
                                        <th>Materia volátil</th>
                                        <th>Carbón fijo</th>
                                    </tr>
                                    <tr>
                                        <td>8 - 9%</td>
                                        <td>15%</td>
                                        <td>0.85 - 1%</td>
                                        <td>4 - 6%</td>
                                        <td>75 - 78%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    )
}

export default Productos
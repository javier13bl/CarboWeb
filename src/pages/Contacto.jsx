import { Form, useActionData } from 'react-router-dom';
import Formulario from '../components/Formulario';

export async function action({request}) {
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    const email = formData.get('email')

    // VALIDACION
    const errores = []
    if (Object.values(datos).includes('')) {
        errores.push('Todos los campos son obligatorios')
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
    if (!regex.test(email)) {
        errores.push('El email no es válido')
    }

    // RETORNAR DATOS SI HAY ERRORES
    if (Object.keys(errores).length) {
        return errores
    }
}

const Contacto = () => {
    const errores = useActionData()

    return (
        <main>
            <section className='fondoBlanco'>
                <div className='contacto wrapperContent'>
                    <div className='contactoForm'>
                        <h1>Contáctanos</h1>
                        <h4>¡A nuestro equipo le gustaría saber de ti!</h4>
                        <Form
                            method='POST'
                            noValidate
                        >
                            <Formulario/>
                            {errores?.length && errores.map((error, i) => (
                                <p key={i} className='errorMsj'>{error}</p>
                            ))}
                            <input
                                type='submit'
                                className='contactoSubmit'
                                value='Enviar Mensaje'
                            />
                        </Form>
                    </div>
                    <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3224.6601811075957!2d-115.01789122559568!3d36.077391808112594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d0b89793735f%3A0x82738f1bb7cadcb8!2s712%20Red%20Bark%20Ln%2C%20Henderson%2C%20NV%2089011%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sco!4v1681253874008!5m2!1ses-419!2sco" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <section className='fondoGris'>
                <h2>Visita nuestras instalaciones</h2>
                <div className='visita'>
                    <h3>Avenida Siempre Viva 742</h3>
                    <h3>Colombia Tierra Querida</h3>
                    <h3>Horario: Lun-Vie 08:00 - 18:00 / Sáb 08:00 - 12:00</h3>
                </div>
            </section>
        </main>
    )
}

export default Contacto
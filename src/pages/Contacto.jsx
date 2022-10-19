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
                    <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15808.303058219988!2d-72.51092313406157!3d7.887142307998901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e664582efb4f81d%3A0x64c4e4f975b0d800!2sCarboexco%20C.I.%20Ltada.!5e0!3m2!1ses-419!2sco!4v1665617869906!5m2!1ses-419!2sco" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
            <section className='fondoGris'>
                <h2>Visita nuestras instalaciones</h2>
                <div className='visita'>
                    <h3>Calle 10 #3-42, Banco Santander, Oficina 703</h3>
                    <h3>Cúcuta, Norte de Santander, Colombia - América del Sur</h3>
                    <h3>Horario: Lun-Vie 08:00 - 18:00 / Sáb 08:00 - 12:00</h3>
                </div>
            </section>
        </main>
    )
}

export default Contacto
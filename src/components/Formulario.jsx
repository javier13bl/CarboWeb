import React from 'react'

const Formulario = () => {
    return (
        <>
            <div className='datoRow'>
                <div className='datoColumn'>
                    <label htmlFor='nombre'>Nombre:</label>
                    <input
                        id='nombre'
                        type='text'
                        placeholder='Tu Nombre'
                        name='nombre'
                    />
                </div>
                <div className='datoColumn'>
                    <label htmlFor='apellido'>Apellido:</label>
                    <input
                        id='apellido'
                        type='text'
                        placeholder='Tu Apellido'
                        name='apellido'
                    />
                </div>
            </div>
            <div className='datoRow'>
                <div className='datoColumn'>
                    <label htmlFor='empresa'>Empresa:</label>
                    <input
                        id='empresa'
                        type='text'
                        placeholder='Tu Empresa'
                        name='empresa'
                    />
                </div>
                <div className='datoColumn'>
                    <label htmlFor='pais'>País:</label>
                    <input
                        id='pais'
                        type='text'
                        placeholder='COL'
                        name='pais'
                    />
                </div>
            </div>
            <div className='datoColumn'>
                <label htmlFor='email'>Email:</label>
                <input
                    id='email'
                    type='email'
                    placeholder='tu@empresa.com'
                    name='email'
                />
            </div>
            <div className='datoColumn'>
                <label htmlFor='telefono'>Teléfono:</label>
                <input
                    id='telefono'
                    type='tel'
                    placeholder='+57 (333) 000-0000'
                    name='telefono'
                />
            </div>
            <div className='datoColumn'>
                <label htmlFor='mensaje'>Mensaje:</label>
                <textarea
                    as='textarea'
                    id='mensaje'
                    type='text'
                    name='mensaje'
                />
            </div>
        </>
    )
}

export default Formulario
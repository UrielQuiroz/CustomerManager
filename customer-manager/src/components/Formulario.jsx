import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

const Formulario = () => {

    const handleSubmit = (valores) => {
        console.log(valores);
    }
    
    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 m-auto'>
            <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>Agregar Cliente</h1>

            <Formik
                initialValues={{
                    nombre: '',
                    empresa: '',
                    email: '',
                    telefono: '',
                    notas: '',

                }}

                onSubmit={ (values) => {
                    handleSubmit(values);
                }} >
                    {() => (

                        <Form className='mt-10'>

                            <div className='mb-4'>
                                <label htmlFor='nombre' className='text-gray-800'>Nombre</label>
                                <Field
                                    id='nombre'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    type='text'
                                    placeholder='Nombre del Cliente'
                                    name='nombre' />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor='empresa' className='text-gray-800'>Empresa</label>
                                <Field
                                    id='empresa'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    type='text'
                                    placeholder='Empresa del Cliente'
                                    name='empresa' />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor='email' className='text-gray-800'>E-mail</label>
                                <Field
                                    id='email'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    type='email'
                                    placeholder='E-mail del Cliente'
                                    name='email' />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor='telefono' className='text-gray-800'>Telefono</label>
                                <Field
                                    id='telefono'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    type='tel'
                                    placeholder='Telefono del Cliente'
                                    name='telefono' />
                            </div>

                            <div className='mb-4'>
                                <label htmlFor='notas' className='text-gray-800'>Notas</label>
                                <Field
                                    as='textarea'
                                    id='notas'
                                    className='mt-2 block w-full p-3 bg-gray-100 h-40'
                                    type='text'
                                    placeholder='Notas del Cliente'
                                    name='notas' />
                            </div>
                            
                            <input 
                                type="submit"
                                value='Agregar Cliente'
                                className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg' />

                        </Form>
                    )}
            </Formik>

        </div>
    )
}

export default Formulario

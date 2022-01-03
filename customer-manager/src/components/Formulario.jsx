import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';

const Formulario = () => {

    const nuevoCliemteSchema = Yup.object().shape({
        nombre: Yup.string()
                    .min(3, 'El Nombre es muy Corto')
                    .max(20, 'El Nombre es muy Largo')
                    .required('El Nombre del Cliente es Obligatorio'),
        empresa: Yup.string()
                    .required('El Nombre de la Empresa es Obligatorio'),
        email: Yup.string()
                    .email('E-mail no valido')
                    .required('El E-mail es Obligatorio'),
        telefono: Yup.number()
                    .positive('Número no válido')
                    .integer('Número no válido')
                    .typeError('Número no válido'),
    });

    const handleSubmit = async (valores) => {
        try {

            const url = 'http://localhost:3004/clientes';
            const rpta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            console.log(rpta);
            const result = await rpta.json();
            console.log(result);

        } catch (error) {
            console.log(error);
        }
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
                }}
                
                validationSchema={nuevoCliemteSchema}
                
                >
                    {({errors, touched}) => {
                        // console.log(data);
                        return (

                        <Form className='mt-10'>

                            <div className='mb-4'>
                                <label htmlFor='nombre' className='text-gray-800'>Nombre</label>
                                <Field
                                    id='nombre'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    type='text'
                                    placeholder='Nombre del Cliente'
                                    name='nombre' />
                                {errors.nombre && touched.nombre ? (
                                    <Alerta>{errors.nombre}</Alerta>
                                ) : null }
                            </div>

                            <div className='mb-4'>
                                <label htmlFor='empresa' className='text-gray-800'>Empresa</label>
                                <Field
                                    id='empresa'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    type='text'
                                    placeholder='Empresa del Cliente'
                                    name='empresa' />
                                {errors.empresa && touched.empresa ? (
                                    <Alerta>{errors.empresa}</Alerta>
                                ) : null }
                                
                            </div>

                            <div className='mb-4'>
                                <label htmlFor='email' className='text-gray-800'>E-mail</label>
                                <Field
                                    id='email'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    type='email'
                                    placeholder='E-mail del Cliente'
                                    name='email' />
                                {errors.email && touched.email ? (
                                    <Alerta>{errors.email}</Alerta>
                                ) : null }
                            </div>

                            <div className='mb-4'>
                                <label htmlFor='telefono' className='text-gray-800'>Telefono</label>
                                <Field
                                    id='telefono'
                                    className='mt-2 block w-full p-3 bg-gray-100'
                                    type='tel'
                                    placeholder='Telefono del Cliente'
                                    name='telefono' />
                                {errors.telefono && touched.telefono ? (
                                    <Alerta>{errors.telefono}</Alerta>
                                ) : null }
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
                    )}}
            </Formik>

        </div>
    )
}

export default Formulario

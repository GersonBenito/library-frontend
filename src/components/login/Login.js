import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useFetch } from '../../hooks/useFetch';
import '../../styles/login.css';
import { Alert } from '../alert/Alert';
import { Button } from '../button/Button';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { showAlert } from '../../helpers/ahowAlert';
import { saveEmailUser } from '../../helpers/saveLocalStorage';

export const Login = () => {

    const [ dataApi ] = useFetch();
    const vaigate = useNavigate();

    const initialvalues = {
        email: '',
    }

    const SchemaLogin = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const handleSubmit = async(values, resetForm) =>{

        const result = await dataApi('/user/login', 'POST', values);
        
        const { data, message, status } = result;

        if(status === 200){
            const saveEmail = saveEmailUser(data.email);
            if(saveEmail){
                resetForm();
                vaigate('/layout');
                showAlert(message, `Welcome ${data.firstname} ${data.lastname}!`, 'success')
            }
        }else{
            resetForm();
            showAlert('Error', message, 'error')
        }
    }

    return (
        <div className='container-login'>
            <div className="title">
                <h2>Welcome to library of the university</h2>
            </div>
            <div className="text">
                <p>To request a borrowed book, you need to log in.</p>
            </div>
            <Formik
                initialValues={ initialvalues }
                validationSchema={ SchemaLogin }
                onSubmit={ (values, { resetForm }) => handleSubmit(values, resetForm) }
            >
                {({ errors, touched }) =>(
                    <Form>
                        <div className="login">
                            <Field 
                                type='text'
                                placeholder='Enter your email, please'
                                id='email'
                                name='email'
                            />
                            { errors.email && touched.email && <Alert message={ errors.email } /> }
                        </div>
                        <div className="container-button">
                            <Button text='Login' type='submit' styled='dark' submit={true} />
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { showAlert } from '../../helpers/ahowAlert';
import { useFetch } from '../../hooks/useFetch';
import { Alert } from '../alert/Alert';
import { Button } from '../button/Button';

export const RegisterUser = () => {

  const [role, setRole] = useState([]);

  const [ dataApi ] = useFetch();

  const initialvalue = {
    id_role: '',
    firstName: '',
    lastName: '',
    email: '',
  }

  const SchemaUser = Yup.object().shape({
    id_role: Yup.string().required('Role is required'),
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required')
  });

  const getRoles = async () =>{
    const response = await dataApi('/user/role', 'GET', {});
    setRole(response.data);
  }

  const hadleSubmit = async (value, resetForm) =>{
    let dataToSend = {
      ...value,
      id_role: parseInt(value.id_role),
    }
    console.log(dataToSend);

    const { status, message } = await dataApi('/user', 'POST', dataToSend);
    status === 200 ? showAlert('Success!', message, 'success') : showAlert('Error!', message, 'error')
    resetForm();
  }

  useEffect(() =>{
    getRoles();
  }, [])

  return (
    <div className="container-form">
      <div className="form-user">
        <Formik
          initialValues={initialvalue}
          validationSchema={ SchemaUser }
          onSubmit={ (value, { resetForm }) => hadleSubmit(value, resetForm) }
        >
          {({ errors, touched}) => (
            <Form>
              <div className="">
                <label htmlFor="firstName" className="">First name:</label>
                <Field 
                  type='text' 
                  id="firstName"
                  placeholder="enter your First name"
                  name="firstName"
                />
                { errors.firstName && touched.firstName && <Alert message={ errors.firstName } /> }
              </div>

              <div className="">
                <label htmlFor="lastName" className="">last name:</label>
                <Field 
                  type='text' 
                  id="lastName"
                  placeholder="enter your last name"
                  name="lastName"
                />
                { errors.lastName && touched.lastName && <Alert message={ errors.lastName } /> }
              </div>

              <div className="">
                <label htmlFor="email" className="">Email:</label>
                <Field 
                  type='text' 
                  id="email"
                  placeholder="enter your email"
                  name="email"
                />
                { errors.email && touched.email && <Alert message={ errors.email } /> }
              </div>

              <div className="">
                <label htmlFor="id_role" className="">Rol:</label>
                <Field as='select'
                  type='text' 
                  id="id_role"
                  placeholder="Select a role"
                  name="id_role"
                >
                  {
                    role.map((item) =>(
                      <option value={item.id_role} key={item.id_role} >{item.role}</option>
                    ))
                  }
                </Field>
                { errors.id_role && touched.id_role && <Alert message={ errors.id_role } /> }
              </div>
              <div className="">
                <Button text='Register' styled='success' submit={true} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

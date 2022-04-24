
import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { showAlert } from '../../helpers/ahowAlert';
import { useFetch } from '../../hooks/useFetch';
import { Alert } from '../alert/Alert';
import { Button } from '../button/Button';

export const RegisterBook = () => {

  const [genre, setGenre] = useState([]);

  const [ dataApi ] = useFetch();

  const initialvalue = {
    id_genre: '', 
    title: '', 
    author: '', 
    published_year:''
  }

  const SchemaBook = Yup.object().shape({
    id_genre: Yup.string().required('Genre is required'),
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    published_year: Yup.string().required('Published year is required'),
  });

  const handleSubmit = async(values, resetForm) =>{
    let dataBook = {
      ...values,
      id_genre: parseInt(values.id_genre)
    }
    const { status, message } = await dataApi('/book', 'POST', dataBook);
    if(status === 200){
      showAlert('Success!', message, 'success');
    }else{
      showAlert('Error!', message, 'error');
    }

    resetForm();
  }

  const getAllGenre = async() =>{
    const response = await dataApi('/genre', 'GET', {});
    console.log(response);
    setGenre(response.data);
  }

  useEffect(()=>{
    getAllGenre();
  }, [])

  return (
    <div className='container-form'>
      <div className="form-book">
        <Formik
          initialValues={initialvalue}
          validationSchema={ SchemaBook }
          onSubmit={ (values , {resetForm}) => handleSubmit(values, resetForm) }
        >
          {({ errors, touched }) =>(
            <Form>

              <div className="">
                <label htmlFor="name" className="">Title:</label>
                <Field 
                  type='text' 
                  id="title"
                  placeholder="title of book"
                  name="title"
                />
                { errors.title && touched.title && <Alert message={ errors.title } /> }
              </div>

              <div className="">
                <label htmlFor="genre" className="">Author:</label>
                <Field 
                  type='text' 
                  id="author"
                  placeholder="author of book"
                  name="author"
                />
                { errors.author && touched.author && <Alert message={ errors.author } /> }
              </div>

              <div className="">
                <label htmlFor="id_genre" className="">Genre:</label>
                <Field as='select'
                  type='text' 
                  id="id_genre"
                  placeholder="genre of book"
                  name="id_genre"
                >
                  {
                    genre.map((item) =>(
                      <option value={item.id_genre} key={item.id_genre} >{item.name_genre}</option>
                    ))
                  }
                </Field>
                { errors.id_genre && touched.id_genre && <Alert message={ errors.id_genre } /> }
              </div>

              <div className="">
                <label htmlFor="genre" className="">Published year:</label>
                <Field 
                  type='text' 
                  id="published_year"
                  placeholder="published_year of book"
                  name="published_year"
                />
                { errors.published_year && touched.published_year && <Alert message={ errors.published_year } /> }
              </div>

              <div className="">
                <Button text='Add' styled='success' submit={true} />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

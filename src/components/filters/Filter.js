import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFetch } from '../../hooks/useFetch';
import { setBooks } from '../../redux/acction/book-action';
import '../../styles/filter.css';

export const Filter = () => {

  const [genre, setGenre] = useState([]);

  const [  dataApi ] = useFetch();
  const dispatch = useDispatch();

  const getAllGenre = async () =>{
    const response = await dataApi('/genre', 'GET', {});
    setGenre(response.data);
  }

  const getBooksByGenre = async(idGenre) => {
    const result = await dataApi(`/book/genre/${idGenre}`, 'GET', {});
    dispatch( setBooks(result.data) );
  }

  const handleSelect = (event) =>{
    getBooksByGenre(event.target.value);
  }

  useEffect(() =>{
    getAllGenre();
  }, [])

  return (
    <div className='container-filter'>
      <div className="select-filter">
        <select name="" id="" onChange={handleSelect}>
          {
            genre.map((item) =>(
              <option value={ item.id_genre } key={item.id_genre}>{ item.name_genre }</option>
            ))
          }
        </select>
      </div>
    </div>
  )
}

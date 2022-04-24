import React, { useEffect, useState } from 'react'
import { Filter } from '../filters/Filter'
import { Search } from '../filters/Search'
import '../../styles/book.css';
import { Button } from '../button/Button';
import { useNavigate } from 'react-router-dom';
import { Book } from './Book';
import { useFetch } from '../../hooks/useFetch';
import { useSelector } from 'react-redux';

export const Books = () => {

  const [book, setBook] = useState([]);

  const [ dataApi ] = useFetch();
  const { user } = useSelector( state => state);

  const navigate = useNavigate();
  const goToRegisterBook = () =>{
    navigate('/layout/register-book');
  }

  const getAllBooks = async () =>{
    const response = await dataApi('/book', 'GET', {});
    setBook(response.data);
  }

  useEffect(() =>{
    getAllBooks();
  }, [])

  return (
    <div className="container-book">
      {
        user.id_role === 2 && user.role === 'Librarian' && (
          <div className="filters">
            <Search />
            <Filter />
            <div className="add-book">
              <Button text='Add book' type='button' typeEvent='onClick' event={goToRegisterBook} />
            </div>
          </div>
        )
      }
      <div className="title">
        <h2>List of books</h2>
      </div>
      <div className="container-cards">
        {
          book.map((item) =>(
            <Book key={item.id_book} {...item} />
          ))
        }
      </div>
    </div>
  )
}

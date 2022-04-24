import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getEmailUser, removeEmailUser } from '../../helpers/saveLocalStorage';
import { useFetch } from '../../hooks/useFetch';
import { setUser } from '../../redux/acction/user-acction';
import { ContainerNavBar } from '../../styles/navbar'

export const NavBar = () => {

  const[ dataUser, setDataUser] = useState({});
  const [dataApi] = useFetch();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector(state => state);

  const getCurrentUser = async() =>{
    const email = getEmailUser();
    const { data } = await dataApi('/user/login', 'POST', { email });
    console.log(data);
    setDataUser(data);
    dispatch( setUser(data) );
  } 

  useEffect(() =>{
    getCurrentUser();
  }, [])

  const logout = () =>{
    Swal.fire({
      title: 'Warning!',
      icon: 'warning',
      text: 'Are you sure you want to leave?',
      confirmButtonText: 'Confirm',
      showDenyButton: true,
      denyButtonText: `Cancel`,
    }).then((result) =>{
      if(result.isConfirmed){
        removeEmailUser();
        navigate('/')
      }
    })
  }

  return (
    <ContainerNavBar>
        <div className="navbar">
            <div className="title">
              <h2>Library</h2>
            </div>
            <div className="profile">
              <p>{`${dataUser.firstname} ${dataUser.lastname}`} - <span>{ dataUser.role }</span></p>
            </div>
            {
              user.id_role === 2 && user.role === 'Librarian' ? (
                <nav>
                    <Link to='/layout/register-user'>new student</Link>
                    <Link to='/layout/books'>Books</Link>
                    <Link to='/layout/borrewed-book'>Borrowed Books</Link>
                    <a onClick={logout}>Logout</a>
                </nav>
              ):(
                <nav>
                    <Link to='/layout/books'>Books</Link>
                    <Link to='/layout/borrewed-book'>My books</Link>
                    <a onClick={logout}>Logout</a>
                </nav>
              )
            }
        </div>
    </ContainerNavBar>
  )
}

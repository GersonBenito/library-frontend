import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Books } from '../components/book/Books';
import { Login } from '../components/login/Login';
import { Layout } from '../layout/Layout';
import { Provider } from 'react-redux';
import { store } from '../redux/store/store';
import { RegisterBook } from '../components/book/RegisterBook';
import { RegisterUser } from '../components/student/RegisterUser';
import { Details } from '../components/book/Details';
import { BorrewedBook } from '../components/borrewed-book/BorrewedBook';

const AppRouter = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>

          <Routes>
              <Route path='/' element={ <Login /> }></Route>
              <Route path='/layout' element={<Layout />} >
                  <Route index element={ <Books /> } />
                  <Route path='books' element={ <Books /> } />
                  <Route path='register-book' element={ <RegisterBook /> }/>
                  <Route path='register-user' element={ <RegisterUser /> } />
                  <Route path='detail/:id' element={ <Details/> } />
                  <Route path='borrewed-book' element={ <BorrewedBook /> } />
              </Route>
          </Routes>
      </BrowserRouter>

    </Provider>
  )
}

export default AppRouter
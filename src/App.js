import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { AuthContextProvider } from './context/AuthContext';
import Login from './components/Login';
import Signup from './components/Signup';
import Account from './components/Account'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthContextProvider>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/account' element={
            <ProtectedRoute>
              <Account/>
            </ProtectedRoute>}/>
          </Routes>  
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

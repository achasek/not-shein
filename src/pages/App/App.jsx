import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import CartPage from '../CartPage/CartPage'
import FavoritesPage from '../FavoritesPage/FavoritesPage'
import NavBar from '../../components/NavBar/NavBar'
import CatNavBar from '../../components/CatNavBar/CatNavBar'

export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <CatNavBar />
          <Routes>
            <Route path="/orders/new" element={<CartPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            {/* change this to home page later */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}



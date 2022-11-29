import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import CartPage from '../CartPage/CartPage'
import CategoriesPage from '../CategoriesPage/CategoriesPage';
import MensPage from '../MensPage/MensPage';
import WomensPage from '../WomensPage/WomensPage';
import FavoritesPage from '../FavoritesPage/FavoritesPage'
import NavBar from '../../components/NavBar/NavBar'
import CatNavBar from '../../components/CatNavBar/CatNavBar'
import ShowPage from '../ShowPage/ShowPage';

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
            <Route path="/favorites" element={<FavoritesPage user={user} />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/mens" element={<MensPage />} />
            <Route path="/categories/womens" element={<WomensPage />} />
            <Route path="/:id" element={<ShowPage />} />
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



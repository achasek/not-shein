import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
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
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImpactPage from '../ImpactPage/ImpactPage';

export default function App() {
  const [user, setUser] = useState(getUser())
  const [productItems, setProductItems] = useState([])
  const [cart, setCart] = useState(null)
  const navigate = useNavigate();


  useEffect(function() {
      async function getItems() {
          const items = await itemsAPI.getAll();
          setProductItems(items);
      }
      getItems();

      async function getCart() {
          const cart = await ordersAPI.getCart();
          setCart(cart);
      }
      getCart();
  }, []);

  /*--- Event Handlers --- */
  async function handleAddToCart(itemId, name) {
    const updatedCart = await ordersAPI.addItemToCart(itemId)
    setCart(updatedCart)
    setTimeout(() => {navigate('/categories')}, 3000)
  }

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    setTimeout(() => {navigate('/impact')}, 3000)
  }

  return (
    <main className="App">
      { user ? 
        <>
          <NavBar user={user} setUser={setUser} />
          <CatNavBar />
          <Routes>
            <Route path="/orders/new" element={<CartPage productItems={productItems} cart={cart} handleChangeQty={handleChangeQty} handleCheckout={handleCheckout} />} />
            <Route path="/favorites" element={<FavoritesPage user={user} />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/mens" element={<MensPage productItems={productItems} cart={cart} />} />
            <Route path="/categories/womens" element={<WomensPage productItems={productItems} cart={cart} />} />
            <Route path="/:id" element={<ShowPage productItems={productItems} cart={cart} handleAddToCart={handleAddToCart} />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/*" element={<Navigate to="/categories" />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}



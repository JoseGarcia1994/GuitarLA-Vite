import '../src/styles/about.css';
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import GuitarPage from './pages/GuitarPage';
import BlogPage from './pages/BlogPage';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from "axios";
import { useEffect, useState } from 'react';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';

function App() {

  const cartLS =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('cart')) ?? []
      : null

  const [guitars, setGuitars] = useState([]);
  const [posts, setPosts] = useState([]);
  const [course, setCourse] = useState({})
  const [cart, setCart] = useState(cartLS);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    getGuitars();
    getPosts();
    getCourse();
  }, [])

  const getGuitars = () => {
    axios
      .get('https://guitarla-strapi-vzds.onrender.com/api/guitars?populate=image')
      .then(res => setGuitars(res.data.data))
      .catch(err => console.error(err))
  }

  const getPosts = () => {
    axios
      .get("https://guitarla-strapi-vzds.onrender.com/api/posts?populate=image")
      .then(res => setPosts(res.data.data))
      .catch(err => console.error(err))
  }

  const getCourse = () => {
    axios
      .get(`https://guitarla-strapi-vzds.onrender.com/api/course?populate=image`)
      .then(res => setCourse(res.data.data))
      .catch(err => console.error(err))
  }

  // Add guitars to cart
  const addToCart = guitar => {
    if (cart.some(guitarState => guitarState.id === guitar.id)) {
      // 
      const updatedCart = cart.map(guitarState => {
        if (guitarState.id === guitar.id) {
          // Update qty
          guitarState.qty = guitar.qty
        }
        return guitarState
      });
      setCart(updatedCart);
    } else {
      // New item, add to cart
      setCart([...cart, guitar])
    }
  }

  //Update QTY in Cart
  const updateQty = guitar => {
    const updatedCart = cart.map(guitarState => {
      if (guitarState.id === guitar.id) {
        guitarState.qty = guitar.qty
      }
      return guitarState
    })
    setCart(updatedCart)
  }

  //Delete Product from cart
  const deleteProduct = id => {
    setCart(cart.filter(guitarState => guitarState.id != id))
  }

  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path='/'
            element={
              <Home
                guitars={guitars}
                posts={posts}
                course={course}
              />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/store'
            element={
              <Store
                guitars={guitars}
              />}
          />
          <Route
            path='/blog'
            element={
              <Blog
                posts={posts}
              />}
          />
        </Route>

        <Route
          path='/guitars/:url'
          element={
            <GuitarPage
              addToCart={addToCart}
            />}
        />

        <Route
          path='/post/:url'
          element={<BlogPage />}
        />

        <Route
          path='/cart'
          element={
            <Cart
              cart={cart}
              updateQty={updateQty}
              deleteProduct={deleteProduct}
            />}
        />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App

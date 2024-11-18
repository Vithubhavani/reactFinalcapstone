import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { Navigate } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import GenrePage from './pages/GenrePage'
import CarousalPage from './pages/CarousalPage'
import DashboardPage from './pages/DashboardPage'
import MoviePage from './pages/MoviePage'


const protectedRoute=({children})=>{
  const{user}=useContext(AppContext)
  return user?children:<Navigate to="/register"/>
}
function App() {
  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegisterPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/home" element={<RegisterPage/>} />
      <Route path='/genre' element={
        <protectedRoute>
          <GenrePage/>
        </protectedRoute>
      }/>
      <Route path="/carousel" element={
        <protectedRoute>
          <CarousalPage/>
        </protectedRoute>
      } />
      <Route path="/dashboard" element={
        <protectedRoute>
          <DashboardPage/>
        </protectedRoute>
      } />
      <Route path="/movies" element={
        <protectedRoute>
          <MoviePage/>
        </protectedRoute>
      } />
      <Route path="*" element={<NotFoundPage/>} />
      
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App

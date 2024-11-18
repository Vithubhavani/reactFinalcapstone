import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundPage'
import GenrePage from './pages/GenrePage'
import CarousalPage from './pages/CarousalPage'
import DashboardPage from './pages/DashboardPage'
import MoviePage from './pages/MoviePage'

function App() {


  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegisterPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/home" element={<RegisterPage/>} />
      <Route path='/genre' element={<GenrePage/>}/>
      <Route path="/carousel" element={<CarousalPage/>} />
      <Route path="/dashboard" element={<DashboardPage/>} />
      <Route path="/movies" element={<MoviePage/>} />
      <Route path="*" element={<NotFoundPage/>} />
      
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App

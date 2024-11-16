import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/RegisterPage'

function App() {


  return (
    <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegisterPage/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/home" element={<RegisterPage/>} />
      <Route path="/carousal" element={<RegisterPage/>} />
      <Route path="/dashboard" element={<RegisterPage/>} />
      <Route path="/movies" element={<RegisterPage/>} />
      <Route path="*" element={<RegisterPage/>} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App

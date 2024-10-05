
import './App.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import { Routes,Route } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import Home from './Pages/Home.jsx'
import WatchHistory from './Pages/WatchHistory.jsx'
function App() {

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Landingpage/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/watch-history' element= {<WatchHistory/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App

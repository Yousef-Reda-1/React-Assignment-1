import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portfolio from './components/Portofolio/Portfolio'
import Contact from './components/Contact/Contact'
import Notfound from './components/Notfound'

function App() {

  const routes = createBrowserRouter([
    {
      path: '', element: <Layout></Layout>, children: [
        { index: true, element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/portfolio', element: <Portfolio></Portfolio> },
        { path: '/contact', element: <Contact></Contact> },
        { path: '*', element: <Notfound></Notfound> }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App

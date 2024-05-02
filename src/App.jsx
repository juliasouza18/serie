import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Chicago from './pages/Chicago'
import Autores from './pages/Autores'

const router= createBrowserRouter([
  {
    path:"/",
    element: <Chicago/>
  },

  {
    path:"/Autores",
    element:<Autores/>
  }
  
])


export default function App() {
  return (
    <RouterProvider router={router} />
    
  )
}

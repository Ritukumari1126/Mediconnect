import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import signup from './components/signup'
import login from './components/login'

const App = () => {
  const myRouter = createBrowserRouter([
    {path:'',Component:signup},
    {path:'signup',Component:signup},
    {path:'login',Component:login},

  ])
  return (
    <>
      
      <RouterProvider router = {myRouter}/>
    </>
  )
}

export default App

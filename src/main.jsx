import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './components/store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Detail from './components/Detail.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} >
     
      </RouterProvider>
    </Provider>
  </StrictMode>,
)

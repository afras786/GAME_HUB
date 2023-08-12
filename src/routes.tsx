import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Layout from './pages/Layout'
import GameDetailPage from './pages/GameDetailPage'
import Errors from './pages/Errors'

const router = createBrowserRouter([
  {
    path: "/", element: <Layout />, errorElement: <Errors />, children: [
      { index: true, element: <HomePage /> },
      { path: "games/:slug", element: <GameDetailPage /> }
    ]
  }
])

export default router
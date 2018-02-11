import Home from '../components/Home'
import NotFound from '../components/error/NotFound'

export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "*",
    component: NotFound,
    status: 404
  }
]
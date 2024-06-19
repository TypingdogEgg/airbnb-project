import { Navigate } from "react-router-dom"
import { lazy } from "react"
// 懒加载
const Home = lazy(() => import('@/views/home'))
const Detail = lazy(() => import('@/views/detail'))
const More = lazy(()=>import('@/views/more'))

const routes = [
    {
        path:'/',
        element:<Navigate to="/home" />
    },
    {
        path:'/home',
        element:<Home />,
    },
    {
        path:'/detail',
        element: <Detail />,
    },
    {
        path:'/more',
        element: <More />,
    },
]

export default routes
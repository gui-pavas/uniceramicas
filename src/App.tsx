import type React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "@/routes/home-page"
import ProductsPage from "./routes/products-page"

interface Route {
    path: string,
    element: React.ReactNode
}

export default function Router() {

    const routes: Route[] = [
        {
            path: '/',
            element: <HomePage />,
        },
        {
            path: '/products',
            element: <ProductsPage />
        }
    ]

    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element} />
                    ))
                }
            </Routes>
        </BrowserRouter>
    )
}

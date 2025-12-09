import React from "react"
import { BrowserRouter, Routes, Route as RouterRoute } from "react-router-dom"

import HomePage from "@/routes/home-page"
import ProductsPage from "@/routes/products-page"
import BlogPage from "@/routes/blog-page"
import BlogPostPage from "@/routes/blog-post-page"

interface AppRoute {
    path: string
    element: React.ReactNode
}

export default function AppRouter() {
    const appRoutes: AppRoute[] = [
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/products",
            element: <ProductsPage />,
        },
        {
            path: "/blog",
            element: <BlogPage />,
        },
        {
            path: "/blog/:slug",
            element: <BlogPostPage />,
        },
    ]

    return (
        <BrowserRouter>
            <Routes>
                {appRoutes.map((route) => (
                    <RouterRoute
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </BrowserRouter>
    )
}

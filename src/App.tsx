import React from "react"
import { BrowserRouter, Routes, Route as RouterRoute, useLocation } from "react-router-dom"

import HomePage from "@/routes/home-page"
import ProductsPage from "@/routes/products-page"
import BlogPage from "@/routes/blog-page"
import BlogPostPage from "@/routes/blog-post-page"
import LandingPage from "@/routes/landing-page"
import { blogPosts } from "@/data/blog-posts"

interface AppRoute {
    path: string
    element: React.ReactNode
}

function HashScrollHandler() {
    const location = useLocation()

    React.useEffect(() => {
        if (!location.hash) {
            return
        }

        const elementId = decodeURIComponent(location.hash.slice(1))
        let attempts = 0
        let timeoutId: number | undefined

        const scrollToHash = () => {
            const element = document.getElementById(elementId)

            if (element) {
                const headerOffset = 96
                const top = element.getBoundingClientRect().top + window.scrollY - headerOffset

                window.scrollTo({
                    top: Math.max(top, 0),
                    behavior: "auto",
                })
                return
            }

            if (attempts < 10) {
                attempts += 1
                timeoutId = window.setTimeout(scrollToHash, 100)
            }
        }

        scrollToHash()

        return () => {
            if (timeoutId !== undefined) {
                window.clearTimeout(timeoutId)
            }
        }
    }, [location.pathname, location.hash])

    return null
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
        ...blogPosts.map((post) => ({
            path: `/blog/${post.slug}`,
            element: React.createElement(post.component),
        })),
        {
            path: "/landing",
            element: <LandingPage />,
        },
        {
            path: "/blog/:slug",
            element: <BlogPostPage />,
        },
    ]

    return (
        <BrowserRouter>
            <HashScrollHandler />
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

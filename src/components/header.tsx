"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import Logo from "../assets/logo600x600.png"

export default function Header() {
  const navItems = ["Home", "Sobre nós", "Produtos", "Contato", "Blog"]
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (location.pathname === "/products") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    }
  }, [location.pathname])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (location.pathname === "/products") {
      e.preventDefault()
      window.location.href = `/${href}`
    }
  }

  return (
    <header className="flex w-full fixed top-0 left-0 z-50 bg-white shadow-md px-4 sm:px-6 md:px-12 py-4">
      <div className="flex w-full justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="shrink-0">
          <img src={Logo || "/placeholder.svg"} alt="logo" className="w-12 sm:w-14 md:w-16" />
        </Link>

        <nav className="hidden lg:flex flex-1 justify-center items-center">
          <ul className="flex justify-center items-center gap-6 xl:gap-8">
            {navItems.map((item, index) => {
              const href =
                item === "Home"
                  ? "/"
                  : item === "Sobre nós"
                    ? "#about"
                    : item === "Produtos"
                      ? "/products"
                      : item === "Contato"
                        ? "#contact"
                        : item === "Blog"
                          ? "/blog"
                          : "/"

              const isAnchor = href.startsWith("#")

              if (isAnchor) {
                return (
                  <li key={index}>
                    <a
                      href={href}
                      onClick={(e) => handleAnchorClick(e, href)}
                      className="relative cursor-pointer group text-sm xl:text-base font-medium text-gray-700 hover:text-orange-500 transition-colors"
                    >
                      <span className="relative z-10">{item}</span>
                      <div
                        className="
                          absolute
                          bottom-0
                          left-0
                          w-0
                          h-0.5
                          bg-orange-500
                          transition-all
                          duration-300
                          group-hover:w-full
                        "
                      ></div>
                    </a>
                  </li>
                )
              }

              return (
                <li key={index}>
                  <Link
                    to={href}
                    className="relative cursor-pointer group text-sm xl:text-base font-medium text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    <span className="relative z-10">{item}</span>
                    <div
                      className="
                        absolute
                        bottom-0
                        left-0
                        w-0
                        h-0.5
                        bg-orange-500
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    ></div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200">
          <ul className="flex flex-col py-4">
            {navItems.map((item, index) => {
              const href =
                item === "Home"
                  ? "/"
                  : item === "Sobre nós"
                    ? "#about"
                    : item === "Produtos"
                      ? "/products"
                      : item === "Contato"
                        ? "#contact"
                        : item === "Blog"
                          ? "/blog"
                          : "/"

              const isAnchor = href.startsWith("#")

              if (isAnchor) {
                return (
                  <li key={index}>
                    <a
                      href={href}
                      onClick={(e) => {
                        handleAnchorClick(e, href)
                        setIsMobileMenuOpen(false)
                      }}
                      className="block px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium"
                    >
                      {item}
                    </a>
                  </li>
                )
              }

              return (
                <li key={index}>
                  <Link
                    to={href}
                    className="block px-6 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors font-medium"
                  >
                    {item}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      )}
    </header>
  )
}

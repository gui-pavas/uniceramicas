"use client"

import { useState } from "react"
import Layout from "@/components/layouts/layout"
import type { Category, Product } from "@/interfaces/products"
import ProductsHeader from "@/components/products/products-header"
import CategorySidebar from "@/components/products/category-sidebar"
import ProductsMainContent from "@/components/products/products-main-content"
import { products } from "@/data/products"

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("estrutural")
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>("linha-09")
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(["estrutural"]))

    const categories: Category[] = [
        // Define categories here
        {
            id: "estrutural", name: "Estrutural", subcategories: [
                { id: "linha-09", name: "Linha 09" },
                { id: "linha-11", name: "Linha 11,5" },
                { id: "linha-14", name: "Linha 14" },
                { id: "linha-19", name: "Linha 19" },
                { id: "linha-29", name: "Linha 29" },
            ]
        },
        { id: "acessorios", name: "Acessórios", subcategories: [] },
    ]

    const filteredProducts: Product[] = products.filter((product) => {
        if (selectedSubcategory) {
            return (
                product.category === selectedCategory &&
                product.subcategory === selectedSubcategory
            )
        }

        return product.category === selectedCategory
    })

    const currentCategory: Category | undefined = categories.find((cat) => cat.id === selectedCategory)

    const displayTitle: string = "Blocos Cerâmicos"

    const handleCategoryClick = (categoryId: string) => {
        setSelectedCategory(categoryId)
        setSelectedSubcategory("")
    }

    const handleToggleCategory = (categoryId: string) => {
        const newExpandedCategories = new Set(expandedCategories)
        if (newExpandedCategories.has(categoryId)) {
            newExpandedCategories.delete(categoryId)
        } else {
            newExpandedCategories.add(categoryId)
        }
        setExpandedCategories(newExpandedCategories)
    }

    const handleSubcategoryClick = (categoryId: string, subcategoryId: string) => {
        setSelectedCategory(categoryId)
        setSelectedSubcategory(subcategoryId)
    }

    return (
        <Layout>
            <div className="min-h-screen bg-background mt-20 sm:mt-24 md:mt-28">
                <ProductsHeader />

                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 sm:px-6 py-4 sm:py-6">
                    <CategorySidebar
                        categories={categories}
                        expandedCategories={expandedCategories}
                        selectedCategory={selectedCategory}
                        selectedSubcategory={selectedSubcategory}
                        onCategoryClick={handleCategoryClick}
                        onToggleCategory={handleToggleCategory}
                        onSubcategoryClick={handleSubcategoryClick}
                    />

                    <ProductsMainContent
                        products={filteredProducts}
                        currentCategory={currentCategory}
                        displayTitle={displayTitle}
                    />
                </div>
            </div>
        </Layout>
    )
}

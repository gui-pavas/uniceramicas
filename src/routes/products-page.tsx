"use client"

import { useState } from "react"
import Layout from "@/components/layouts/layout"
import type { Category, Product } from "@/interfaces/products"
import ProductsHeader from "@/components/products/products-header"
import CategorySidebar from "@/components/products/category-sidebar"
import ProductsMainContent from "@/components/products/products-main-content"

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("estrutural")
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>("linha-09")
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(["estrutural"]))

    const categories: Category[] = [
        // Define categories here
        { id: "estrutural", name: "Estrutural", subcategories: [] },
        { id: "acessorios", name: "Acessórios", subcategories: [] },
    ]

    const filteredProducts: Product[] = [
        {
            id: "1", name: "Produto 1", image: "", measurements: "", resistance: "", weight: "", line: "",
            category: ""
        },
    ]

    const currentCategory: Category | undefined = categories.find((cat) => cat.id === selectedCategory)

    const displayTitle: string = "Título Exibido"

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

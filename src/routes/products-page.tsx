import { useState } from "react"
import Layout from "@/components/layouts/layout"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Product = {
    id: string
    name: string
    image: string
    measurements: string
    resistance: string
    weight: string
    line: string
    category: string
}

type Subcategory = {
    id: string
    name: string
}

type Category = {
    id: string
    name: string
    subcategories: Subcategory[]
}

const products: Product[] = [
    {
        id: "BE9-4",
        name: "BE9-4",
        image: "/construction-ceramic-block-terracotta.jpg",
        measurements: "9 x 19 x 39",
        resistance: "Fbk=4Mpa",
        weight: "5,6Kg",
        line: "Linha 09",
        category: "estrutural",
    },
    {
        id: "BE30/9-4",
        name: "BE30/9-4",
        image: "/construction-ceramic-block-beige.jpg",
        measurements: "9 x 19 x 29",
        resistance: "Fbk=4Mpa",
        weight: "4,2Kg",
        line: "Linha 09",
        category: "estrutural",
    },
    {
        id: "BE20/9-4",
        name: "BE20/9-4",
        image: "/construction-ceramic-block-orange.jpg",
        measurements: "9 x 19 x 19",
        resistance: "Fbk=4Mpa",
        weight: "3,4Kg",
        line: "Linha 09",
        category: "estrutural",
    },
    {
        id: "BE14-4",
        name: "BE14-4",
        image: "/construction-ceramic-block-red.jpg",
        measurements: "14 x 19 x 39",
        resistance: "Fbk=4Mpa",
        weight: "7,8Kg",
        line: "Linha 14",
        category: "estrutural",
    },
    {
        id: "BV9-6",
        name: "BV9-6",
        image: "/construction-sealing-block-terracotta.jpg",
        measurements: "9 x 19 x 19",
        resistance: "Fbk=6Mpa",
        weight: "3,2Kg",
        line: "Linha 09",
        category: "vedacao",
    },
    {
        id: "BA9-8",
        name: "BA9-8",
        image: "/construction-acoustic-block-orange.jpg",
        measurements: "9 x 19 x 29",
        resistance: "Fbk=8Mpa",
        weight: "4,8Kg",
        line: "Linha 09",
        category: "acustico",
    },
]

const categories: Category[] = [
    { id: "vedacao", name: "Vedação", subcategories: [] },
    { id: "acustico", name: "Acústico", subcategories: [] },
    {
        id: "estrutural",
        name: "Estrutural",
        subcategories: [
            { id: "linha-09", name: "Linha 09" },
            { id: "linha-11-5", name: "Linha 11,5" },
            { id: "linha-14", name: "Linha 14" },
            { id: "linha-19", name: "Linha 19" },
        ],
    },
    { id: "encunhamento", name: "Encunhamento", subcategories: [] },
    { id: "acessorios", name: "Acessórios", subcategories: [] },
    { id: "resistentes-fogo", name: "Resistentes ao Fogo", subcategories: [] },
]

// ===================== PAGE ROOT =====================

export default function ProductsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("estrutural")
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>("linha-09")
    const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
        new Set(["estrutural"]),
    )

    const handleToggleCategory = (categoryId: string) => {
        const newExpanded = new Set(expandedCategories)
        if (newExpanded.has(categoryId)) {
            newExpanded.delete(categoryId)
        } else {
            newExpanded.add(categoryId)
        }
        setExpandedCategories(newExpanded)
    }

    const handleCategoryClick = (categoryId: string) => {
        setSelectedCategory(categoryId)
        setSelectedSubcategory("")

        const category = categories.find((c) => c.id === categoryId)
        if (category?.subcategories && category.subcategories.length > 0) {
            const newExpanded = new Set(expandedCategories)
            newExpanded.add(categoryId)
            setExpandedCategories(newExpanded)
        }
    }

    const handleSubcategoryClick = (categoryId: string, subcategoryId: string) => {
        setSelectedCategory(categoryId)
        setSelectedSubcategory(subcategoryId)
    }

    const filteredProducts = products.filter((product) => {
        if (selectedCategory && product.category !== selectedCategory) return false
        // aqui futuramente dá para filtrar por linha usando selectedSubcategory
        return true
    })

    const currentCategory = categories.find((c) => c.id === selectedCategory)
    const displayTitle = selectedSubcategory
        ? currentCategory?.subcategories.find((s) => s.id === selectedSubcategory)?.name
        : currentCategory?.name

    return (
        <Layout>
            <div className="min-h-screen bg-background mt-32">
                <ProductsHeader />

                <div className="max-w-7xl mx-auto flex gap-6 px-4 lg:px-6 py-6">
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

// ===================== HEADER =====================

function ProductsHeader() {
    return (
        <header className="border-b border-border bg-card">
            <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
                <h1 className="text-2xl font-bold text-foreground">Catálogo de Produtos</h1>
            </div>
        </header>
    )
}

// ===================== FLOATING SIDEBAR =====================

type CategorySidebarProps = {
    categories: Category[]
    expandedCategories: Set<string>
    selectedCategory: string
    selectedSubcategory: string
    onCategoryClick: (categoryId: string) => void
    onToggleCategory: (categoryId: string) => void
    onSubcategoryClick: (categoryId: string, subcategoryId: string) => void
}

function CategorySidebar({
    categories,
    expandedCategories,
    selectedCategory,
    selectedSubcategory,
    onCategoryClick,
    onToggleCategory,
    onSubcategoryClick,
}: CategorySidebarProps) {
    return (
        <>
            {/* Mobile: barra horizontal simples (não flutuante) */}
            <div className="lg:hidden w-full mb-4">
                <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "outline"}
                            size="sm"
                            className="whitespace-nowrap"
                            onClick={() => onCategoryClick(category.id)}
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Desktop: painel lateral flutuante (sticky) */}
            <aside className="hidden lg:block w-72 shrink-0">
                <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                    <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">
                        Categorias
                    </p>

                    <div className="space-y-2">
                        {categories.map((category) => (
                            <div key={category.id}>
                                <Button
                                    variant={selectedCategory === category.id ? "default" : "ghost"}
                                    className="w-full justify-between h-10 px-3 text-sm"
                                    onClick={() => onCategoryClick(category.id)}
                                >
                                    <span className="font-medium">{category.name}</span>
                                    {category.subcategories && category.subcategories.length > 0 && (
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                onToggleCategory(category.id)
                                            }}
                                            className="ml-2 inline-flex items-center justify-center"
                                        >
                                            {expandedCategories.has(category.id) ? (
                                                <ChevronDown className="h-4 w-4" />
                                            ) : (
                                                <ChevronRight className="h-4 w-4" />
                                            )}
                                        </button>
                                    )}
                                </Button>

                                {expandedCategories.has(category.id) && category.subcategories && (
                                    <div className="ml-3 mt-1 space-y-1 border-l border-border/60 pl-3">
                                        {category.subcategories.map((sub) => (
                                            <Button
                                                key={sub.id}
                                                variant={selectedSubcategory === sub.id ? "secondary" : "ghost"}
                                                className="w-full justify-start h-9 px-3 text-xs"
                                                onClick={() => onSubcategoryClick(category.id, sub.id)}
                                            >
                                                {sub.name}
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    )
}

// ===================== MAIN CONTENT =====================

type ProductsMainContentProps = {
    products: Product[]
    currentCategory?: Category
    displayTitle?: string
}

function ProductsMainContent({
    products,
    currentCategory,
    displayTitle,
}: ProductsMainContentProps) {
    return (
        <main className="flex-1">
            <div className="max-w-6xl mx-auto">
                <CategoryTitle currentCategory={currentCategory} displayTitle={displayTitle} />
                <ProductGrid products={products} />
            </div>
        </main>
    )
}

type CategoryTitleProps = {
    currentCategory?: Category
    displayTitle?: string
}

function CategoryTitle({ currentCategory, displayTitle }: CategoryTitleProps) {
    return (
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-2">
                {currentCategory?.name}
                {displayTitle && displayTitle !== currentCategory?.name
                    ? `: ${displayTitle}`
                    : ""}
            </h2>
            <div className="h-1 w-20 bg-primary" />
        </div>
    )
}

// ===================== GRID / CARD =====================

type ProductGridProps = {
    products: Product[]
}

function ProductGrid({ products }: ProductGridProps) {
    if (products.length === 0) {
        return (
            <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                    Nenhum produto encontrado nesta categoria.
                </p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

type ProductCardProps = {
    product: Product
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-card border border-border hover:border-primary/70 transition-colors group rounded-xl overflow-hidden">
            <div className="aspect-square bg-muted p-8 flex items-center justify-center overflow-hidden">
                <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-foreground">{product.name}</h3>

                <div className="space-y-2 text-sm">
                    <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Medida:</span>{" "}
                        {product.measurements}
                    </p>
                    <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Resistência:</span>{" "}
                        {product.resistance}
                    </p>
                    <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Peso:</span>{" "}
                        {product.weight}
                    </p>
                </div>

                <div className="pt-3 border-t border-border">
                    <span className="text-sm font-medium text-primary">{product.line}</span>
                </div>
            </div>
        </div>
    )
}
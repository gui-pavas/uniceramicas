import type { Category, Product } from "@/interfaces/products"
import CategoryTitle from "./category-title"
import ProductGrid from "./product-grid"

type ProductsMainContentProps = {
    products: Product[]
    currentCategory?: Category
    displayTitle?: string
}

export default function ProductsMainContent({ products, currentCategory, displayTitle }: ProductsMainContentProps) {
    return (
        <main className="flex-1">
            <div className="max-w-6xl mx-auto">
                <CategoryTitle currentCategory={currentCategory} displayTitle={displayTitle} />
                <ProductGrid products={products} />
            </div>
        </main>
    )
}

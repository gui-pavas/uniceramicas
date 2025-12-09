import type { Product } from "@/interfaces/products"
import ProductCard from "./product-card"

type ProductGridProps = {
    products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
    if (products.length === 0) {
        return (
            <div className="text-center py-12 sm:py-16">
                <p className="text-muted-foreground text-base sm:text-lg">Nenhum produto encontrado nesta categoria.</p>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

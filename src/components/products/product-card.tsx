import type { Product } from "@/interfaces/products"

type ProductCardProps = {
    product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-card border border-border hover:border-primary/70 transition-colors group rounded-xl overflow-hidden">
            <div className="aspect-square bg-card flex items-center justify-center overflow-hidden">
                <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>

            <div className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-foreground">{product.name}</h3>

                <div className="space-y-1.5 sm:space-y-2 text-sm">
                    <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Medida:</span> {product.measurements}
                    </p>
                    <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Resistência:</span> {product.resistance}
                    </p>
                    <p className="text-muted-foreground">
                        <span className="font-medium text-foreground">Peso:</span> {product.weight}
                    </p>
                </div>

                <div className="pt-2 sm:pt-3 border-t border-border flex flex-col">
                    <span className="text-sm font-medium text-muted-foreground">Uso: {product.function}</span>
                    <span className="text-sm font-medium text-primary">Informação: {product.line}</span>
                </div>
            </div>
        </div>
    )
}

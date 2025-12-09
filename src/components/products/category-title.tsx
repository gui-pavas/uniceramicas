import type { Category } from "@/interfaces/products"

type CategoryTitleProps = {
    currentCategory?: Category
    displayTitle?: string
}

export default function CategoryTitle({ currentCategory, displayTitle }: CategoryTitleProps) {
    return (
        <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {currentCategory?.name}
                {displayTitle && displayTitle !== currentCategory?.name ? `: ${displayTitle}` : ""}
            </h2>
            <div className="h-1 w-16 sm:w-20 bg-primary" />
        </div>
    )
}

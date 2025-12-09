import { ChevronDown, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Category } from "@/interfaces/products"

type CategorySidebarProps = {
    categories: Category[]
    expandedCategories: Set<string>
    selectedCategory: string
    selectedSubcategory: string
    onCategoryClick: (categoryId: string) => void
    onToggleCategory: (categoryId: string) => void
    onSubcategoryClick: (categoryId: string, subcategoryId: string) => void
}

export default function CategorySidebar({
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
            <div className="lg:hidden w-full">
                <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={selectedCategory === category.id ? "default" : "outline"}
                            size="sm"
                            className="whitespace-nowrap text-xs sm:text-sm"
                            onClick={() => onCategoryClick(category.id)}
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>

            <aside className="hidden lg:block lg:w-64 xl:w-72 shrink-0">
                <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto rounded-xl border border-border bg-card/80 backdrop-blur-sm p-4 shadow-sm">
                    <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Categorias</p>

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

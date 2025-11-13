import { ArrowRight, Building2, TrendingUp } from "lucide-react"
import { Button } from "./ui/button"

const products = [
    {
        name: "Linha Estrutural",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estrutural-icon-qLPPc6erfaqjwbk8sObuHI1pi66mc1.png",
        description: "Blocos para alvenaria estrutural com alta resistência mecânica",
        features: ["Alta resistência", "Durabilidade", "Econômico"],
    },
    {
        name: "Linha Vedação Furo Vertical",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertical-gbdqs4YMbncS6suXhSpFAfzaIRENgt.png",
        description: "Blocos de vedação com furos verticais para melhor isolamento",
        features: ["Isolamento térmico", "Leveza", "Facilidade"],
    },
    {
        name: "Linha Vedação Furo Horizontal",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal-QVEBLsqL1Tif8RP14WxVePuYlGX9F3.png",
        description: "Blocos de vedação com furos horizontais para instalações",
        features: ["Versatilidade", "Praticidade", "Acabamento"],
    },
    {
        name: "Linha Bloco Top",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-YEHE2lIj0qN3dB3icqClJy1G9Bku51.png",
        description: "Blocos premium com design otimizado para construção rápida",
        features: ["Produtividade", "Qualidade", "Inovação"],
    },
]

export default function ProductsSection() {
    return (
        <div className="w-full bg-gradient-to-b from-white to-primary/5 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4">
                        <Building2 className="w-4 h-4" />
                        Nossos Produtos
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                        Selecione abaixo uma linha para conhecer nossos <span className="text-primary">produtos</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Oferecemos uma ampla variedade de blocos cerâmicos de alta qualidade para atender às suas necessidades
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {products.map((product, index) => (
                        <div
                            key={product.name}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-4"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-6 flex flex-col items-center text-center">
                                <div className="w-full aspect-square mb-6 flex items-center justify-center bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        className="w-full h-full object-contain drop-shadow-xl"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>

                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {product.features.map((feature) => (
                                        <span
                                            key={feature}
                                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <Button
                                    variant="outline"
                                    className="w-full group/btn border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                                >
                                    Ver Detalhes
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                            <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <TrendingUp className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-linear-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white shadow-xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">Não sabe qual produto escolher?</h3>
                    <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                        Nossa equipe técnica está pronta para ajudar você a escolher o produto ideal para sua obra
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="px-10 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    >
                        Falar com Especialista
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

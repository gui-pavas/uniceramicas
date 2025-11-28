import { ArrowRight, Building2, TrendingUp } from "lucide-react"
import { Button } from "./ui/button"
import { useNavigate } from "react-router-dom"
import { motion, easeInOut } from "framer-motion"

const products = [
    {
        name: "Linha Estrutural",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estrutural-icon-qLPPc6erfaqjwbk8sObuHI1pi66mc1.png",
        description: "Blocos para alvenaria estrutural com alta resistência mecânica",
        features: ["Alta resistência", "Durabilidade", "Econômico"],
    },
    {
        name: "Linha Vedação Furo Vertical",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vertical-gbdqs4YMbncS6suXhSpFAfzaIRENgt.png",
        description: "Blocos de vedação com furos verticais para melhor isolamento",
        features: ["Isolamento térmico", "Leveza", "Facilidade"],
    },
    {
        name: "Linha Vedação Furo Horizontal",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal-QVEBLsqL1Tif8RP14WxVePuYlGX9F3.png",
        description: "Blocos de vedação com furos horizontais para instalações",
        features: ["Versatilidade", "Praticidade", "Acabamento"],
    },
    {
        name: "Linha Bloco Top",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/top-YEHE2lIj0qN3dB3icqClJy1G9Bku51.png",
        description: "Blocos premium com design otimizado para construção rápida",
        features: ["Produtividade", "Qualidade", "Inovação"],
    },
]

const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeInOut },
    },
}

const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeInOut },
    },
}

const gridVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const cardVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.45, ease: easeInOut },
    },
}

const ctaVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: easeInOut, delay: 0.2 },
    },
}

export default function ProductsSection() {
    const navigate = useNavigate()

    return (
        <motion.div
            className="w-full bg-linear-to-b from-white to-primary/5 py-20 px-4"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Cabeçalho */}
                <motion.div
                    className="text-center mb-16"
                    variants={headerVariants}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-4">
                        <Building2 className="w-4 h-4" />
                        Nossos Produtos
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
                        Selecione abaixo uma linha para conhecer nossos{" "}
                        <span className="text-primary">produtos</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Oferecemos uma ampla variedade de blocos cerâmicos de alta qualidade para atender às suas necessidades
                    </p>
                </motion.div>

                {/* Grid de produtos */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
                    variants={gridVariants}
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.name}
                            variants={cardVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-6 flex flex-col items-center text-center h-full">
                                <div className="w-full aspect-square mb-6 flex items-center justify-center bg-linear-to-br from-primary/5 to-primary/10 rounded-xl p-8 group-hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={product.image || "/placeholder.svg"}
                                        alt={product.name}
                                        className="w-full h-full object-contain drop-shadow-xl"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>

                                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="flex flex-wrap justify-center gap-2 mb-6">
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
                                    className="w-full mt-auto group/btn border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                                    onClick={() => navigate("/products")}
                                >
                                    Ver Detalhes
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                            <div className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <TrendingUp className="w-6 h-6 text-primary" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA final */}
                <motion.div
                    className="text-center bg-linear-to-br from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white shadow-xl"
                    variants={ctaVariants}
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Não sabe qual produto escolher?
                    </h3>
                    <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
                        Nossa equipe técnica está pronta para ajudar você a escolher o produto ideal para sua obra
                    </p>
                    <Button
                        size="lg"
                        variant="secondary"
                        className="px-10 py-6 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                        onClick={() => { navigate('https://w.app/uniceramicas') }}
                    >
                        Falar com Especialista
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    )
}

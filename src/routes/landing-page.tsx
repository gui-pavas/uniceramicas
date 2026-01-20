"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, MapPin } from "lucide-react"
import { Link } from "react-router-dom"

// import aboutUs from '@/assets/fachada.jpg'
import aboutUs from '@/assets/lpUni.png'
import banner from '@/assets/bannerLP.png'

import e14x19x39 from '@/assets/products/estrutural/14/14x19x39.png'
import e14x19x4 from '@/assets/products/estrutural/14/14x19x4.png'
import e07x19x39 from '@/assets/products/estrutural/07/7x19x39-.png'
import e09x19x39 from '@/assets/products/estrutural/09/9x19x39.png'
import e19x19x39 from '@/assets/products/estrutural/19/19X19X39.png'
import c11x11x11x39 from '@/assets/products/estrutural/11/c11x11x11x39.png'

const products = [
    {
        name: "Bloco Estrutural 14x19x4",
        description: "Alta resistência para alvenaria estrutural",
        image: e14x19x4,
    },
    {
        name: "Bloco Estrutural 07x19x39",
        description: "Ideal para obras de grande porte",
        image: e07x19x39,
    },
    {
        name: "Bloco de Vedação 9x19x39",
        description: "Perfeito para paredes internas",
        image: e09x19x39,
    },
    {
        name: "Bloco de Vedação 14x19x39",
        description: "Versatilidade e economia",
        image: e14x19x39,
    },
    {
        name: "Bloco de Vedação 19x19x39",
        description: "Máximo isolamento térmico",
        image: e19x19x39,
    },
    {
        name: "Canaleta Cerâmica c11x11x11x39",
        description: "Para cintas e vergas estruturais",
        image: c11x11x11x39,
    },
]

export default function LandingPage() {

    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative px-4 py-16 md:py-24 overflow-hidden">

                {/* Background layers */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-amber-200/20 to-orange-600/30 animate-gradient-xy z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.1),_transparent_40%)] z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,hsl(var(--accent)/0.1),_transparent_40%)] z-0" /> */}

                <img src={banner} alt="Banner Unicerâmicas" className="absolute inset-0 w-full h-full object-cover object-center opacity-90 z-0" />

                {/* Content */}
                <div className="relative mx-auto max-w-4xl text-center z-10">
                    <p className="mb-4 text-sm font-bold uppercase tracking-wider text-neutral-50">
                        Direto da Fábrica para sua Obra
                    </p>

                    <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                        Blocos Cerâmicos com até <span className="text-primary">30% de Economia</span>
                    </h1>

                    <p className="mx-auto mb-8 max-w-2xl text-lg text-white/80 md:text-xl">
                        Mais de 25 anos fornecendo blocos de alta qualidade para construtoras e obras em todo o Brasil.
                    </p>

                    <Button size="lg" className="gap-2 text-lg">
                        <Link
                            to="https://wa.me/5511940238363?text=Olá, vim do site e gostaria de fazer um orçamento."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center"
                        >
                            Solicitar Orçamento Grátis
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                    </Button>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>ISO 9001</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>+500 Clientes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>Entrega Rápida</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sobre Nós Section */}
            <section className="bg-secondary/30 px-4 py-16">
                <div className="mx-auto max-w-4xl">
                    <h2 className="mb-10 text-center text-3xl font-bold text-foreground">Sobre a Unicerâmicas</h2>

                    <div className="grid gap-8 md:grid-cols-2">
                        <div>
                            <p className="mb-4 text-muted-foreground leading-relaxed">
                                Há quase <strong className="text-foreground">40 anos no mercado</strong>, a Unicerâmicas é referência na venda de blocos cerâmicos de alta qualidade.
                                Representamos fabricas de diversas cidades de São Paulo como Jundiaí e Itu.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Trabalhamos com <strong className="text-foreground">matéria-prima selecionada</strong> e processos de produção modernos, garantindo produtos que atendem às normas técnicas brasileiras e proporcionam economia e durabilidade para sua obra.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <span className="text-neutral-500"><span className="text-primary me-2">•</span> 40 anos de experiência</span>
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <span className="text-neutral-500"><span className="text-primary me-2">•</span> ISO Certificação 9001</span>
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                <span className="text-neutral-500"><span className="text-primary me-2">•</span> Entrega em todo o estado de São Paulo</span>
                            </p>
                            <Button size="lg" className="gap-2 text-lg mt-5 rounded">
                                <Link to={"https://wa.me/5511940238363?text=Olá, vim do site e gostaria de fazer um orçamento."}
                                    target="_blank" rel="noopener noreferrer" className="flex items-center">
                                    Solicitar Orçamento Grátis
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            <img src={aboutUs} alt="Sobre Nós" className="w-full h-auto rounded object-cover" />
                        </div>

                    </div>

                </div>

            </section>

            {/* Products Section */}
            <div className="border-t-2 border-t-primary w-[80%] mx-auto"></div>
            <section className="bg-secondary/50 px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-10 text-center text-3xl font-bold text-foreground">Nossos Produtos</h2>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <Card
                                key={product.name}
                                className="overflow-hidden border-0 bg-card shadow-sm transition-shadow hover:shadow-md"
                            >
                                <img
                                    src={product.image || "/placeholder.svg"}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-card-foreground">{product.name}</h3>
                                    <p className="mt-1 text-sm text-muted-foreground">{product.description}</p>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Área de Entrega Section */}
            <section className="px-4 py-16">
                <div className="mx-auto max-w-4xl">
                    <div className="rounded-2xl bg-primary/10 p-8 md:p-12">
                        <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
                            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-primary/20">
                                <MapPin className="h-10 w-10 text-primary" />
                            </div>

                            <div className="text-center md:text-left">
                                <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
                                    Entregamos em Todo o Estado de São Paulo
                                </h2>
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    Nossa frota própria garante entregas rápidas e seguras para qualquer cidade paulista. Da capital ao interior, levamos nossos blocos cerâmicos diretamente para sua obra com pontualidade e cuidado.
                                </p>
                                <div className="flex flex-wrap justify-center gap-3 text-sm md:justify-start">
                                    <span className="rounded-full bg-card px-3 py-1 text-muted-foreground">Capital</span>
                                    <span className="rounded-full bg-card px-3 py-1 text-muted-foreground">Grande SP</span>
                                    <span className="rounded-full bg-card px-3 py-1 text-muted-foreground">Interior</span>
                                    <span className="rounded-full bg-card px-3 py-1 text-muted-foreground">Litoral</span>
                                    <span className="rounded-full bg-card px-3 py-1 text-muted-foreground">Vale do Paraíba</span>
                                </div>
                                <Button size="lg" className="gap-2 text-lg mt-5 rounded">
                                    <Link to={"https://wa.me/5511940238363?text=Olá, vim do site e gostaria de fazer um orçamento."}
                                        target="_blank" rel="noopener noreferrer" className="flex items-center">
                                        Solicitar Orçamento Grátis
                                        <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple footer line */}
            <div className="border-t border-border px-4 py-6 text-center text-sm text-muted-foreground">
                Unicerâmicas © {new Date().getFullYear()} — Todos os direitos reservados
            </div>
        </div>
    )
}

import { Button } from "./ui/button"
import { ArrowRight, Phone, Building2, CheckCircle2 } from "lucide-react"
import hs_background from "../assets/HS-background.jpg"
import Logo from '../assets/logo600x600.png'

export default function HeroSection() {
    return (
        <div className="relative w-full min-h-screen bg-background flex flex-col">
            {/* Hero Principal */}
            <div className="relative w-full min-h-screen bg-linear-to-br from-primary/5 via-background to-primary/5 flex flex-col justify-center items-center overflow-hidden px-4 pt-40 pb-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,88,12,0.1),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,88,12,0.05),transparent_50%)]" />

                <div className="absolute inset-0 opacity-25">
                    <img src={hs_background} alt="background-image" className="w-full h-full object-cover object-center" />
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center gap-6 max-w-6xl mx-auto">
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <img
                            src={Logo}
                            alt="Unicerâmicas Logo"
                            width={200}
                            height={200}
                            className="drop-shadow-2xl"
                        />
                    </div>

                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-lg">
                            <Building2 className="w-4 h-4" />
                            Blocos cerâmicos para alvenaria estrutural, vedação e racionalizada
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-balance animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 leading-tight">
                        Bem vindo à <span className="text-primary">Unicerâmicas!</span>
                    </h1>

                    <p className="text-lg md:text-2xl text-center text-muted-foreground max-w-3xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                        Blocos cerâmicos de alta qualidade que reduzem custos, aumentam a produtividade e garantem resultados
                        excepcionais para sua obra.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
                        <Button
                            size="lg"
                            className="group px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90"
                        >
                            Explorar Produtos
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="group px-10 py-7 text-lg font-bold border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
                        >
                            <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                            (11) 94023-8363
                        </Button>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 mt-12 animate-in fade-in duration-700 delay-500">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Venda Direta da Fábrica</span>
                        </div>
                        <div className="hidden sm:block w-px h-5 bg-border" />
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Atendimento Personalizado</span>
                        </div>
                        <div className="hidden sm:block w-px h-5 bg-border" />
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Acompanhamento Especializado</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
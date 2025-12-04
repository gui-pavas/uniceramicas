import { Button } from "./ui/button"
import { ArrowRight, Phone, Building2, CheckCircle2 } from "lucide-react"
import hs_background from "../assets/HS-background.jpg"
import Logo from "../assets/logo600x600.png"
import { motion, easeOut } from "framer-motion"
import { Separator } from "@radix-ui/react-separator"

const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easeOut,
            staggerChildren: 0.12,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: easeOut },
    },
}

const backgroundVariants = {
    hidden: { opacity: 0, scale: 1.02 },
    visible: {
        opacity: 0.25,
        scale: 1,
        transition: { duration: 0.8, ease: easeOut },
    },
}

export default function HeroSection() {
    return (
        <div className="relative w-full min-h-screen bg-background flex flex-col">
            {/* Hero Principal */}
            <div className="relative w-full min-h-screen bg-linear-to-br from-primary/5 via-background to-primary/5 flex flex-col justify-center items-center overflow-hidden px-4 pt-40 pb-12">
                {/* Gradientes */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,88,12,0.1),transparent_50%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(234,88,12,0.05),transparent_50%)]" />
                </div>

                {/* Background da imagem com animação suave */}
                <motion.div
                    className="absolute inset-0"
                    variants={backgroundVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <img
                        src={hs_background}
                        alt="background-image"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>

                {/* Conteúdo principal */}
                <motion.div
                    className="relative z-10 flex flex-col justify-center items-center gap-6 max-w-6xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Logo */}
                    <motion.div variants={itemVariants}>
                        <motion.img
                            src={Logo}
                            alt="Unicerâmicas Logo"
                            width={200}
                            height={200}
                            className="drop-shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                    </motion.div>

                    {/* Pill de destaque */}
                    <motion.div variants={itemVariants}>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold shadow-lg shadow-primary/30">
                            <Building2 className="w-4 h-4" />
                            Blocos cerâmicos para alvenaria estrutural, vedação e racionalizada
                        </div>
                    </motion.div>

                    {/* Título */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-balance leading-tight"
                    >
                        Bem vindo à <span className="text-primary">Unicerâmicas!</span>
                    </motion.h1>

                    {/* Subtítulo */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-2xl text-center text-muted-foreground max-w-3xl leading-relaxed"
                    >
                        Blocos cerâmicos de alta qualidade que reduzem custos, aumentam a
                        produtividade e garantem resultados excepcionais para sua obra.
                    </motion.p>

                    {/* Botões */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 mt-8"
                    >
                        <Button
                            size="lg"
                            className="group px-10 py-7 text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-primary hover:bg-primary/90"
                        >
                            Explorar Produtos
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <Button
                            size="lg"
                            className="group px-10 py-7 text-lg font-bold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-white"
                            asChild
                        >
                            <a href="tel:11940238363">
                                <Phone className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                                (11) 94023-8363
                            </a>
                        </Button>
                    </motion.div>

                    {/* Itens de confiança */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-wrap justify-center items-center gap-8 mt-12"
                    >
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="font-bold">Venda Direta da Fábrica</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="font-bold">Atendimento Personalizado</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span className="font-bold">Acompanhamento Especializado</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

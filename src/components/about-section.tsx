import { Building2, Users, Award, Target } from "lucide-react"

import aboutUsImage from '@/assets/lpUni.png'

export default function AboutSection() {
    return (
        <div className="w-full bg-background py-20 px-4" id="about">
            <div className="max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Column - Text */}
                    <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                            Sobre a <span className="text-[#ff6b35]">Unicerâmicas</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            A Unicerâmicas é uma central de vendas especializada em blocos cerâmicos para a construção civil,
                            oferecendo produtos de alta qualidade para alvenaria estrutural, de vedação e outros tipos de aplicação.
                            Com foco na venda direta da fábrica, a empresa atende obras de pequeno, médio e grande porte com agilidade
                            e suporte técnico especializado.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Presente no mercado há décadas, a Unicerâmicas tem consolidado sua reputação por fornecer soluções cerâmicas
                            que unem tecnologia, resistência e precisão dimensional, garantindo mais eficiência e durabilidade nas obras.
                            A empresa prioriza relacionamento com clientes e parceiros, buscando sempre melhoria contínua no atendimento
                            e entrega dos produtos.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Localizada em Santo André (SP), a Unicerâmicas se destaca pelo compromisso com o setor da construção,
                            oferecendo uma linha completa de blocos cerâmicos estruturais e de vedação e contribuindo com resultados
                            sólidos para projeto e obra.
                        </p>
                    </div>

                    {/* Right Column - Image Placeholder */}
                    <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                        <div className="aspect-3/3 rounded-2xl bg-muted overflow-hidden">
                            <img
                                src={aboutUsImage}
                                alt="Unicerâmicas fachada"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Stats/Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        className="text-center p-6 rounded-xl bg-muted/50 animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: "0ms" }}
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-[#ff6b35]" strokeWidth={2} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">35+</h3>
                        <p className="text-sm text-muted-foreground">Anos de experiência</p>
                    </div>

                    <div
                        className="text-center p-6 rounded-xl bg-muted/50 animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: "100ms" }}
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                            <Users className="w-8 h-8 text-[#ff6b35]" strokeWidth={2} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">15 mil</h3>
                        <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
                    </div>

                    <div
                        className="text-center p-6 rounded-xl bg-muted/50 animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: "200ms" }}
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                            <Award className="w-8 h-8 text-[#ff6b35]" strokeWidth={2} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">Certificação de qualidade</h3>
                        <p className="text-sm text-muted-foreground">Fornecedores 100% certificados</p>
                    </div>

                    <div
                        className="text-center p-6 rounded-xl bg-muted/50 animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: "300ms" }}
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                            <Target className="w-8 h-8 text-[#ff6b35]" strokeWidth={2} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">100%</h3>
                        <p className="text-sm text-muted-foreground">Compromisso com qualidade</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

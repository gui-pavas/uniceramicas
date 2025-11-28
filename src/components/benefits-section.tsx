import { Zap, DollarSign, Shield, TrendingUp, CheckCircle2 } from "lucide-react"

export default function BenefitsSection() {
    return (
        <div className="w-full bg-white py-20 px-4" id="benefits">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                        Conheça as principais vantagens na utilização de <span className="text-primary">blocos cerâmicos</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-primary/5 transition-colors">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <Zap className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">PRÁTICO, ÁGIL E LIMPO</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                            <li>• Maior produtividade da obra</li>
                            <li>• Sem rasgos na alvenaria</li>
                            <li>• Ferramental reutilizável</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-primary/5 transition-colors">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <DollarSign className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">ECONÔMICO</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                            <li>• Redução de até 30% na argamassa</li>
                            <li>• Diminuição das perdas</li>
                            <li>• Quantificação precisa de materiais</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-primary/5 transition-colors">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <Shield className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">CONTROLE</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                            <li>• Projetos fáceis de integrar</li>
                            <li>• Blocos especiais para instalações</li>
                            <li>• Padronização de aberturas</li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-primary/5 transition-colors">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                            <TrendingUp className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">EFICIÊNCIA</h3>
                        <ul className="text-sm text-muted-foreground space-y-2 text-left">
                            <li>• Alta resistência estrutural</li>
                            <li>• Excelente isolamento térmico</li>
                            <li>• Rapidez na execução</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-primary">Por que escolher nossos blocos?</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold">Custo-benefício excepcional</p>
                                        <p className="text-sm text-muted-foreground">Economia garantida em todas as etapas da construção</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold">Isolamento térmico e acústico superior</p>
                                        <p className="text-sm text-muted-foreground">Conforto garantido para os usuários finais</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold">Resistência comprovada</p>
                                        <p className="text-sm text-muted-foreground">Produtos testados e certificados</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-primary">Benefícios na obra</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold">Redução de desperdícios</p>
                                        <p className="text-sm text-muted-foreground">Menos entulho e material descartado</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold">Facilidade de instalação</p>
                                        <p className="text-sm text-muted-foreground">Execução rápida com mão de obra qualificada</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                                    <div>
                                        <p className="font-semibold">Versatilidade de aplicações</p>
                                        <p className="text-sm text-muted-foreground">Ideal para diversos tipos de projetos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

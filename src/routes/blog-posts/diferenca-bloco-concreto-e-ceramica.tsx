import Layout from "@/components/layouts/layout"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import concretoVsceramico from '@/assets/blog/ceramico-concreto.jpeg'

export default function DiferencaBlocoConcretoECeramica() {
    const pageTitle = "Bloco de Concreto x Bloco Cerâmico: Diferenças e Aplicações | Blog da Unicerâmicas"
    const pageDescription =
        "Compare bloco de concreto e bloco cerâmico em isolamento térmico, produtividade, custo e desempenho para escolher o material certo para sua obra."

    return (
        <Layout>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="article" />
            </Helmet>

            <div className="container mx-auto px-4 py-12 max-w-3xl mt-32">
                <div className="mb-6">
                    <Button asChild variant="ghost" size="sm">
                        <Link to="/blog">← Voltar para o blog</Link>
                    </Button>
                </div>

                <div className="mb-4 flex items-center gap-3 flex-wrap">
                    <Badge>Dicas</Badge>
                    <span className="text-sm text-muted-foreground">
                        {new Date("2026-02-22").toLocaleDateString("pt-BR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                    <span className="text-sm text-muted-foreground">• 6 min de leitura</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-gray-700">
                    Bloco de Concreto x Bloco Cerâmico: Qual Faz Mais Sentido para Sua Obra?
                </h1>

                <div className="mb-8">
                    <img
                        src={concretoVsceramico}
                        alt="Comparação entre bloco de concreto e bloco cerâmico"
                        className="w-full rounded-lg object-cover max-h-[420px]"
                    />
                </div>

                <article className="space-y-6 text-base leading-7 text-lg text-gray-900">
                    <p>
                        Tanto o bloco de concreto quanto o bloco cerâmico são amplamente usados na construção civil.
                        A melhor escolha depende do tipo de projeto, do desempenho esperado e das condições da obra.
                    </p>
                    <p>
                        Avaliar apenas o preço unitário pode gerar uma decisão ruim. O ideal é comparar custo global,
                        produtividade e comportamento do material ao longo do tempo.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Bloco de concreto</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Alta resistência mecânica.</li>
                            <li>Bom desempenho em alvenaria estrutural.</li>
                            <li>Tende a exigir maior cuidado com conforto térmico.</li>
                            <li>Pode aumentar o peso próprio da estrutura.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Bloco cerâmico</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Boa capacidade de isolamento térmico.</li>
                            <li>Menor peso, facilitando manuseio e logística.</li>
                            <li>Excelente rendimento em vedação e também em linhas estruturais específicas.</li>
                            <li>Contribui para conforto interno em climas quentes.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Pontos de decisão para obra</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Objetivo da parede: estrutural ou vedação.</li>
                            <li>Condições de clima e necessidade de conforto térmico.</li>
                            <li>Mão de obra disponível e ritmo de execução.</li>
                            <li>Projeto e normas técnicas aplicáveis.</li>
                        </ul>
                    </section>

                    <p>
                        Não existe um único material melhor para todos os casos. Existe o material mais adequado para
                        cada cenário de uso. Com especificação técnica correta, o resultado é mais eficiência e menos
                        retrabalho.
                    </p>
                </article>
            </div>
        </Layout>
    )
}

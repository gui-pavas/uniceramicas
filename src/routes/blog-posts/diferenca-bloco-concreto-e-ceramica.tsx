import Layout from "@/components/layouts/layout"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import concretoVsceramico from '@/assets/blog/ceramico-concreto.jpeg'

export default function DiferencaBlocoConcretoECeramica() {
    const pageTitle = "Bloco de Concreto x Bloco Ceramico: Diferencas e Aplicacoes | Blog da Uniceramicas"
    const pageDescription =
        "Compare bloco de concreto e bloco ceramico em isolamento termico, produtividade, custo e desempenho para escolher o material certo para sua obra."

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
                    Bloco de Concreto x Bloco Ceramico: Qual Faz Mais Sentido para Sua Obra?
                </h1>

                <div className="mb-8">
                    <img
                        src={concretoVsceramico}
                        alt="Comparacao entre bloco de concreto e bloco ceramico"
                        className="w-full rounded-lg object-cover max-h-[420px]"
                    />
                </div>

                <article className="space-y-6 text-base leading-7 text-lg text-gray-900">
                    <p>
                        Tanto o bloco de concreto quanto o bloco ceramico sao amplamente usados na construcao civil.
                        A melhor escolha depende do tipo de projeto, do desempenho esperado e das condicoes da obra.
                    </p>
                    <p>
                        Avaliar apenas o preco unitario pode gerar uma decisao ruim. O ideal e comparar custo global,
                        produtividade e comportamento do material ao longo do tempo.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Bloco de concreto</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Alta resistencia mecanica.</li>
                            <li>Bom desempenho em alvenaria estrutural.</li>
                            <li>Tende a exigir maior cuidado com conforto termico.</li>
                            <li>Pode aumentar o peso proprio da estrutura.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Bloco ceramico</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Boa capacidade de isolamento termico.</li>
                            <li>Menor peso, facilitando manuseio e logistica.</li>
                            <li>Excelente rendimento em vedacao e tambem em linhas estruturais especificas.</li>
                            <li>Contribui para conforto interno em climas quentes.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Pontos de decisao para obra</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Objetivo da parede: estrutural ou vedacao.</li>
                            <li>Condicoes de clima e necessidade de conforto termico.</li>
                            <li>Mao de obra disponivel e ritmo de execucao.</li>
                            <li>Projeto e normas tecnicas aplicaveis.</li>
                        </ul>
                    </section>

                    <p>
                        Nao existe um unico material melhor para todos os casos. Existe o material mais adequado para
                        cada cenario de uso. Com especificacao tecnica correta, o resultado e mais eficiencia e menos
                        retrabalho.
                    </p>
                </article>
            </div>
        </Layout>
    )
}

import Layout from "@/components/layouts/layout"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import processoDeProducao from '@/assets/blog/processo-de-producao-de-tijolos.jpg'

export default function ProcessoDeConfeccaoDoTijolo() {
    const pageTitle = "Como é Feita a Confecção do Tijolo Cerâmico: Etapa por Etapa | Blog da Unicerâmicas"
    const pageDescription =
        "Conheça o processo de fabricação do tijolo cerâmico, da preparação da argila à queima em forno, e entenda como cada etapa impacta na qualidade final."

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
                    <Badge>Tendências</Badge>
                    <span className="text-sm text-muted-foreground">
                        {new Date("2026-02-22").toLocaleDateString("pt-BR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                    <span className="text-sm text-muted-foreground">• 7 min de leitura</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-gray-700">
                    Processo de Confecção do Tijolo Cerâmico: Da Argila ao Canteiro de Obras
                </h1>

                <div className="mb-8">
                    <img
                        src={processoDeProducao}
                        alt="Processo de fabricação do tijolo cerâmico"
                        className="w-full rounded-lg object-cover max-h-[420px]"
                    />
                </div>

                <article className="space-y-6 text-base leading-7 text-lg text-gray-900">
                    <p>
                        A qualidade de um tijolo começa muito antes da obra. O processo de fabricação envolve controle
                        de matéria-prima, precisão industrial e monitoramento constante em todas as etapas.
                    </p>
                    <p>
                        Quando cada fase é bem executada, o resultado é um produto com melhor resistência, menor índice
                        de perda e excelente desempenho no assentamento.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">1. Preparação da argila</h2>
                        <p>
                            A argila passa por seleção, homogeneização e ajuste de umidade para garantir consistência
                            no molde.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Controle granulométrico.</li>
                            <li>Retirada de impurezas.</li>
                            <li>Padronização da mistura.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">2. Moldagem e corte</h2>
                        <p>
                            A massa segue para extrusão e corte nas dimensões especificadas, garantindo repetibilidade
                            e precisão das peças.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Formação contínua dos blocos.</li>
                            <li>Cortes uniformes.</li>
                            <li>Controle dimensional em linha.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">3. Secagem e queima</h2>
                        <p>
                            A secagem reduz umidade antes da queima. Em seguida, o forno consolida as propriedades
                            mecânicas e a estabilidade da peça.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Secagem controlada para evitar trincas.</li>
                            <li>Queima em faixa térmica adequada.</li>
                            <li>Resfriamento gradual para manter integridade.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">4. Inspeção e expedição</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Verificação visual e dimensional.</li>
                            <li>Separação por lote e paletização.</li>
                            <li>Logística para entrega com menor risco de avaria.</li>
                        </ul>
                    </section>

                    <p>
                        Entender esse processo ajuda a escolher melhor o fornecedor. Produção com controle técnico
                        significa mais confiança no canteiro e melhor desempenho da alvenaria no longo prazo.
                    </p>
                </article>
            </div>
        </Layout>
    )
}

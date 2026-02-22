import Layout from "@/components/layouts/layout"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import ambientVsTijolo from '@/assets/blog/como-escolher-entre-tijolo-ou-bloco.jpg'

export default function ComoOAmbienteAfetaNaEscolhaDoTijolo() {
    const pageTitle = "Como o Ambiente Afeta a Escolha do Tijolo | Blog da Uniceramicas"
    const pageDescription =
        "Saiba como clima, umidade, exposicao e uso do imovel influenciam na escolha do tijolo ideal para obter melhor desempenho e durabilidade."

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
                    <span className="text-sm text-muted-foreground">• 5 min de leitura</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-gray-700">
                    Como o Ambiente Afeta a Escolha do Tijolo na Sua Construcao
                </h1>

                <div className="mb-8">
                    <img
                        src={ambientVsTijolo}
                        alt="Fatores ambientais na escolha do tijolo"
                        className="w-full rounded-lg object-cover max-h-[420px]"
                    />
                </div>

                <article className="space-y-6 text-base leading-7 text-lg text-gray-900">
                    <p>
                        A escolha do tijolo nao deve ser feita apenas por preco ou disponibilidade. As condicoes do
                        ambiente influenciam diretamente no conforto, na durabilidade e na manutencao da construcao.
                    </p>
                    <p>
                        Clima local, incidencia de sol, umidade e tipo de uso do imovel sao fatores que precisam entrar
                        na decisao desde o inicio do projeto.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Clima e conforto termico</h2>
                        <p>
                            Em regioes mais quentes, materiais com melhor desempenho termico ajudam a reduzir ganho de
                            calor e melhoram o conforto interno.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Menor variacao de temperatura nos ambientes.</li>
                            <li>Reducao da dependencia de climatizacao artificial.</li>
                            <li>Melhor eficiencia energetica do imovel.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Umidade e exposicao</h2>
                        <p>
                            Ambientes com maior contato com chuva, maresia ou umidade constante exigem solucoes
                            construtivas compativeis com essa condicao.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Escolha correta do bloco conforme aplicacao.</li>
                            <li>Detalhamento de revestimentos e impermeabilizacao.</li>
                            <li>Execucao adequada de juntas e acabamentos.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Uso da edificacao</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Residencial: equilibrio entre conforto e custo.</li>
                            <li>Comercial: desempenho e produtividade de obra.</li>
                            <li>Industrial: robustez e resistencia conforme projeto.</li>
                        </ul>
                    </section>

                    <p>
                        Quando o ambiente e considerado na escolha do tijolo, a obra ganha em desempenho, vida util e
                        economia de manutencao. A especificacao certa evita problemas futuros e valoriza o investimento.
                    </p>
                </article>
            </div>
        </Layout>
    )
}

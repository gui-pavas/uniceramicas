import Layout from "@/components/layouts/layout"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import ambientVsTijolo from '@/assets/blog/como-escolher-entre-tijolo-ou-bloco.jpg'

export default function ComoOAmbienteAfetaNaEscolhaDoTijolo() {
    const pageTitle = "Como o Ambiente Afeta a Escolha do Tijolo | Blog da Unicerâmicas"
    const pageDescription =
        "Saiba como clima, umidade, exposição e uso do imóvel influenciam na escolha do tijolo ideal para obter melhor desempenho e durabilidade."

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
                    Como o Ambiente Afeta a Escolha do Tijolo na Sua Construção
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
                        A escolha do tijolo não deve ser feita apenas por preço ou disponibilidade. As condições do
                        ambiente influenciam diretamente no conforto, na durabilidade e na manutenção da construção.
                    </p>
                    <p>
                        Clima local, incidência de sol, umidade e tipo de uso do imóvel são fatores que precisam entrar
                        na decisão desde o início do projeto.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Clima e conforto térmico</h2>
                        <p>
                            Em regiões mais quentes, materiais com melhor desempenho térmico ajudam a reduzir ganho de
                            calor e melhoram o conforto interno.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Menor variação de temperatura nos ambientes.</li>
                            <li>Redução da dependência de climatização artificial.</li>
                            <li>Melhor eficiência energética do imóvel.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Umidade e exposição</h2>
                        <p>
                            Ambientes com maior contato com chuva, maresia ou umidade constante exigem soluções
                            construtivas compatíveis com essa condição.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Escolha correta do bloco conforme aplicação.</li>
                            <li>Detalhamento de revestimentos e impermeabilização.</li>
                            <li>Execução adequada de juntas e acabamentos.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Uso da edificação</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Residencial: equilíbrio entre conforto e custo.</li>
                            <li>Comercial: desempenho e produtividade de obra.</li>
                            <li>Industrial: robustez e resistência conforme projeto.</li>
                        </ul>
                    </section>

                    <p>
                        Quando o ambiente é considerado na escolha do tijolo, a obra ganha em desempenho, vida útil e
                        economia de manutenção. A especificação certa evita problemas futuros e valoriza o investimento.
                    </p>
                </article>
            </div>
        </Layout>
    )
}

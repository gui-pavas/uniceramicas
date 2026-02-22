import Layout from "@/components/layouts/layout"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import bainoVsEstrutural from '@/assets/blog/tipos-de-tijolos.jpg'
export default function DiferencaTijoloBaianoEEstrutural() {
    const pageTitle = "Diferença entre Tijolo Baiano e Estrutural: Qual Escolher na Sua Obra | Blog da Unicerâmicas"
    const pageDescription =
        "Entenda as diferenças entre tijolo baiano e bloco estrutural, onde cada um deve ser aplicado e como evitar erros que aumentam custo e retrabalho."

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
                    Diferença entre Tijolo Baiano e Bloco Estrutural: Entenda Antes de Comprar
                </h1>

                <div className="mb-8">
                    <img
                        src={bainoVsEstrutural}
                        alt="Comparação entre tijolo baiano e bloco estrutural"
                        className="w-full rounded-lg object-cover max-h-[420px]"
                    />
                </div>

                <article className="space-y-6 text-base leading-7 text-lg text-gray-900">
                    <p>
                        Na hora de construir, muita gente trata tijolo baiano e bloco estrutural como se fossem o mesmo
                        produto. Na prática, eles têm funções diferentes e impactam diretamente segurança, custo e
                        desempenho da obra.
                    </p>
                    <p>
                        A escolha correta começa pelo projeto. Quando o material é especificado de forma errada, surgem
                        problemas como fissuras, desperdício de argamassa e necessidade de reforços não previstos.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Tijolo baiano: foco em vedação</h2>
                        <p>
                            O tijolo baiano é usado principalmente para fechamento de paredes que não recebem carga
                            estrutural da edificação.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Mais leve e com furos maiores.</li>
                            <li>Boa produtividade de assentamento.</li>
                            <li>Indicado para divisórias e vedação.</li>
                            <li>Não substitui elementos estruturais do projeto.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Bloco estrutural: foco em resistência</h2>
                        <p>
                            O bloco estrutural é projetado para suportar cargas e pode compor o próprio sistema
                            resistente da obra, conforme cálculo e normas técnicas.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Maior resistência mecânica (como classes de MPa).</li>
                            <li>Geometria padronizada para melhor alinhamento.</li>
                            <li>Permite racionalização da alvenaria estrutural.</li>
                            <li>Reduz etapas quando bem especificado no projeto.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Como decidir na prática</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Verifique se a parede será estrutural ou apenas de vedação.</li>
                            <li>Consulte o memorial descritivo e o projeto estrutural.</li>
                            <li>Compare resistência, dimensão e consumo de argamassa.</li>
                            <li>Compre sempre conforme norma e fornecedor confiável.</li>
                        </ul>
                    </section>

                    <p>
                        Escolher entre baiano e estrutural não é só uma questão de preço por peça. É uma decisão técnica
                        que interfere no custo total da obra, no prazo e na durabilidade da construção.
                    </p>
                </article>
            </div>
        </Layout>
    )
}

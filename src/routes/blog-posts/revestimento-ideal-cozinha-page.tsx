import Layout from "@/components/layouts/layout"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import revestimentoCozinha from '@/assets/blog/revestimento-para-cozinha-00-2.png'

export default function RevestimentoIdealCozinhaPage() {
    const pageTitle = "Como Escolher o Revestimento Ideal para Sua Cozinha | Blog da Unicerâmicas"
    const pageDescription =
        "Entenda como escolher o revestimento ideal para cozinha considerando durabilidade, limpeza, segurança e harmonia com o estilo do projeto."

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
                    <span className="text-sm text-muted-foreground">• 7 min de leitura</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-gray-700">
                    Revestimento Ideal para Cozinha: Como Escolher com Critério Técnico e Estético
                </h1>

                <div className="mb-8">
                    <img
                        src={revestimentoCozinha}
                        alt="Revestimento ideal para cozinha"
                        className="w-full rounded-lg object-cover max-h-[420px]"
                    />
                </div>

                <article className="space-y-6 text-base leading-7 text-lg text-gray-900">
                    <p>
                        A cozinha é uma das áreas mais exigidas da casa. O revestimento precisa responder bem a
                        gordura, umidade, calor e limpeza frequente sem perder desempenho ao longo do tempo.
                    </p>
                    <p>
                        Uma boa escolha vai além da aparência. Quando o material é definido com base no uso real do
                        ambiente, você reduz manutenção, evita retrabalho e ganha mais durabilidade no acabamento.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Critérios técnicos essenciais</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Baixa absorção de água para suportar umidade constante.</li>
                            <li>Superfície fácil de limpar no dia a dia.</li>
                            <li>Boa resistência a manchas, gordura e calor.</li>
                            <li>No piso, priorize opções antiderrapantes para mais segurança.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Estilo e composição do ambiente</h2>
                        <p>
                            Em cozinhas menores, tons claros ajudam a ampliar a percepção de espaço. Se a proposta for
                            mais marcante, aplique textura ou cor em uma parede de destaque para equilibrar o visual.
                        </p>
                        <p>
                            Também é possível combinar materiais diferentes entre parede e piso, desde que a paleta e
                            os acabamentos conversem entre si.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Erros comuns na escolha</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Escolher apenas pelo visual e ignorar desempenho técnico.</li>
                            <li>Usar o mesmo acabamento para piso e parede sem avaliar segurança.</li>
                            <li>Não considerar a rotina de limpeza e manutenção da família.</li>
                            <li>Desalinhamento entre revestimento, iluminação e marcenaria.</li>
                        </ul>
                    </section>

                    <p>
                        O revestimento ideal para cozinha é aquele que une resistência, praticidade e coerência com o
                        projeto. Com especificação correta, o ambiente fica mais bonito, funcional e durável.
                    </p>
                    <p>
                        Na dúvida, consulte um fornecedor técnico para avaliar as melhores opções para o seu tipo de
                        obra e padrão de uso.
                    </p>
                </article>
            </div>
        </Layout>
    )
}

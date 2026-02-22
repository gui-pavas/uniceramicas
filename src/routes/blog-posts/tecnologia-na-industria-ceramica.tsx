import Layout from "@/components/layouts/layout"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import banner from '@/assets/blog/tecnologiaNaCeramica.png'

export default function TecnologiaNaIndustriaCeramica() {
    const pageTitle = "Tendências de Cerâmicas para 2024: O Que Está em Alta | Blog da Unicerâmicas"
    const pageDescription =
        "Descubra as principais tendências em cerâmicas para este ano, desde texturas naturais até acabamentos modernos que transformam qualquer ambiente."

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
                        {new Date("2026-02-20").toLocaleDateString("pt-BR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                    <span className="text-sm text-muted-foreground">• 5 min de leitura</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance text-gray-700">
                    Tecnologia na Indústria Cerâmica: Como a Automação Eleva a Qualidade dos Nossos Produtos
                </h1>

                <div className="mb-8">
                    <img
                        src={banner}
                        alt="Tendências de cerâmicas para 2024"
                        className="w-full rounded-lg object-cover max-h-[420px]"
                    />
                </div>

                <article className="space-y-6 text-base leading-7 text-lg text-gray-900">
                    <p>
                        A indústria da construção evoluiu e a forma de fabricar blocos e materiais cerâmicos também.
                        Hoje, qualidade não depende só de boa matéria-prima, mas de tecnologia, controle e precisão
                        industrial.
                    </p>
                    <p>
                        Na nossa fábrica, a produção combina tradição cerâmica com sistemas automatizados, esteiras
                        inteligentes e robôs industriais, garantindo padronização, segurança e alto desempenho dos
                        materiais.
                    </p>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">🏭 Automação industrial</h2>
                        <p>
                            A automação permite que boa parte do processo seja controlada por máquinas e sensores,
                            reduzindo falhas humanas e mantendo um padrão rigoroso de fabricação.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Controle preciso de medidas e formatos dos blocos.</li>
                            <li>Produção contínua e mais eficiente.</li>
                            <li>Redução de desperdícios.</li>
                            <li>Maior repetibilidade e padronização.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Uso de robôs na linha de produção</h2>
                        <p>
                            Os robôs industriais atuam principalmente nas etapas de movimentação e organização dos
                            materiais.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Paletização automática.</li>
                            <li>Movimentação de cargas com segurança.</li>
                            <li>Posicionamento preciso dos blocos.</li>
                            <li>Redução de danos ao produto.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="text-2xl font-semibold text-gray-800">Benefícios diretos para quem constrói</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Blocos mais uniformes.</li>
                            <li>Melhor encaixe e alinhamento na alvenaria.</li>
                            <li>Menor desperdício de argamassa.</li>
                            <li>Maior resistência estrutural.</li>
                        </ul>
                    </section>

                    <p>
                        Com processos automatizados e monitoramento em tempo real, a fabricação cerâmica ganha em
                        eficiência, qualidade e sustentabilidade.
                    </p>
                </article>
            </div>
        </Layout>
    )
}

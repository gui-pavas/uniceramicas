import Layout from "@/components/layouts/layout"
import {Helmet} from "react-helmet-async"
import {Button} from "@/components/ui/button"
import {Link} from "react-router-dom"
import {ArrowRight, CheckCircle2, Image as ImageIcon, Truck} from "lucide-react"
import descarga from "@/assets/descarga.jpeg";

export default function DescargaCaminhaoObraPage() {
    const pageTitle = "Como Funciona a Descarga do Caminhão na Obra | Unicerâmicas"
    const pageDescription =
        "Veja como funciona a descarga do caminhão na obra, quais cuidados são necessários no canteiro e como organizar o recebimento de materiais com mais segurança."

    return (
        <Layout>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription}/>
                <meta
                    name="keywords"
                    content="descarga do caminhão na obra, descarga de materiais na obra, recebimento de blocos cerâmicos, logística de entrega em obra, descarregamento de caminhão"
                />
                <meta property="og:title" content={pageTitle}/>
                <meta property="og:description" content={pageDescription}/>
                <meta property="og:type" content="website"/>
            </Helmet>

            <div className="min-h-screen bg-background mt-20 sm:mt-24 md:mt-28">
                <section
                    className="bg-[linear-gradient(180deg,rgba(40,28,22,0.05),rgba(255,255,255,1))] px-4 py-14 sm:py-18">
                    <div className="mx-auto max-w-6xl grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div className="lg:pt-8">
                            <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-primary">
                                Logística na Obra
                            </p>
                            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                                Como funciona a descarga do caminhão na obra
                            </h1>
                            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                                A imagem principal concentra a orientação visual da entrega e mostra, de forma direta,
                                os cuidados para uma descarga segura no canteiro.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <span
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                                    <CheckCircle2 className="h-4 w-4 text-primary"/>
                                    Área organizada para recebimento
                                </span>
                                <span
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                                    <CheckCircle2 className="h-4 w-4 text-primary"/>
                                    Mais segurança no descarregamento
                                </span>
                                <span
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                                    <CheckCircle2 className="h-4 w-4 text-primary"/>
                                    Menos perdas de material
                                </span>
                            </div>

                            <div className="mt-8">
                                <Button size="lg" className="gap-2 text-base rounded">
                                    <Link
                                        to="https://wa.me/5511940238363?text=Olá, vim do site e gostaria de falar sobre entrega e descarga na obra."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center"
                                    >
                                        Falar com a equipe
                                        <ArrowRight className="h-5 w-5"/>
                                    </Link>
                                </Button>
                            </div>
                        </div>


                        <div className="mx-auto max-w-[800px]">
                            <div
                                className="aspect-[4/5] w-full rounded-sm border bg-white flex flex-col items-center justify-center text-center border-none">
                                <img
                                    src={descarga}
                                    alt="Descarga de Caminhões na Obra"
                                    className="w-full h-full object-fit"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-4 py-16">
                    <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
                        <div className="rounded-sm border bg-white p-6 shadow-sm">
                            <Truck className="h-8 w-8 text-primary"/>
                            <h2 className="mt-4 text-xl font-semibold text-foreground">Chegada do caminhão</h2>
                            <p className="mt-2 leading-7 text-muted-foreground">
                                O acesso precisa estar livre para manobra, com piso adequado e área definida para a
                                operação de descarga.
                            </p>
                        </div>
                        <div className="rounded-sm border bg-white p-6 shadow-sm">
                            <CheckCircle2 className="h-8 w-8 text-primary"/>
                            <h2 className="mt-4 text-xl font-semibold text-foreground">Organização da descarga</h2>
                            <p className="mt-2 leading-7 text-muted-foreground">
                                O ponto de recebimento deve ser escolhido antes da entrega para evitar retrabalho e
                                movimentação desnecessária do material.
                            </p>
                        </div>
                        <div className="rounded-sm border bg-white p-6 shadow-sm">
                            <CheckCircle2 className="h-8 w-8 text-primary"/>
                            <h2 className="mt-4 text-xl font-semibold text-foreground">Conferência final</h2>
                            <p className="mt-2 leading-7 text-muted-foreground">
                                Após o descarregamento, a equipe confere a carga e direciona o armazenamento para
                                preservar a integridade dos blocos.
                            </p>
                        </div>
                    </div>
                </section>

                <div className="sr-only" aria-hidden="true">
                    <h2>Texto SEO sobre descarga do caminhão na obra</h2>
                    <p>
                        A descarga do caminhão na obra é uma etapa importante da logística do canteiro, porque afeta o
                        prazo, a segurança da equipe e a preservação dos materiais entregues. Para que a operação
                        ocorra de forma adequada, a obra deve preparar com antecedência o local de recebimento,
                        garantir espaço para manobra do veículo e definir uma área segura para descarregar blocos
                        cerâmicos, tijolos e outros insumos da construção civil.
                    </p>
                    <p>
                        O processo de descarga de materiais na obra normalmente começa com o posicionamento do caminhão
                        em uma área acessível, nivelada e livre de obstáculos. Em seguida, a equipe responsável faz a
                        orientação do motorista e acompanha o descarregamento para reduzir riscos de quebra, acidentes e
                        retrabalho. Esse cuidado é especialmente importante em entregas de blocos cerâmicos, porque o
                        armazenamento correto após a descarga ajuda a evitar perdas no canteiro.
                    </p>
                    <p>
                        Entre os principais cuidados na descarga do caminhão em uma obra estão a conferência do pedido,
                        a organização do espaço de recebimento, o controle da circulação de pessoas, o uso de apoio
                        operacional adequado e a definição prévia de onde o material será armazenado. Uma logística de
                        entrega bem planejada melhora a produtividade da obra e contribui para um recebimento de
                        materiais mais eficiente.
                    </p>
                    <p>
                        Quando a descarga de caminhão na obra é feita com planejamento, o canteiro ganha em segurança,
                        agilidade e conservação dos produtos. Por isso, obras que recebem blocos, tijolos e materiais
                        cerâmicos devem sempre considerar acesso, espaço, sinalização e armazenamento antes da chegada
                        da carga.
                    </p>
                </div>
            </div>
        </Layout>
    )
}

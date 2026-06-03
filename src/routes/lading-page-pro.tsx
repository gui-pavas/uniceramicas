import { Link } from "react-router-dom";

export default function LandingPageProPage() {
    return (
        <div className="min-h-screen bg-zinc-700 text-white overflow-x-hidden">
            {/* HERO */}
            <section className="relative min-h-screen overflow-hidden">
                <div
                    className="absolute inset-0 opacity-10 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400&auto=format&fit=crop')",
                    }}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-zinc-700 via-zinc-700/95 to-zinc-700/70"></div>

                <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20">

                    {/* LOGO */}
                    <div className="mb-12">
                        <div className="relative inline-block">
                            <div className="border-[5px] border-orange-500 rounded-[36px] px-10 py-6 bg-black/10 backdrop-blur-sm">

                                <div className="flex items-center gap-0 flex-wrap leading-none">
                                    <span className="text-orange-500 text-6xl lg:text-8xl font-black italic tracking-tight">
                                        UNI
                                    </span>

                                    <span className="text-zinc-100 text-6xl lg:text-8xl font-black italic tracking-tight">
                                        CERÂMICAS
                                    </span>
                                </div>

                                <div className="mt-5 relative inline-block border-[5px] border-orange-500 rounded-[28px] px-10 py-4 bg-black/20">
                                    <span className="text-orange-500 text-7xl lg:text-9xl font-black italic leading-none tracking-tight">
                                        PRO
                                    </span>
                                </div>

                                <div className="flex items-center gap-4 mt-6 justify-center">
                                    <div className="w-16 h-[3px] bg-orange-500 rounded-full"></div>

                                    <p className="text-zinc-300 uppercase tracking-[0.35em] text-xs lg:text-sm whitespace-nowrap">
                                        Fornecimento Programado
                                    </p>

                                    <div className="w-16 h-[3px] bg-orange-500 rounded-full"></div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="max-w-5xl">

                        {/* TAG */}
                        <div className="inline-block bg-orange-500 text-black px-5 py-2 rounded-xl font-black text-sm tracking-wide uppercase mb-8">
                            Direto da fábrica • Venda somente no atacado
                        </div>

                        {/* TÍTULO */}
                        <h2 className="text-5xl lg:text-8xl font-black uppercase leading-none tracking-tight mb-8">
                            Bloco Cerâmico
                            <br />
                            <span className="text-orange-500">
                                Com Quem Entende
                            </span>
                            <br />
                            <span className="text-orange-500">
                                De Obra.
                            </span>
                        </h2>

                        {/* SUBTÍTULO */}
                        <p className="text-xl lg:text-2xl text-zinc-100 leading-relaxed max-w-4xl mb-10">
                            A UNICERÂMICAS PRO atende construtoras, empreiteiros e obras de médio e grande porte com fornecimento inteligente de blocos cerâmicos direto da fábrica.
                        </p>

                        {/* DESTAQUE */}
                        <div className="bg-black/25 backdrop-blur-md border-l-8 border-orange-500 rounded-2xl p-8 mb-12 shadow-2xl max-w-4xl">

                            <h3 className="text-3xl lg:text-4xl font-black text-orange-500 uppercase mb-4">
                                Venda Somente No Atacado
                            </h3>

                            <p className="text-lg lg:text-xl leading-relaxed text-zinc-100">
                                Atendemos exclusivamente pedidos acima de
                                <span className="font-black text-orange-500">
                                    {" "}2.000 peças
                                </span>,
                                garantindo melhor custo-benefício, fornecimento programado e logística eficiente para sua obra.
                            </p>

                        </div>

                        {/* BENEFÍCIOS */}
                        <div className="grid lg:grid-cols-3 gap-6 mb-12">

                            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all">
                                <div className="text-orange-500 text-5xl mb-5">
                                    🏭
                                </div>

                                <h4 className="text-2xl font-black mb-4 text-orange-500 uppercase">
                                    Direto da Fábrica
                                </h4>

                                <p className="text-zinc-100 leading-relaxed">
                                    Mais economia, negociação transparente e fornecimento sem intermediários.
                                </p>
                            </div>

                            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all">
                                <div className="text-orange-500 text-5xl mb-5">
                                    📦
                                </div>

                                <h4 className="text-2xl font-black mb-4 text-orange-500 uppercase">
                                    Fornecimento Programado
                                </h4>

                                <p className="text-zinc-100 leading-relaxed">
                                    Planejamento inteligente para evitar atrasos e manter sua obra em ritmo constante.
                                </p>
                            </div>

                            <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all">
                                <div className="text-orange-500 text-5xl mb-5">
                                    🚚
                                </div>

                                <h4 className="text-2xl font-black mb-4 text-orange-500 uppercase">
                                    Atendimento Profissional
                                </h4>

                                <p className="text-zinc-100 leading-relaxed">
                                    Equipe preparada para atender construtoras, galpões, condomínios e obras estruturadas.
                                </p>
                            </div>

                        </div>

                        {/* CTA */}
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 mb-12">

                            <Link
                                to="https://api.whatsapp.com/send?phone=5515991688161&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento%20na%20Unicer%C3%A2micas%20PRO."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-green-500 hover:bg-green-400 text-white font-black text-xl px-10 py-5 rounded-2xl shadow-2xl transition-all hover:scale-105"
                            >
                                SOLICITAR COTAÇÃO
                            </Link>

                            <div className="text-3xl lg:text-5xl font-black text-orange-500">
                                (15) 99168-8161
                            </div>

                        </div>

                        {/* ALERTA */}
                        <div>

                            <div className="inline-block bg-orange-500 text-black px-8 py-5 rounded-2xl text-2xl lg:text-4xl font-black uppercase shadow-2xl mb-6">
                                Pedido mínimo: 2.000 peças
                            </div>

                            <div className="max-w-4xl bg-black/15 border border-white/10 backdrop-blur-sm rounded-2xl px-6 py-5 text-zinc-100 text-lg lg:text-xl leading-relaxed shadow-xl">

                                <span className="font-black text-orange-500 uppercase">
                                    Atendimento regional:
                                </span>

                                {" "}Atendemos toda a Grande São Paulo, interior e litoral.
                                Consulte disponibilidade com nossa central de vendas.

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* INFO SECTION */}
            <section className="bg-zinc-800 py-24 border-t border-white/10">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-20">

                        <h3 className="text-5xl lg:text-7xl font-black uppercase mb-6 leading-none">
                            Por Que Escolher a
                            <span className="text-orange-500">
                                {" "}UNICERÂMICAS PRO?
                            </span>
                        </h3>

                        <p className="max-w-4xl mx-auto text-xl text-zinc-100 leading-relaxed">
                            Fornecimento inteligente para obras que não podem parar. Atendimento focado em construtoras, empreiteiros e compras em volume.
                        </p>

                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">

                        <div className="bg-zinc-700 border border-white/10 rounded-3xl p-10 shadow-xl">
                            <h4 className="text-3xl font-black text-orange-500 uppercase mb-5">
                                Logística Eficiente
                            </h4>

                            <p className="text-lg leading-relaxed text-zinc-100">
                                Entregas organizadas conforme o cronograma da obra, reduzindo desperdícios e evitando estoque excessivo no canteiro.
                            </p>
                        </div>

                        <div className="bg-zinc-700 border border-white/10 rounded-3xl p-10 shadow-xl">
                            <h4 className="text-3xl font-black text-orange-500 uppercase mb-5">
                                Mais Economia
                            </h4>

                            <p className="text-lg leading-relaxed text-zinc-100">
                                Compra direto da fábrica com melhor relação custo-benefício para obras de médio e grande porte.
                            </p>
                        </div>

                        <div className="bg-zinc-700 border border-white/10 rounded-3xl p-10 shadow-xl">
                            <h4 className="text-3xl font-black text-orange-500 uppercase mb-5">
                                Qualidade Comprovada
                            </h4>

                            <p className="text-lg leading-relaxed text-zinc-100">
                                Blocos cerâmicos produzidos com controle de qualidade e desempenho para atender às exigências da construção civil.
                            </p>
                        </div>

                        <div className="bg-zinc-700 border border-white/10 rounded-3xl p-10 shadow-xl">
                            <h4 className="text-3xl font-black text-orange-500 uppercase mb-5">
                                Foco em Obras
                            </h4>

                            <p className="text-lg leading-relaxed text-zinc-100">
                                Atendimento especializado para condomínios, galpões, prédios e obras estruturadas.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-orange-500 text-black py-6 text-center font-black tracking-wide text-lg uppercase">
                UNICERÂMICAS PRO • Fornecimento Inteligente Para Sua Obra
            </footer>
        </div>
    )
}
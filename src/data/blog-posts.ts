import type { ComponentType } from "react"
import TecnologiaNaIndustriaCeramica from "@/routes/blog-posts/tecnologia-na-industria-ceramica.tsx"
import RevestimentoIdealCozinhaPage from "@/routes/blog-posts/revestimento-ideal-cozinha-page"
import DiferencaTijoloBaianoEEstrutural from "@/routes/blog-posts/diferenca-tijolo-baiano-e-estrutural"
import DiferencaBlocoConcretoECeramica from "@/routes/blog-posts/diferenca-bloco-concreto-e-ceramica"
import ProcessoDeConfeccaoDoTijolo from "@/routes/blog-posts/processo-de-confeccao-do-tijolo"
import ComoOAmbienteAfetaNaEscolhaDoTijolo from "@/routes/blog-posts/como-o-ambiente-afeta-na-escolha-do-tijolo"

import bannerTecnologiaCeramica from '@/assets/blog/tecnologiaNaCeramica.png'
import revestimentoCozinha from '@/assets/blog/revestimento-para-cozinha-00-2.png'
import bainoVsEstrutural from '@/assets/blog/tipos-de-tijolos.jpg'
import concretoVsceramico from '@/assets/blog/ceramico-concreto.jpeg'
import ambientVsTijolo from '@/assets/blog/como-escolher-entre-tijolo-ou-bloco.jpg'
import processoDeProducao from '@/assets/blog/processo-de-producao-de-tijolos.jpg'

export interface BlogPost {
    id: number
    title: string
    slug: string
    excerpt: string
    category: string
    date: string
    readTime: string
    image: any
    component: ComponentType
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Tecnologia na Indústria Cerâmica",
        slug: "tendencias-ceramicas-2024",
        excerpt:
            "A indústria da construção evoluiu e a forma de fabricar blocos e materiais cerâmicos também. Hoje, qualidade não depende só de boa matéria-prima, mas de tecnologia, controle e precisão industrial.",
        category: "Tendências",
        date: "2026-02-20",
        readTime: "5 min",
        image: bannerTecnologiaCeramica,
        component: TecnologiaNaIndustriaCeramica,
    },
    {
        id: 2,
        title: "Como Escolher o Revestimento Ideal para Sua Cozinha",
        slug: "revestimento-ideal-cozinha",
        excerpt:
            "Critérios práticos para escolher revestimento de cozinha com foco em durabilidade, segurança e facilidade de manutenção.",
        category: "Dicas",
        date: "2026-02-22",
        readTime: "7 min",
        image: revestimentoCozinha,
        component: RevestimentoIdealCozinhaPage,
    },
    {
        id: 3,
        title: "Diferenca entre Tijolo Baiano e Bloco Estrutural",
        slug: "diferenca-tijolo-baiano-e-estrutural",
        excerpt:
            "Entenda as funcoes de cada material e escolha o produto certo para evitar retrabalho e custos extras na obra.",
        category: "Dicas",
        date: "2026-02-22",
        readTime: "6 min",
        image: bainoVsEstrutural,
        component: DiferencaTijoloBaianoEEstrutural,
    },
    {
        id: 4,
        title: "Diferenca entre Bloco de Concreto e Bloco Ceramico",
        slug: "diferenca-bloco-concreto-e-ceramica",
        excerpt:
            "Compare resistencia, conforto termico e produtividade para decidir entre concreto e ceramica no seu projeto.",
        category: "Dicas",
        date: "2026-02-22",
        readTime: "6 min",
        image: concretoVsceramico,
        component: DiferencaBlocoConcretoECeramica,
    },
    {
        id: 5,
        title: "Processo de Confeccao do Tijolo Ceramico",
        slug: "processo-de-confeccao-do-tijolo",
        excerpt:
            "Veja as etapas da fabricacao, da argila a expedicao, e como o controle industrial impacta na qualidade final.",
        category: "Tendências",
        date: "2026-02-22",
        readTime: "7 min",
        image: processoDeProducao,
        component: ProcessoDeConfeccaoDoTijolo,
    },
    {
        id: 6,
        title: "Como o Ambiente Afeta na Escolha do Tijolo",
        slug: "como-o-ambiente-afeta-na-escolha-do-tijolo",
        excerpt:
            "Descubra como clima, umidade e uso da edificacao influenciam na escolha do bloco ideal para mais durabilidade.",
        category: "Dicas",
        date: "2026-02-22",
        readTime: "5 min",
        image: ambientVsTijolo,
        component: ComoOAmbienteAfetaNaEscolhaDoTijolo,
    },
]

export interface BlogPost {
    id: number
    title: string
    slug: string
    excerpt: string
    content: string
    category: string
    date: string
    readTime: string
    image: string
}

export const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "Tendências de Cerâmicas para 2024: O Que Está em Alta",
        slug: "tendencias-ceramicas-2024",
        excerpt:
            "Descubra as principais tendências em cerâmicas para este ano, desde texturas naturais até acabamentos modernos que transformam qualquer ambiente.",
        content:
            "post sobre tendências de cerâmicas para 2024...",
        category: "Tendências",
        date: "2024-03-15",
        readTime: "5 min",
        image: "/modern-ceramic-tiles-trend.jpg",
    },
    {
        id: 2,
        title: "Como Escolher o Revestimento Ideal para Sua Cozinha",
        slug: "revestimento-ideal-cozinha",
        excerpt:
            "Guia completo para escolher o revestimento perfeito para sua cozinha, considerando durabilidade, estilo e facilidade de limpeza.",
        content:
            "Conteúdo completo do guia de revestimento ideal para cozinha...",
        category: "Dicas",
        date: "2024-03-10",
        readTime: "7 min",
        image: "/kitchen-ceramic-tiles.jpg",
    },
]

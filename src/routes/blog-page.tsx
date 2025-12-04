import Layout from "@/components/layouts/layout"
import { Link, useSearchParams } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Helmet } from "react-helmet-async"
import { blogPosts } from "@/data/blog-posts"
import type { BlogPost } from "@/data/blog-posts"

export const blogMetadata = {
    title: "Blog da Unicerâmicas | Dicas, Tendências e Novidades em Cerâmicas",
    description:
        "Descubra as últimas tendências em cerâmicas, dicas de decoração e inspiração para transformar seus ambientes. Blog oficial da Unicerâmicas.",
    keywords: ["cerâmicas", "decoração", "revestimentos", "pisos", "azulejos", "tendências", "design de interiores"],
    openGraph: {
        title: "Blog da Unicerâmicas",
        description: "Dicas, tendências e novidades sobre cerâmicas e decoração",
        type: "website",
    },
}

const categories = ["Todas", "Tendências", "Dicas", "Decoração", "Sustentabilidade", "Manutenção"]

export default function BlogPage() {
    const [searchParams] = useSearchParams()

    const selectedCategory = searchParams.get("category") || "Todas"

    const filteredPosts =
        selectedCategory === "Todas"
            ? blogPosts
            : blogPosts.filter((post: BlogPost) => post.category === selectedCategory)

    return (
        <Layout>
            <Helmet>
                <title>{blogMetadata.title}</title>
                <meta name="description" content={blogMetadata.description} />
                <meta name="keywords" content={blogMetadata.keywords.join(", ")} />
                <meta property="og:title" content={blogMetadata.openGraph.title} />
                <meta property="og:description" content={blogMetadata.openGraph.description} />
                <meta property="og:type" content={blogMetadata.openGraph.type} />
            </Helmet>

            <div className="container mx-auto px-4 py-12 mt-32">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Blog da Unicerâmicas</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Bem-vindo ao blog da Unicerâmicas! Aqui você encontrará as últimas novidades, dicas e tendências
                        sobre cerâmicas, decoração e muito mais.
                    </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center mb-12">
                    {categories.map((category) => (
                        <Link
                            key={category}
                            to={category === "Todas" ? "/blog" : `/blog?category=${encodeURIComponent(category)}`}
                        >
                            <Button
                                variant={selectedCategory === category ? "default" : "outline"}
                                size="sm"
                            >
                                {category}
                            </Button>
                        </Link>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {filteredPosts.map((post: BlogPost) => (
                        <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
                            <img
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <CardHeader>
                                <div className="flex items-center gap-2 mb-2">
                                    <Badge variant="secondary">{post.category}</Badge>
                                    <span className="text-sm text-muted-foreground">
                                        {new Date(post.date).toLocaleDateString("pt-BR", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </span>
                                </div>
                                <CardTitle className="text-xl text-balance">{post.title}</CardTitle>
                                <CardDescription className="text-pretty">{post.excerpt}</CardDescription>
                            </CardHeader>
                            <CardFooter className="mt-auto">
                                <div className="flex items-center justify-between w-full">
                                    <span className="text-sm text-muted-foreground">{post.readTime} de leitura</span>
                                    <Link to={`/blog/${post.slug}`}>
                                        <Button variant="ghost" size="sm">
                                            Ler mais →
                                        </Button>
                                    </Link>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground text-lg">Nenhum post encontrado nesta categoria.</p>
                    </div>
                )}
            </div>
        </Layout>
    )
}

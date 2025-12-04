// src/routes/blog-post-page.tsx
import React from "react"
import { useParams, Link } from "react-router-dom"
import Layout from "@/components/layouts/layout"
import { Helmet } from "react-helmet-async"
import { blogPosts } from "@/data/blog-posts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>()

    const post = blogPosts.find((item) => item.slug === slug)

    if (!post) {
        return (
            <Layout>
                <div className="container mx-auto px-4 py-12">
                    <p className="text-lg mb-4">Post não encontrado.</p>
                    <Link to="/blog">
                        <Button variant="outline">Voltar para o blog</Button>
                    </Link>
                </div>
            </Layout>
        )
    }

    const pageTitle = `${post.title} | Blog da Unicerâmicas`
    const pageDescription = post.excerpt

    return (
        <Layout>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="article" />
            </Helmet>

            <div className="container mx-auto px-4 py-12 max-w-3xl">
                <div className="mb-6">
                    <Button asChild variant="ghost" size="sm">
                        <Link to="/blog">← Voltar para o blog</Link>
                    </Button>
                </div>

                <div className="mb-4 flex items-center gap-3 flex-wrap">
                    <Badge>{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString("pt-BR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                    <span className="text-sm text-muted-foreground">• {post.readTime} de leitura</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance">{post.title}</h1>

                {post.image && (
                    <div className="mb-8">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full rounded-lg object-cover max-h-[420px]"
                        />
                    </div>
                )}

                <div className="prose prose-neutral max-w-none dark:prose-invert">
                    {/* Aqui pode ser markdown, se quiser, por enquanto é apenas uma string */}
                    <p>{post.content}</p>
                </div>
            </div>
        </Layout>
    )
}

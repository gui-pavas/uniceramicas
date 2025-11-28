import BenefitsSection from "@/components/benefits-section";
import HeroSection from "@/components/hero-section";
import ProductsSection from "@/components/products-section";
import AboutSection from "@/components/about-section";
import Layout from "@/components/layouts/layout";

export default function HomePage() {
    return (
        <Layout>
            <HeroSection />
            <BenefitsSection />
            <AboutSection />
            <ProductsSection />
        </Layout>
    )
}

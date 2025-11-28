import { Building2, Users, Award, Target } from "lucide-react"

export default function AboutSection() {
    return (
        <div className="w-full bg-background py-20 px-4" id="about">
            <div className="max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    {/* Left Column - Text */}
                    <div className="animate-in fade-in slide-in-from-left-4 duration-700">
                        <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                            Sobre a <span className="text-[#ff6b35]">Unicerâmicas</span>
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                        </p>
                    </div>

                    {/* Right Column - Image Placeholder */}
                    <div className="animate-in fade-in slide-in-from-right-4 duration-700">
                        <div className="aspect-4/3 rounded-2xl bg-muted overflow-hidden">
                            <img
                                src="/modern-ceramic-factory-building.jpg"
                                alt="Unicerâmicas facility"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Stats/Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div
                        className="text-center p-6 rounded-xl bg-muted/50 animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: "0ms" }}
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                            <Building2 className="w-8 h-8 text-[#ff6b35]" strokeWidth={2} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">25+</h3>
                        <p className="text-sm text-muted-foreground">Anos de experiência</p>
                    </div>

                    <div
                        className="text-center p-6 rounded-xl bg-muted/50 animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: "100ms" }}
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                            <Users className="w-8 h-8 text-[#ff6b35]" strokeWidth={2} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">500+</h3>
                        <p className="text-sm text-muted-foreground">Clientes satisfeitos</p>
                    </div>

                    <div
                        className="text-center p-6 rounded-xl bg-muted/50 animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: "200ms" }}
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                            <Award className="w-8 h-8 text-[#ff6b35]" strokeWidth={2} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">ISO 9001</h3>
                        <p className="text-sm text-muted-foreground">Certificação de qualidade</p>
                    </div>

                    <div
                        className="text-center p-6 rounded-xl bg-muted/50 animate-in fade-in slide-in-from-bottom-4"
                        style={{ animationDelay: "300ms" }}
                    >
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
                            <Target className="w-8 h-8 text-[#ff6b35]" strokeWidth={2} />
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-2">100%</h3>
                        <p className="text-sm text-muted-foreground">Compromisso com qualidade</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

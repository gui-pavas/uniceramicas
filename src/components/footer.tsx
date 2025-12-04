import { MapPin, Phone, Facebook, Instagram } from "lucide-react"
import { Separator } from "./ui/separator"
import { motion } from "framer-motion"

export default function Footer() {
    const year = new Date().getFullYear()

    return (
        <motion.footer
            className="w-full bg-linear-to-b from-slate-50 via-white to-slate-50 text-slate-800 border-t border-slate-200"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            id="contact"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
                    {/* Contact Information */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.45 }}
                    >
                        <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 border border-orange-100">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#FF8C42]" />
                            Atendimento Unicerâmicas
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                            Fale conosco
                        </h3>

                        <p className="text-sm sm:text-base text-slate-600 max-w-lg">
                            Tire suas dúvidas sobre produtos, prazos de entrega ou faça um
                            orçamento direto com nossa equipe.
                        </p>

                        <div className="space-y-5 text-sm sm:text-base">
                            {/* Address */}
                            <div className="flex items-start gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
                                    <MapPin className="h-4 w-4 text-slate-700" />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Endereço</p>
                                    <p className="text-slate-700">R. Guatemala, 108</p>
                                    <p className="text-slate-500">
                                        Parque das Nações – São Paulo / SP
                                    </p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm">
                                    <Phone className="h-4 w-4 text-slate-700" />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Telefone / WhatsApp</p>
                                    <a
                                        href="tel:11940238363"
                                        className="text-[#FF8C42] hover:text-[#ff7a2e] font-semibold transition-colors"
                                    >
                                        (11) 94023-8363
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Socials */}
                        <div className="pt-4">
                            <p className="font-medium mb-3 text-slate-900">Redes sociais</p>
                            <div className="flex flex-wrap gap-3">
                                <motion.a
                                    whileHover={{ y: -2, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="https://www.facebook.com/uniceramicas10"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#FF8C42] px-4 py-2 text-sm font-medium text-white shadow-md shadow-orange-200 hover:bg-[#ff7a2e] transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="h-4 w-4" />
                                    <span>Facebook</span>
                                </motion.a>

                                <motion.a
                                    whileHover={{ y: -2, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    href="https://www.instagram.com/uniceramicas/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-800 border border-slate-200 shadow-sm hover:bg-slate-50 transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="h-4 w-4" />
                                    <span>Instagram</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Separator only on mobile/tablet */}
                    <Separator className="my-4 lg:hidden opacity-70" />

                    {/* Map */}
                    <motion.div
                        className="h-[260px] sm:h-[320px] lg:h-full min-h-[240px] overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md"
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5 }}
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5573089437636!2d-46.54842492370447!3d-23.548982478777815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f3e7c8e0001%3A0x1000000000000000!2sR.%20Guatemala%2C%20108%20-%20Parque%20das%20Na%C3%A7%C3%B5es%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-slate-200 bg-white/80 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-500">
                    <p className="text-center sm:text-left">
                        &copy; {year} Unicerâmicas. Todos os direitos reservados.
                    </p>
                    <p className="text-center sm:text-right">
                        <a href="https://www.linkedin.com/in/guilherme-pavani-06271729b/">Gostou desse site? conheça o desenvolvedor</a>.
                    </p>
                </div>
            </div>
        </motion.footer>
    )
}

import type { Product } from "@/interfaces/products";

import { linha09 } from "./estrutural/linha09";
import { linha11 } from "./estrutural/linha11";
import { linha14 } from "./estrutural/linha14";
import { linha19 } from "./estrutural/linha19";
import { linhaBaiano09 } from "./baiano/linha09";
import { linhaBaiano11 } from "./baiano/linha11";
import { linhaBaiano14 } from "./baiano/linha14";
import { linhaBaiano19 } from "./baiano/linha19";
import {linha29} from "@/data/estrutural/linha29.ts";

const buildProductAlt = ({ category, function: productFunction, name }: Omit<Product, "alt" | "image" | "id" | "measurements" | "resistance" | "weight" | "line" | "subcategory"> & Pick<Product, "name">) => {
    const family = category === "estrutural" ? "bloco estrutural cerâmico" : "bloco cerâmico baiano"

    return `Foto do ${family} modelo ${name} para ${productFunction.toLowerCase()}`
}

export const products: Product[] = [
    ...linha09,
    ...linha11,
    ...linha14,
    ...linha19,
    ...linha29,
    ...linhaBaiano09,
    ...linhaBaiano11,
    ...linhaBaiano14,
    ...linhaBaiano19,
].map((product) => ({
    ...product,
    alt: buildProductAlt(product),
}))

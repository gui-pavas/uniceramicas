import type { Product } from "@/interfaces/products";

import { linha09 } from "./estrutural/linha09";
import { linha11 } from "./estrutural/linha11";
import { linha14 } from "./estrutural/linha14";
import { linha19 } from "./estrutural/linha19";
import { linhaBaiano09 } from "./baiano/linha09";
import { linhaBaiano11 } from "./baiano/linha11";
import { linhaBaiano14 } from "./baiano/linha14";
import { linhaBaiano19 } from "./baiano/linha19";


export const products: Product[] = [
    ...linha09,
    ...linha11,
    ...linha14,
    ...linha19,
    ...linhaBaiano09,
    ...linhaBaiano11,
    ...linhaBaiano14,
    ...linhaBaiano19,
]

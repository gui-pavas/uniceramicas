export type Product = {
  id: string
  name: string
  image: string
  measurements: string
  resistance: string
  weight: string
  line: string
  category: string
}

export type Subcategory = {
  id: string
  name: string
}

export type Category = {
  id: string
  name: string
  subcategories: Subcategory[]
}
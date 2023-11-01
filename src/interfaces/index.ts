export interface ProductType {
  id: number
  title: string
  price: number
  image: string
  description: string
  quantity: number
  category: string
  rating: {rate: number, count: number}
}
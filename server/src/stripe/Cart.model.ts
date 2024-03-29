interface CartItem {
  name: string
  price: number
  quantity: number
  description?: string
  id: string
}

export type Cart = CartItem[]

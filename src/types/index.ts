export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  imageUrl?: string
  available: boolean
  ingredients?: string[]
  allergens?: string[]
  preparationTime: number // in minutes
}

export interface CartItem {
  menuItem: MenuItem
  quantity: number
  specialInstructions?: string
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  status: OrderStatus
  totalAmount: number
  deliveryAddress: Address
  orderDate: Date
  estimatedDeliveryTime: Date
  paymentIntentId?: string
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface User {
  id: string
  email: string
  name: string
  phone?: string
  addresses: Address[]
  orderHistory: Order[]
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'ready'
  | 'delivered'
  | 'cancelled'

export type MenuCategory = 
  | 'appetizers'
  | 'mains'
  | 'desserts'
  | 'beverages'
  | 'specials'
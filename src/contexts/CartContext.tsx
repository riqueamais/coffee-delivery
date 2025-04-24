// src/contexts/CartContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'

interface CartItem {
  productId: string
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (productId: string, quantity: number) => void
  totalItems: number
}

const CartContext = createContext({} as CartContextType)

const CART_STORAGE_KEY = '@coffee-delivery:cart-1.0.0'

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const storedCart = localStorage.getItem(CART_STORAGE_KEY)
    if (storedCart) {
      setCart(JSON.parse(storedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  function addToCart(productId: string, quantity: number) {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.productId === productId)

      if (existing) {
        return prevCart.map((item) =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [...prevCart, { productId, quantity }]
      }
    })
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <CartContext.Provider value={{ cart, addToCart, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)

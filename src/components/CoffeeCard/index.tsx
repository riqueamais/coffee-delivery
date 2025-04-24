import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  CoffeeCardBoxCategories,
  CoffeeCardBoxPrice,
  CoffeeCardCategories,
  CoffeeCardContainer,
  CoffeeCardCounter,
  CoffeeCardPrice,
  CoffeeCardSubmit,
} from './styles'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useCart } from '../../contexts/CartContext'

export interface CoffeeProduct {
  id: string
  name: string
  description?: string
  price: number
  imageUrl?: string
  category: Category
  subcategories?: Subcategory[]
}

interface Category {
  id: string
  name: string
}

interface Subcategory {
  id: string
  name: string
}

const quantitySchema = z.object({
  quantity: z
    .number()
    .min(1, { message: 'Quantidade mínima é 1' })
    .max(3, { message: 'Quantidade máxima é 3' }),
})

type QuantityFormData = z.infer<typeof quantitySchema>

export function CoffeeCard(props: CoffeeProduct) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<QuantityFormData>({
    resolver: zodResolver(quantitySchema),
    defaultValues: {
      quantity: 1,
    },
  })

  const [quantity, setQuantityState] = useState(1)
  const { addToCart } = useCart()

  useEffect(() => {
    setValue('quantity', quantity)
  }, [quantity, setValue])

  const increment = () => {
    if (quantity < 3) setQuantityState((prev) => prev + 1)
  }

  const decrement = () => {
    if (quantity > 1) setQuantityState((prev) => prev - 1)
  }

  const onSubmit = (data: QuantityFormData) => {
    addToCart(props.id, data.quantity)
  }

  return (
    <CoffeeCardContainer>
      <img className="product-image" src={props.imageUrl} alt="product image" />

      <CoffeeCardBoxCategories>
        {props.subcategories ? (
          <>
            <CoffeeCardCategories>{props.category.name}</CoffeeCardCategories>
            <CoffeeCardBoxCategories>
              {props.subcategories.map((sub) => (
                <CoffeeCardCategories key={sub.id}>
                  {sub.name}
                </CoffeeCardCategories>
              ))}
            </CoffeeCardBoxCategories>
          </>
        ) : (
          <CoffeeCardCategories>{props.category.name}</CoffeeCardCategories>
        )}
      </CoffeeCardBoxCategories>

      <h3>{props.name}</h3>

      <p>{props.description}</p>

      <CoffeeCardBoxPrice>
        <CoffeeCardPrice>
          R$
          <b>{props.price.toFixed(2)}</b>
        </CoffeeCardPrice>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CoffeeCardCounter>
            <button type="button" onClick={decrement}>
              <Minus />
            </button>

            <span>{quantity}</span>

            <button type="button" onClick={increment}>
              <Plus />
            </button>
          </CoffeeCardCounter>

          <input
            type="hidden"
            {...register('quantity', { valueAsNumber: true })}
          />

          <CoffeeCardSubmit type="submit">
            <ShoppingCart size={20} weight="fill" />
          </CoffeeCardSubmit>
        </form>

        {errors.quantity && <p className="errors">{errors.quantity.message}</p>}
      </CoffeeCardBoxPrice>
    </CoffeeCardContainer>
  )
}

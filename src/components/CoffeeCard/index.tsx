import {
  CoffeeCardBoxCategories,
  CoffeeCardCategories,
  CoffeeCardContainer,
  CoffeeCardPrice,
} from './styles'

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

export function CoffeeCard(props: CoffeeProduct) {
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

      <CoffeeCardPrice>
        R$
        <b>{props.price.toFixed(2)}</b>
      </CoffeeCardPrice>
    </CoffeeCardContainer>
  )
}

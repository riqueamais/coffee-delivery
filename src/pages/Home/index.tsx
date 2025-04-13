import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { Container } from '../../layouts/DefaultLayout/styles'
import {
  BannerPrincipal,
  BannerPrincipalBoxImage,
  BannerPrincipalContent,
  BannerPrincipalBoxItens,
  BannerPrincipalTitle,
  BannerPrincipalItem,
  BannerPrincipalItemCircle,
  Products,
} from './styles'
import { CoffeeCard, CoffeeProduct } from '../../components/CoffeeCard'

const coffees: CoffeeProduct[] = [
  {
    id: 'coffee-001',
    imageUrl: '/expresso-tradicional.png',
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    category: {
      id: 'cat-1',
      name: 'Tradicional',
    },
  },
  {
    id: 'coffee-002',
    imageUrl: '/latte.png',
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
    category: {
      id: 'cat-1',
      name: 'Tradicional',
    },
    subcategories: [{ id: 'sub-1', name: 'com leite' }],
  },
  {
    id: 'coffee-003',
    imageUrl: '/cubano.png',
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
    category: {
      id: 'cat-1',
      name: 'Especial',
    },
    subcategories: [
      { id: 'sub-1', name: 'alcoólico' },
      { id: 'sub-2', name: 'gelado' },
    ],
  },
]

export function Home() {
  return (
    <>
      <BannerPrincipal>
        <Container>
          <div className="grid">
            <BannerPrincipalContent>
              <BannerPrincipalTitle>
                <h2>Encontre o café perfeito para qualquer hora do dia</h2>

                <p>
                  Com o Coffee Delivery você recebe seu café onde estiver, a
                  qualquer hora
                </p>
              </BannerPrincipalTitle>

              <BannerPrincipalBoxItens>
                <BannerPrincipalItem>
                  <BannerPrincipalItemCircle variant="mostarda">
                    <ShoppingCart size={16} weight="fill" color="white" />
                  </BannerPrincipalItemCircle>

                  <p>Compra simples e segura</p>
                </BannerPrincipalItem>

                <BannerPrincipalItem>
                  <BannerPrincipalItemCircle variant="brown">
                    <Package size={16} weight="fill" color="white" />
                  </BannerPrincipalItemCircle>

                  <p>Embalagem mantém o café intacto</p>
                </BannerPrincipalItem>

                <BannerPrincipalItem>
                  <BannerPrincipalItemCircle variant="yellow">
                    <Timer size={16} weight="fill" color="white" />
                  </BannerPrincipalItemCircle>

                  <p>Entrega rápida e rastreada</p>
                </BannerPrincipalItem>

                <BannerPrincipalItem>
                  <BannerPrincipalItemCircle variant="purple">
                    <Coffee size={16} weight="fill" color="white" />
                  </BannerPrincipalItemCircle>

                  <p>O café chega fresquinho até você</p>
                </BannerPrincipalItem>
              </BannerPrincipalBoxItens>
            </BannerPrincipalContent>

            <BannerPrincipalBoxImage>
              <img src="/thumb-banner-principal.png" alt="thumb" />
            </BannerPrincipalBoxImage>
          </div>
        </Container>
      </BannerPrincipal>

      <Products>
        <Container>
          <h2>Nossos cafés</h2>

          <div className="grid">
            {coffees.map((coffee) => {
              return (
                <CoffeeCard
                  key={coffee.id}
                  id={coffee.id}
                  imageUrl={coffee.imageUrl}
                  category={coffee.category}
                  subcategories={coffee.subcategories}
                  name={coffee.name}
                  price={coffee.price}
                  description={coffee.description}
                />
              )
            })}
          </div>
        </Container>
      </Products>
    </>
  )
}

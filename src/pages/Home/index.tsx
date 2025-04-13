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
} from './styles'

export function Home() {
  return (
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
  )
}

import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/logo.svg'
import {
  HeaderLocation,
  HeaderCartButton,
  HeaderContainer,
  HeaderItens,
} from './styles'
import { Container } from '../../layouts/DefaultLayout/styles'

export function Header() {
  return (
    <Container>
      <HeaderContainer>
        <a title="Logo" href="/">
          <img src={Logo} alt="Logo" />
        </a>

        <HeaderItens>
          <HeaderLocation>
            <MapPin size={22} weight="fill" color="#8047F8" />

            <span>Porto Alegre, RS</span>
          </HeaderLocation>

          <HeaderCartButton>
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
          </HeaderCartButton>
        </HeaderItens>
      </HeaderContainer>
    </Container>
  )
}

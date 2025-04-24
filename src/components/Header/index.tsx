import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import Logo from '../../assets/logo.svg'
import {
  HeaderLocation,
  HeaderContainer,
  HeaderItens,
  HeaderCartBadge,
} from './styles'
import { Container } from '../../layouts/DefaultLayout/styles'
import { useCart } from '../../contexts/CartContext'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function Header() {
  const { totalItems } = useCart()
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    if (totalItems === 0) return

    setAnimate(true)
    const timeout = setTimeout(() => setAnimate(false), 400)
    return () => clearTimeout(timeout)
  }, [totalItems])

  return (
    <Container>
      <HeaderContainer>
        <Link title="Logo" to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <HeaderItens>
          <HeaderLocation>
            <MapPin size={22} weight="fill" color="#8047F8" />

            <span>Porto Alegre, RS</span>
          </HeaderLocation>

          <Link to="/checkout" className="cart-button">
            {totalItems > 0 && (
              <HeaderCartBadge $animate={animate}>
                <span>{totalItems}</span>
              </HeaderCartBadge>
            )}
            <ShoppingCart size={22} weight="fill" />
          </Link>
        </HeaderItens>
      </HeaderContainer>
    </Container>
  )
}

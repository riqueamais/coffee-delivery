import styled from 'styled-components'

export const BannerPrincipal = styled.section`
  display: flex;
  align-items: center;
  background-image: url(/banner-principal.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 544px;

  .grid {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }

  @media (max-width: 991px) {
    .grid {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 94px;
    }
  }
`

export const BannerPrincipalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;

  max-width: 588px;
`

export const BannerPrincipalTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h2 {
    font-size: 3rem;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme.black};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['brown-700']};
  }
`

export const BannerPrincipalBoxItens = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;

  @media (max-width: 567px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`

export const BannerPrincipalItem = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  gap: 0.75rem;

  p {
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['brown-500']};
  }

  @media (max-width: 567px) {
    width: 100%;
    max-width: 300px;
  }
`

const CIRCLE_COLORS = {
  mostarda: 'yellow-700',
  brown: 'brown-500',
  yellow: 'yellow-500',
  purple: 'purple-500',
} as const

interface BannerPrincipalItemCircleProps {
  variant: keyof typeof CIRCLE_COLORS
}

export const BannerPrincipalItemCircle = styled.div<BannerPrincipalItemCircleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.theme[CIRCLE_COLORS[props.variant]]};
`

export const BannerPrincipalBoxImage = styled.div`
  width: 100%;
  max-width: 476px;

  display: flex;
  align-items: center;

  img {
    width: 100%;
  }

  @media (max-width: 991px) {
    margin-top: 30px;
  }
`

export const Products = styled.section`
  margin-top: 32px;
  margin-bottom: 100px;

  h2 {
    font-size: 2rem;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['brown-700']};
    margin-bottom: 54px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 991px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 567px) {
    .grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`
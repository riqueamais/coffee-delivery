import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  background-color: ${(props) => props.theme['background-card']};

  padding: 1.5rem;

  border-radius: 6px 28px 6px 28px;
  height: 100%;

  .product-image {
    margin-top: -45px;
    margin-bottom: 12px;
  }

  h3 {
    font-size: 1.25rem;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['brown-700']};
    margin-top: 16px;
    margin-bottom: 8px;
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;
    color: ${(props) => props.theme['brown-300']};
    max-width: 220px;
    margin-bottom: 33px;
  }
`

export const CoffeeCardBoxCategories = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

export const CoffeeCardCategories = styled.div`
  background-color: ${(props) => props.theme['yellow-100']};
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  font-size: 0.625rem;
  line-height: 130%;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => props.theme['yellow-700']};
`

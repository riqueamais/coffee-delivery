import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

export const CoffeeCardBoxPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  form {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .errors {
    color: red;
    font-size: 0.75rem;
    margin-bottom: 0;
  }
`

export const CoffeeCardPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme['brown-500']};

  b {
    font-size: 1.5rem;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['brown-700']};
  }
`

export const CoffeeCardCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  background-color: ${(props) => props.theme['gray-300']};
  padding: 8px;
  border-radius: 6px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme['purple-500']};
    font-weight: 700;
    cursor: pointer;
  }
`

export const CoffeeCardSubmit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 8px;
  border-radius: 6px;
  border: 0;
  cursor: pointer;

  background-color: ${(props) => props.theme['purple-700']};
  color: ${(props) => props.theme['white']};
`

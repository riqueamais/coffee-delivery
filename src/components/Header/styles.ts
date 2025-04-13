import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;
`

export const HeaderItens = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const HeaderLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  padding: 0.625rem 0.5rem;
  border-radius: 6px;

  background-color: ${(props) => props.theme['purple-100']};

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${props => props.theme['purple-700']};
  }
`

export const HeaderCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;

  background-color: ${(props) => props.theme['yellow-100']};
`

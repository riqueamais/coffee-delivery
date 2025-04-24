import styled, { css, keyframes } from 'styled-components'

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

  .cart-button {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border: 0;
    border-radius: 6px;
    cursor: pointer;

    background-color: ${(props) => props.theme['yellow-100']};
    position: relative;

    svg {
      color: ${(props) => props.theme['yellow-700']};
    }
  }
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
    color: ${(props) => props.theme['purple-700']};
  }
`

const pulse = keyframes`
  0% {
    transform: scale(0.7);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

export const HeaderCartBadge = styled.div<{ $animate: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: ${(props) => props.theme['yellow-700']};

  ${({ $animate }) =>
    $animate &&
    css`
      animation: ${pulse} 0.4s ease;
    `}

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 0.75rem;
    color: ${(props) => props.theme['white']};
    font-weight: 700;
  }
`

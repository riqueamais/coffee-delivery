import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 90rem;

  padding: 0 1rem;
  margin: 0 auto;

  @media (min-width: 1280px) and (max-width: 1440px) {
    max-width: 80rem;
  }

  @media (min-width: 1200px) and (max-width: 1279px) {
    max-width: 70rem;
  }

  @media (min-width: 992px) and (max-width: 1199px) {
    max-width: 64rem;
  }
`
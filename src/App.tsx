import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { Router } from './Router'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { CartProvider } from './contexts/CartContext.tsx'

export function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <CartProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartProvider>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

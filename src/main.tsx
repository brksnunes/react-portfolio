import React from 'react'
import { ChakraProvider, theme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={ theme }>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)

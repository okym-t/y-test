import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import Content from './components/Content'
import Header from './components/Header'

function App() {
  return (
    <>
      <Global
        styles={css`
          ${emotionReset}
          *, *::after, *::before {
            box-sizing: border-box;
            -moz-osx-font-smoothing: grayscale;
            -webkit-font-smoothing: antialiased;
            font-smoothing: antialiased;
          }
        `}
      />
      <Header />
      <Content />
    </>
  )
}

export default App

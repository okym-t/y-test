import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import Header from './components/Header'

const content = css({
  top: 100,
  backgroundColor: '#fff7f7',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#204969',
  textAlign: 'center',
})

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
      <div css={content}>
        <p>TODO</p>
      </div>
    </>
  )
}

export default App

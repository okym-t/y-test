import { Global, css } from '@emotion/react'
import emotionReset from 'emotion-reset'
import { useEffect, useState } from 'react'

const styles = {
  foo: css({
    width: '100%',
    padding: '20px',
    backgroundColor: 'red',
  }),
  bar: css({
    color: 'blue',
    textAlign: 'center',
  }),
}

const URL = import.meta.env.VITE_API_URL ?? ''

function App() {
  const [prefectures, setPrefectures] = useState<any | undefined>()
  useEffect(() => {
    fetch(`${URL}/api/v1/prefectures`)
      .then((response) => response.json())
      .then((json) => setPrefectures(json))
  }, [])

  if (!prefectures) return <p>loading...</p>
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
      <div css={styles.foo}>
        <p css={styles.bar}>{JSON.stringify(prefectures)}</p>
      </div>
    </>
  )
}

export default App

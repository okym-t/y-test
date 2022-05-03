import { css } from '@emotion/react'
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
    <div css={styles.foo}>
      <p css={styles.bar}>{JSON.stringify(prefectures)}</p>
    </div>
  )
}

export default App

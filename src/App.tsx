import { css } from '@emotion/react'

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

function App() {
  const key = import.meta.env.VITE_API_KEY

  return (
    <div css={styles.foo}>
      <p css={styles.bar}>test</p>
      <p>{key}</p>
    </div>
  )
}

export default App

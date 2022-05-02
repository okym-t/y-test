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
  return (
    <div css={styles.foo}>
      <p css={styles.bar}>test</p>
    </div>
  )
}

export default App

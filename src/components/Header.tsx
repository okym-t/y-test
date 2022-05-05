import { css } from '@emotion/react'

const header = css({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  padding: '20px 40px',
  backgroundColor: '#dadada',
  color: '#204969',
  fontWeight: 'bold',
})

function Header() {
  return <header css={header}>Yumemi Challenge</header>
}

export default Header

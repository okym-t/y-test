import { css } from '@emotion/react'
import PrefectureCheckboxGroup from './PrefectureCheckboxGroup'

const content = css({
  backgroundColor: '#fff7f7',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#204969',
  textAlign: 'center',
  marginTop: '56px',
})

function Content() {
  return (
    <div css={content}>
      <PrefectureCheckboxGroup />
    </div>
  )
}

export default Content

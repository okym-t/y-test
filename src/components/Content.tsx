import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import CheckboxGroup from './CheckboxGroup'

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

type ApiResponse<T, U> = {
  data?: T
  error?: U
  status: number
}

type Prefectures = {
  message: ''
  result: Prefecture[]
}
type Prefecture = { prefCode: number; prefName: string }

const URL = import.meta.env.VITE_API_URL ?? ''

function Content() {
  const [prefectures, setPrefectures] = useState<ApiResponse<
    Prefectures,
    any
  > | null>(null)

  useEffect(() => {
    fetch(`${URL}/api/v1/prefectures`)
      .then((response) => response.json())
      .then((response) =>
        setPrefectures({ data: response, status: response.status })
      )
      .catch((response) =>
        setPrefectures({ error: response, status: response.status })
      )
  }, [])

  const handleClickCheckbox = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    // eslint-disable-next-line no-console
    console.log(prefName, prefCode, check)
  }

  return (
    <div css={content}>
      {prefectures?.data && (
        <CheckboxGroup
          prefectures={prefectures.data.result}
          onChange={handleClickCheckbox}
        />
      )}
      {prefectures?.error && <div>Error!</div>}
    </div>
  )
}

export default Content

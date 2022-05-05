import { css } from '@emotion/react'
import { useEffect, useState } from 'react'

const styles = {
  checkboxGroup: css({
    display: 'inline-grid',
    gridTemplateColumns: 'repeat(10, 1fr)',
    '@media (max-width: 600px)': {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    '@media (max-width: 300px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
  }),
}

const URL = import.meta.env.VITE_API_URL ?? ''

type Prefecture = {
  message: ''
  result: { prefCode: number; prefName: string }[]
}

function PrefectureCheckboxGroup() {
  const [prefectures, setPrefectures] = useState<Prefecture | undefined>()
  useEffect(() => {
    fetch(`${URL}/api/v1/prefectures`)
      .then((response) => response.json())
      .then((json) => setPrefectures(json))
  }, [])

  if (!prefectures) return <p>loading...</p>
  return (
    <div css={styles.checkboxGroup}>
      {prefectures.result.map(({ prefCode, prefName }) => (
        <label htmlFor={prefName} key={prefCode}>
          <input id={prefName} type="checkbox" value={prefName} />
          <span>{prefName}</span>
        </label>
      ))}
    </div>
  )
}

export default PrefectureCheckboxGroup

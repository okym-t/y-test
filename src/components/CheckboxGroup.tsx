import { css } from '@emotion/react'

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

type Props = {
  prefectures: {
    prefCode: number
    prefName: string
  }[]
  onChange: (prefName: string, prefCode: number, check: boolean) => void
}

function CheckboxGroup({ prefectures, onChange }: Props) {
  return (
    <div css={styles.checkboxGroup}>
      {prefectures.map(({ prefCode, prefName }) => (
        <label htmlFor={prefName} key={prefCode}>
          <input
            id={prefName}
            type="checkbox"
            value={prefName}
            onChange={(event) =>
              onChange(prefName, prefCode, event.target.checked)
            }
          />
          <span>{prefName}</span>
        </label>
      ))}
    </div>
  )
}

export default CheckboxGroup

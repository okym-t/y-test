import { css } from '@emotion/react'
import { useEffect, useState } from 'react'
import CheckboxGroup from './CheckboxGroup'
import Graph from './Graph'

const content = css({
  backgroundColor: '#eae3e3',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '#2d095c',
  textAlign: 'center',
  marginTop: '56px',
})

type Prefecture = { prefCode: number; prefName: string }
type CheckedPopulation = { prefName: string; data: PopulationData[] }
type PopulationData = { year: number; value: number }

const URL = import.meta.env.VITE_API_URL ?? ''

function Content() {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])

  const [checkedPopulations, setCheckedPopulations] = useState<
    CheckedPopulation[]
  >([])

  useEffect(() => {
    fetch(`${URL}/api/v1/prefectures`)
      .then((response) => response.json())
      .then((response) => response.result as Prefecture[])
      .then((response) => setPrefectures(response))
      .catch(() => {})
  }, [])

  const handleClickCheckbox = (
    prefName: string,
    prefCode: number,
    check: boolean
  ) => {
    if (check) {
      fetch(`${URL}/api/v1/population/composition/perYear?prefCode=${prefCode}`)
        .then((response) => response.json())
        .then(
          (response) =>
            response.result.data.find((data: any) => data.label === '総人口')
              .data as PopulationData[]
        )
        .then((data) =>
          setCheckedPopulations((prev) => [...prev, { prefName, data }])
        )
        .catch(() => {})
    } else {
      setCheckedPopulations((prev) =>
        prev.filter((population) => population.prefName !== prefName)
      )
    }
  }

  return (
    <div css={content}>
      {prefectures && (
        <CheckboxGroup
          prefectures={prefectures}
          onChange={handleClickCheckbox}
        />
      )}
      <Graph populations={checkedPopulations} />
    </div>
  )
}

export default Content

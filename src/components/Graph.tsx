import Highcharts, { Options, SeriesOptionsType } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { css } from '@emotion/react'

const graph = css({
  padding: '12px',
})

type Props = {
  populations: {
    prefName: string
    data: { year: number; value: number }[]
  }[]
}

// 選んだ都道府県の人口推移グラフを表示するコンポーネント
function Graph({ populations }: Props) {
  const series: SeriesOptionsType[] = populations.map((population) => ({
    type: 'line',
    name: population.prefName,
    data: population.data.map((data) => data.value),
  }))

  const categories: string[] = [
    ...new Set(
      populations
        .map((population) => population.data.map((data) => String(data.year)))
        .flat()
    ),
  ]

  const options: Options = {
    chart: {
      width: window.innerWidth > 600 ? 800 : 350,
    },
    accessibility: {
      enabled: false,
    },
    title: {
      text: '人口',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },
    series:
      series.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : series,
  }

  return (
    <div css={graph}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Graph

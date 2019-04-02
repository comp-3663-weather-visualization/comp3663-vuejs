<template>
  <div>
    <canvas
      id="chart"
      role="chart"
      :aria-label="ariaLabel"
    ></canvas>
    <div>
      <table
        class="hidden"
        summary="This is the text alternative for the rendered chart."
      >
        <caption>{{ ariaLabel }}</caption>
        <thead>
          <tr>
            <th scope="row">
              Months
            </th>
            <th
              scope="col"
              v-for="month in chartData.labels"
              :key="month"
            >
              {{ month }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              {{ chartData.dataSets[0].label }}
            </th>
            <td
              v-for="(val, idx) in chartData.dataSets[0].data"
              :key="idx"
            >
              {{ val }}
            </td>
          </tr>
          <tr>
            <th scope="row">
              {{ chartData.dataSets[1].label }}
            </th>
            <td
              v-for="(val, idx) in chartData.dataSets[1].data"
              :key="idx"
            >
              {{ val }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  props: {
    ariaLabel: { type: String, default: '' },
    chartData: { type: Object,
      default: () => {
        return {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
          datasets: [
            {
              label: '',
              backgroundColor: '#f87979',
              borderColor: '#f87979',
              data: Array(12).fill(0),
              fill: false
            },
            {
              label: '',
              backgroundColor: '#333',
              borderColor: '#333',
              data: Array(12).fill(0),
              fill: false
            }
          ]
        }
      } }
  },
  created() {
    // console.log(JSON.stringify(this.chartData, '', 2))
    // this.renderChart('chart', this.chartData)
  },
  methods: {
    renderChart(chartId, chartData) {
      const ctx = document.getElementById(chartId)
      const chart = new Chart(ctx, {
        type: 'line',
        data: chartData,
        options: {
          responsive: true
        }
      })
    }
  }
}
</script>

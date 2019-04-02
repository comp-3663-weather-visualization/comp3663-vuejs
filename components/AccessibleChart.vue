<template>
  <div>
    <table id="chart-table" class="hidden" summary="This is the text alternative for the rendered chart.">
      <caption>{{ ariaLabel }}</caption>
      <thead>
        <tr>
          <th scope="row">{{ xAxisLabel }}</th>
          <th scope="col" v-for="(label, idx) in xLabels" :key="idx">{{ label }}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ lineOne.label }}</th>
          <td v-for="(val, idx) in lineOne.data" :key="idx">{{ val }}</td>
        </tr>
        <tr>
          <th scope="row">{{ lineTwo.label }}</th>
          <td v-for="(val, idx) in lineTwo.data" :key="idx">{{ val }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    ariaLabel: { type: String, default: '' },
    chartData: {
      type: Object,
      default: () => {
        return {
          labels: '',
          datasets: [
            {
              data: []
            },
            {
              data: []
            }
          ]
        }
      }
    }
  },
  data() {
    return {
      xAxisLabel: 'Months',
      xLabels: [],
      lineOne: {
        label: '',
        data: []
      },
      lineTwo: {
        label: '',
        data: []
      }
    }
  },
  watch: {
    chartData() {
      this.populateTable()
    }
  },
  methods: {
    populateTable() {
      this.xLabels = this.chartData.labels
      this.lineOne = this.chartData.datasets[0]
      this.lineTwo = this.chartData.datasets[1]
    }
  }
}
</script>

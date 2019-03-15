<script>
// import { Bar, Line } from 'vue-chartjs'
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: { type: Object, default: null },
    options: {
      type: Object,
      default: () => { return {responsive: true, maintainAspectRatio: false }}
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

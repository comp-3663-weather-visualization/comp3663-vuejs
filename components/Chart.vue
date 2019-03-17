<script>
// import { Bar, Line } from 'vue-chartjs'
import { Line, mixins } from 'vue-chartjs'

export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: { type: Object, default: () => {} },
    options: {
      type: Object,
      default: () => {
        return { responsive: true, maintainAspectRatio: false }
      }
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>

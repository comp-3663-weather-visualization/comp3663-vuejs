<script>
// import VueCharts from 'vue-chartjs'
// import { Bar, Line } from 'vue-chartjs'
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: [10, 20, 12, 3, 10, 4, 3, 8, 4, 2, 12, 11]
        },
        {
          label: 'Other stuff',
          backgroundColor: '#f87979',
          data: [10, 23, 32, 3, 10, 4, 3, 8, 4, 2, 32, 11]
        }
      ]
    },
    { responsive: true, maintainAspectRatio: false })
  }
}
</script>

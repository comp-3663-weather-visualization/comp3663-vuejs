<template>
  <div id="app">
    <div class="container">
      <div class="m-4 row">
        <div class="col-md-6">
          <label
            class="hidden"
            for="city"
          >City: </label>
          <select
            id="city"
            v-model="cityName"
            class="form-control mb-3"
            @change="updateWeather"
          >
            <option
              v-for="(loc, key) in locations"
              :key="key"
            >
              {{ loc }}
            </option>
          </select>
          <h1>{{ parsedWeather.title.trim() }}</h1>
          <h1>{{ parsedWeather.temp.trim() }}</h1>
        </div>
        <div class="col-md-6">
          <h2 class="right">
            {{ parsedWeather.time }}
          </h2>
          <h2 class="right">
            {{ parsedWeather.date }}
          </h2>
          <div class="form-group row">
            <label
              class="col-4 col-form-label"
              for="inputYear1"
            >Year 1: </label>
            <div class="col-8">
              <select
                id="inputYear1"
                v-model="year1"
                class="form-control"
                @change="updateWeather"
              >
                <option
                  v-for="(year, key) in years"
                  :key="key"
                >
                  {{ year }}
                </option>
              </select>
            </div>
          </div>
          <div class="form-group row">
            <label
              class="col-4 col-form-label"
              for="inputYear2"
            >Year 2: </label>
            <div class="col-8">
              <select
                id="inputYear2"
                v-model="year2"
                class="form-control"
                @change="updateWeather"
              >
                <option
                  v-for="(year, key) in years"
                  :key="key"
                >
                  {{ year }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <chart :chart-data="chartData" />
      <!-- <accessible-chart
        aria-label="Weather Chart"
        :chart-data="chartData"
      /> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import cities from '~/data/cities.json'
import Chart from '~/components/Chart.vue'
import AccessibleChart from '~/components/AccessibleChart.vue'

const WEATHER_API_URL = 'https://weather.johnconnolly.me'

export default {
  components: { Chart, AccessibleChart },
  data() {
    return {
      cities,
      cityName: 'KENTVILLE CDA CS',
      currentWeather: {
        temp: '451',
        slogan: 'World is melting'
      },
      historicalWeather1: [
        { month: 1, avrTemp: 0 },
        { month: 2, avrTemp: 0 },
        { month: 3, avrTemp: 0 },
        { month: 4, avrTemp: 0 },
        { month: 5, avrTemp: 0 },
        { month: 6, avrTemp: 0 },
        { month: 7, avrTemp: 0 },
        { month: 8, avrTemp: 0 },
        { month: 9, avrTemp: 0 },
        { month: 10, avrTemp: 0 },
        { month: 11, avrTemp: 0 },
        { month: 12, avrTemp: 0 }
      ],
      historicalWeather2: [
        { month: 1, avrTemp: 0 },
        { month: 2, avrTemp: 0 },
        { month: 3, avrTemp: 0 },
        { month: 4, avrTemp: 0 },
        { month: 5, avrTemp: 0 },
        { month: 6, avrTemp: 0 },
        { month: 7, avrTemp: 0 },
        { month: 8, avrTemp: 0 },
        { month: 9, avrTemp: 0 },
        { month: 10, avrTemp: 0 },
        { month: 11, avrTemp: 0 },
        { month: 12, avrTemp: 0 }
      ],
      loading: false,
      locations: ['ANNAPOLIS ROYAL', 'AVON', 'AYLESFORD', 'BACCARO'],
      minYear: 1960,
      monthNames: [
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
      year1: '',
      year2: ''
    }
  },
  computed: {
    chartData() {
      return {
        labels: this.monthNames,
        datasets: [
          {
            label: this.year1,
            backgroundColor: '#f87979',
            borderColor: '#f87979',
            data: this.historicalWeather1.map((t) => { return t.avrTemp }),
            fill: false
          },
          {
            label: this.year2,
            backgroundColor: '#333',
            borderColor: '#333',
            data: this.historicalWeather2.map((t) => { return t.avrTemp }),
            fill: false
          }
        ]
      }
    },
    parsedWeather() {
      return {
        time: this.timeFormat(),
        date: this.dateFormat(),
        title: this.currentWeather.slogan,
        temp: `${this.currentWeather.temp}°C`,
        location: this.cityName,
        color: 'transparent'
      }
    },
    years() {
      const date = new Date()
      const currentYear = date.getFullYear()
      const delta = currentYear - this.minYear
      return [...Array(delta).keys()].map(x => this.minYear++)
    }
  },
  created() {
    this.getCurrentWeather()
    this.getHistoricalWeather(this.year1, (data) => { this.historicalWeather1 = data })
    this.getLocations()
  },
  methods: {
    getCurrentWeather() {
      const url = `${WEATHER_API_URL}/weather?city=${this.cityName}`
      axios
        .get(encodeURI(url))
        .then(({ data }) => {
          this.currentWeather = data
        })
        .catch((response) => {
          console.log(response)
        })
    },
    getHistoricalWeather(year, cb) {
      const url = `${WEATHER_API_URL}/historicalWeather?city=${this.cityName}&year=${year}`
      if (year) {
        axios
          .get(encodeURI(url))
          .then(({ data }) => {
            cb(data)
          })
          .catch((response) => {
            console.log(response)
          })
      }
    },
    getLocations() {
      const url = `${WEATHER_API_URL}/locations`
      axios
        .get(encodeURI(url))
        .then(({ data }) => {
          this.locations = data.sort()
        })
        .catch((response) => {
          console.log(response)
        })
    },
    updateWeather() {
      this.getCurrentWeather()
      this.getHistoricalWeather(this.year1, (data) => { this.historicalWeather1 = data })
      this.getHistoricalWeather(this.year2, (data) => { this.historicalWeather2 = data })
    },
    dateFormat() {
      const date = new Date()
      const day = date.getDate()
      const monthIndex = date.getMonth()
      const year = date.getFullYear()

      return `${day} ${this.monthNames[monthIndex]} ${year}`
    },
    timeFormat() {
      const date = new Date()
      const hours = date.getHours()
      const minutes = `0${date.getMinutes()}`

      return `${hours}:${minutes.substr(-2)}`
    }
  }
}
</script>

<style scoped>
.inline {
  display: inline-block;
}

.m-1{
  margin: 1em;
}
</style>

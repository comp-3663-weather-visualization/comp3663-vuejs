<template>
  <div id="app">
    <v-container grid-list-md>
      <v-layout align-center justify-space-around row>
        <v-flex xs6 fluid>
          <Time :time="parsedWeather.time" :date="parsedWeather.date" />
        </v-flex>
        <v-flex xs6 fluid>
          <label-select
            v-model="cityName"
            :list="locations"
            @input="updateWeather"
          />
          <weather
            :time="parsedWeather.time"
            :title="parsedWeather.title"
            :temp="parsedWeather.temp"
          />
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <chart :chart-data="chartData" />
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'
import Chart from '~/components/Chart.vue'
import LabelSelect from '~/components/LabelSelect.vue'
import Time from '~/components/Time.vue'
import Weather from '~/components/Weather.vue'

const WEATHER_API_URL = 'http://167.99.178.142:8000'

export default {
  components: {
    Chart,
    LabelSelect,
    Time,
    Weather
  },
  data() {
    return {
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
        { month: 1, avrTemp: 5 },
        { month: 2, avrTemp: 5 },
        { month: 3, avrTemp: 5 },
        { month: 4, avrTemp: 5 },
        { month: 5, avrTemp: 5 },
        { month: 6, avrTemp: 5 },
        { month: 7, avrTemp: 5 },
        { month: 8, avrTemp: 5 },
        { month: 9, avrTemp: 5 },
        { month: 10, avrTemp: 5 },
        { month: 11, avrTemp: 5 },
        { month: 12, avrTemp: 5 }
      ],
      loading: false,
      locations: ['ANNAPOLIS ROYAL', 'AVON', 'AYLESFORD', 'BACCARO'],
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
      year1: 1998,
      year2: 2018
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
            data: this.historicalWeather1.map((t) => { return t.avrTemp })
          },
          {
            label: this.year2,
            backgroundColor: '#333',
            data: this.historicalWeather2.map((t) => { return t.avrTemp })
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
      axios
        .get(encodeURI(url))
        .then(({ data }) => {
          cb(data)
        })
        .catch((response) => {
          console.log(response)
        })
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
.container {
  position: relative;
}
</style>

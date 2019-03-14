<template>
  <div id="app">
    <!-- <div id="main"> -->
    <v-container grid-list-md>
      <v-layout align-center justify-space-around row>
        <v-flex xs6 fluid>
          <Time :time="parsedWeather.time" :date="parsedWeather.date"/>
        </v-flex>
        <v-flex xs6 fluid>
          <Weather
            :time="parsedWeather.time"
            :title="parsedWeather.title"
            :location="parsedWeather.location"
            :temp="parsedWeather.temp"
          />
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <Chart/>
    </v-container>
    <!-- </div> -->
  </div>
</template>

<script>
const WEATHER_API_URL = 'http://167.99.178.142:8000'

import axios from 'axios'
// import Card from '~/components/Card.vue'
import Chart from '~/components/Chart.vue'
import Time from '~/components/Time.vue'
import Weather from '~/components/Weather.vue'

export default {
  components: {
    // Card,
    Chart,
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
      historicalWeather: [
        {"month": 1, "avrTemp": -4.2},
        {"month": 2, "avrTemp": -2.6},
        {"month": 3, "avrTemp": 1.6},
        {"month": 4, "avrTemp": 6.4},
        {"month": 5, "avrTemp": 10.0},
        {"month": 6, "avrTemp": 16.4},
        {"month": 7, "avrTemp": 18.8},
        {"month": 8, "avrTemp": 19.2},
        {"month": 9, "avrTemp": 14.6},
        {"month": 10, "avrTemp": 9.9},
        {"month": 11, "avrTemp": 4.6},
        {"month": 12, "avrTemp": -3.2}
      ],
      loading: false
    }
  },
  computed: {
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
    this.getCurrentWeather(this.cityName)
    this.getHistoricalWeather(this.cityName)
    this.getLocations()
  },
  methods: {
    getCurrentWeather() {
      const url = `${WEATHER_API_URL}/weather?city=${this.cityName}`
      axios
        .get(url)
        .then(({ data }) => {
          this.currentWeather = data
          // this.currentWeather.temp = `${this.currentWeather.temp}°C`
        })
        .catch(response => {
          console.log(response)
        })
    },
    getHistoricalWeather() {
      const url = `${WEATHER_API_URL}/historicalWeather?city=${this.cityName}&year=2018`
      axios
        .get(url)
        .then(({ data }) => {
          this.historicalWeather = data
        })
        .catch(response => {
          console.log(response)
        })
    },
    getLocations() {
      const url = `${WEATHER_API_URL}/locations`
      axios
        .get(url)
        .then(({ data }) => {
          this.locations = data
        })
        .catch(response => {
          console.log(response)
        })
    },
    dateFormat() {
      const monthNames = [
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
      ]
      // const date = new Date(datestamp * 1000)
      const date = new Date()
      const day = date.getDate()
      const monthIndex = date.getMonth()
      const year = date.getFullYear()

      return `${day} ${monthNames[monthIndex]} ${year}`
    },
    timeFormat() {
      // const date = new Date(datestamp * 1000)
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
/* #main {
  position: absolute;
  right: 0;
} */
</style>

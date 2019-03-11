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
      owmCityId: '6183858',
      loading: false,
      owmKey: '0a2b5b3b72b10157f0689dd0d45dae9d',
      owmCurrentWeather: {
        coord: {
          lon: -64.37,
          lat: 45.08
        },
        weather: [
          {
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04n'
          }
        ],
        base: 'stations',
        main: {
          temp: 261.53,
          pressure: 1020,
          humidity: 66,
          temp_min: 260.37,
          temp_max: 263.15
        },
        visibility: 24140,
        wind: {
          speed: 5.1,
          deg: 300,
          gust: 7.7
        },
        clouds: {
          all: 75
        },
        dt: 1552007707,
        sys: {
          type: 1,
          id: 1015,
          message: 0.0037,
          country: 'CA',
          sunrise: 1552041795,
          sunset: 1552083239
        },
        id: 6183858,
        name: 'Wolfville',
        cod: 200
      }
    }
  },
  computed: {
    parsedWeather() {
      return {
        // time: this.timeFormat(this.weather.dt),
        // date: this.dateFormat(this.weather.dt),
        time: this.timeFormat(),
        date: this.dateFormat(),
        title: this.weather.weather[0].main,
        temp: this.tempFormat(this.weather.main.temp),
        location: this.weather.name,
        color: 'transparent'
      }
    }
  },
  created() {
    this.getCurrentWeather(this.owmCityId)
    this.getHistoricalWeather()
  },
  methods: {
    getCurrentWeather(owmCityId) {
      const owmUrl = `https://api.openweathermap.org/data/2.5/weather?id=${owmCityId}&appid=${
        this.owmKey
      }`
      axios
        .get(owmUrl)
        .then(({ data }) => {
          console.log(JSON.stringify(data,'',2))
          this.weather = data
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
    tempFormat(kelvin) {
      const celsius = Number(this.weather.main.temp) - 273.15

      return `${parseFloat(celsius).toFixed(2)}°C`
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

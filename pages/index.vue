<template>
  <div id="app">
    <div id="main">
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <Time :time="weather.time"/>
          <Weather
            :time="weather.time"
            :title="weather.title"
            :location="weather.location"
            :temp="weather.temp"
          />
        </v-layout>
      </v-container>
    </div>

    <div id="test">
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <Card
            :title="weather.temp"
            :location="weather.location"
            :url="weather.temp2"
            :color="weather.color"
          />
          <Card
            :title="weather.temp"
            :location="weather.location"
            :url="weather.temp2"
            :color="weather.color"
          />
          <Card
            :title="weather.temp"
            :location="weather.location"
            :url="weather.temp2"
            :color="weather.color"
          />
          <Card
            :title="weather.temp"
            :location="weather.location"
            :url="weather.temp2"
            :color="weather.color"
          />
          <Card
            :title="weather.temp"
            :location="weather.location"
            :url="weather.temp2"
            :color="weather.color"
          />
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: relative;
}

#main {
  position: absolute;
  right: 0;
}
#test {
  position: absolute;
  bottom: 0;
}
</style>

<script>
import Card from '~/components/Card.vue'
import Weather from '~/components/Weather.vue'
import Time from '~/components/Time.vue'

export default {
  components: {
    Card,
    Weather,
    Time
  },
  data() {
    var today = new Date()
    var date =
      today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
    return {
      loading: false,
      weather: {
        time: date.toString(),
        title: 'Stormy clouds',
        temp: '19 C',
        location: 'Wolfvile NS',
        color: 'transparent'
      }
    }
  }
}
</script>

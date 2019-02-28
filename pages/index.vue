<template>
  <div id="app">
    <h1>Local Weather for wolfville</h1>
        <Card
          :title="weather.temp"
          :location="weather.location"
          :url="weather.temp2"
          :color="weather.color"
        />
  </div>
</template>

<script>
import Card from '~/components/Card.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      loading: false,
      weather: {
        temp: '19 celcius',
        location: 'wolfville',
        color: '#A4508B'
      }
    }
  }
}
</script>

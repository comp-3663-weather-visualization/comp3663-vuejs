<template>
  <div id="app">
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
        color: 'white'
      }
    }
  }
}
</script>

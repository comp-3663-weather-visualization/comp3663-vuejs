<template>
  <div id="app">
    <!-- <div id="main"> -->
      <v-container grid-list-md >
        <v-layout align-center justify-space-around row>
          <v-flex xs6 fluid>
          <Time :time="weather.time"
            :date="weather.date"
          />
          </v-flex>
           <v-flex xs6 fluid>
          <Weather
            :time="weather.time"
            :title="weather.title"
            :location="weather.location"
            :temp="weather.temp"
          />
           </v-flex>
        </v-layout>
        

      </v-container>
      <v-container >
        
           <Chart
          />
        </v-container>
    <!-- </div> -->

    
   
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
import Chart from '~/components/Chart.vue'

function format(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}


export default {
  components: {
    Card,
    Weather,
    Time,
    Chart
  },
  data() {
    var today = new Date()
    var time = today.getHours() + ':' + today.getMinutes()
    // var date = today.getDay().toString() + ':' + today.getMonth().toString()
    return {
      loading: false,
      weather: {
        time: time.toString(),
        date: format(today),
        title: 'Stormy clouds',
        temp: '19 C',
        location: 'Wolfvile NS',
        color: 'transparent'
      }
    }
  }
}
</script>

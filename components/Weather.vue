<template>
  <div id="e3">
    <v-container id="weather-container" fluid grid-list-lg>
      <h1>{{ title }}</h1>
      <br>
      <h1 id="temp">
        {{ temp }}
      </h1>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    temp: { type: String, default: '' },
    time: { type: String, default: '' },
  }
}
</script>

<style scoped>
h1 {
  font-size: 70px;
  color: white;
}
h2 {
  font-size: 40px;
}
#temp {
  position: absolute;
  right: 120px;
}
#left {
  position: absolute;
  left: 0;
}
#weather-container {
  min-height: 400;
}
/* .rounded-card {
   background-color: transparent; */
/* } */
</style>

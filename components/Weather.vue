<template>
  <div id="e3">
    <v-container fluid style="min-height: 400;" grid-list-lg>
      <h1>{{ title }}</h1>
      <h2>{{ location }}</h2>
      <br>
      <h1 id="weather">
        {{ temp }}
      </h1>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    location: { type: String, default: '' },
    title: { type: String, default: '' },
    temp: { type: String, default: '' },
    time: { type: String, default: '' }
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
#weather {
  position: absolute;
  right: 120px;
}
#left {
  position: absolute;
  left: 0;
}
/* .rounded-card {
   background-color: transparent; */
/* } */
</style>

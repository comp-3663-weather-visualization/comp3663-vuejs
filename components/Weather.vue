<template>
  <div id="e3" style="max-width:500px; margin: auto;">
    <v-container fluid style="min-height: 400;" grid-list-lg>
        <h1>{{title}}</h1>
        <h2>{{location}}</h2>
        <br>
        <h1 id="weather">{{temp}}</h1>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ['title', 'location', 'temp', 'time']
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

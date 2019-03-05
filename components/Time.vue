<template>
  <div id="e3" style="max-width:500px; margin: auto;">
    <v-container fluid style="min-height: 400;" grid-list-lg>
        <h1>{{time}}</h1>
        <h1>{{date}}</h1>
    </v-container>
  </div>
</template>
<script>
export default {
  props: ['time', 'date']
}

</script>

<style scoped>

h1 {
    position: absolute;
    left: 0;
}

h1 {
    position: absolute;
    left: 0;
}

</style>

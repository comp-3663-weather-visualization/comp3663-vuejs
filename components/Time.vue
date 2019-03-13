<template>
  <div id="e3">
    <v-container fluid style="min-height: 400;" grid-list-lg>
      <h1>{{ time }}</h1>
      <br>
      <h1>{{ date }}</h1>
    </v-container>
  </div>
</template>
<script>
export default {
  props: {
    date: { type: String, default: '' },
    time: { type: String, default: '' }
  }
}

</script>

<style scoped>
h1 {
  position: absolute;
  left: 0;
  color: white;
  font-size: 25px;
}
</style>

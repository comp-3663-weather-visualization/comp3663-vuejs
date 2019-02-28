<template>
  <div id="app">
    <h1>Local Weather for wolfville</h1>
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
      login: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

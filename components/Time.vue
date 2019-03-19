<template>
  <div>
    <h2>{{ time }}</h2>
    <h2>{{ date }}</h2>
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

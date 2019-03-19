<template>
  <div>
    <h1 class="right">{{ title.trim() }}<br>{{ temp.trim() }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: '' },
    temp: { type: String, default: '' },
    time: { type: String, default: '' }
  }
}
</script>

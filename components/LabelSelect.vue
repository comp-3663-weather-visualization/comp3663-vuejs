<template>
  <div>
    <div class='dropdown-wrapper'>
      <select
        v-model="selected"
        @change="returnChoice()"
      >
        <option
          v-for="(item, key) in list"
          :key="key"
        >
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LabelSelect',
  props: {
    value: { type: String, default: '' },
    list: { type: Array, default: () => [] }
  },
  data () {
    return {
      selected: ''
    }
  },
  created () {
    this.setSelected()
  },
  methods: {
    setSelected () {
      this.selected = this.value
    },
    returnChoice () {
      this.$emit('input', this.selected)
    }
  }
}
</script>

<style scoped>
div.dropdown-wrapper {
    width: 150px; /* Sets the width of your dropdown */
}

div.dropdown-wrapper select {
    width:115% /* This hides the arrow icon */;
    background-color:transparent /* This hides the background */;
    background-image:none;
    -webkit-appearance: none /* Webkit Fix */;
    border:none;
    box-shadow:none;
    padding:0.3em 0.5em;
}
</style>

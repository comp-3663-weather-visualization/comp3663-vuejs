<template>
  <div class="dropdown-wrapper">
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
</template>

<script>
export default {
  name: 'LabelSelect',
  props: {
    value: { type: String, default: '' },
    list: { type: Array, default: () => [] }
  },
  data() {
    return {
      selected: ''
    }
  },
  created() {
    this.setSelected()
  },
  methods: {
    setSelected() {
      this.selected = this.value
    },
    returnChoice() {
      this.$emit('input', this.selected)
    }
  }
}
</script>

<style scoped>
div.dropdown-wrapper {
  /* color: white; */
  font-size: 1.5em;
  width: 300px; /* Sets the width of the dropdown */
  margin: 0 50px 0 0;
}

div.dropdown-wrapper select {
  width: 115% /* This hides the arrow icon */;
  background-color: transparent /* This hides the background */;
  background-image: none;
  -webkit-appearance: none /* Webkit Fix */;
  box-shadow:none;
  padding:0.3em 0.5em;
  border-radius: 5px;
  border: 1px solid white;
}

div.dropdown-wrapper option {
  color: black;
  font-size: 1em;
}
</style>

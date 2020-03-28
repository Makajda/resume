<template>
  <div>
    <button
      class=button
      :disabled="resid == active"
      :style="{height: height+'pt'}"
      @click="$emit('selected', resid)">
      {{ title }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    resid: String,
    title: String,
    active: String,
    height: Number,
  },
}
</script>

<style scoped>
.button {
  width: 100%;
  background-color: inherit;
  color: black;
  border-radius: 3pt;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 1pt rgba(0,0,0,0.5);
  font-size: larger;
  font-family: Arial, Helvetica, sans-serif;
}
.button:hover {
  background-color: rgb(237, 245, 122);
}
.button:disabled {
  background-color: rgb(238, 241, 194);
  color: black;
}
</style>

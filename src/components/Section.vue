<template>
  <div
    ref="el"
    class="display-none"
    v-html="$resolve_html(this.resid)"
  />
</template>

<script>
export default {
  name: 'Section',
  props: {
    resid: String,
    active: String,
    trigSaved: Boolean
  },
  data: function () {
    return {
      offsetLeft: 0,
      offsetTop: 0,
    }
  },
  watch: {
    active: function (newVal, oldVal) {
      if(oldVal == this.resid) {
        this.offsetLeft = window.pageXOffset;
        this.offsetTop = window.pageYOffset;
        this.$refs.el.style.display = "none";
        this.$emit("saved");
      }
    },
    trigSaved: function () {
      if(this.active == this.resid) {
        this.$refs.el.style.display = "inline";
        window.scrollTo(this.offsetLeft, this.offsetTop);
      }
    }
  },
}
</script>

<style scoped>
  .display-none {
    display: none;
}
</style>

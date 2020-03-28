<template>
  <div id="app">
    <div class=menuTop>
      <Nav
        class=menu-element
        v-for="(section, index) in sections"
        :key="index"
        :resid="section.id"
        :title="section.title"
        :active="active"
        :height = "heightMenu"
        @selected="active = arguments[0]"
      />
    </div>

    <div :style="{ 'margin-top': heightMenu+'pt' }">
      <Section
        v-for="(section, index) in sections"
        :key="index"
        :resid="section.id"
        :active="active"
        :trigSaved="trigSaved"
        @saved="trigSaved = !trigSaved"
      />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Section from './components/Section.vue'

export default {
  name: 'App',
  components: {
    Nav, Section
  },
  data: function () {
    return {
      sections:[],
      active:null,
      trigSaved:false,
      heightMenu:50,
    }
  },
  created() {
    this.sections = this.$resolve_json("sections");
    this.active = this.sections[0].id;
  },
  mounted() {
    this.trigSaved = !this.trigSaved;
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  }
.menuTop {
  display: table;
  position: fixed;
  top: 0;
  width: 99%;
  background-color: white;
}
.menuBottom {
  display: table;
  width: 100%;
  background-color: white;
}
.menu-element {
  display: table-cell;
  max-width: 0px;
}
</style>

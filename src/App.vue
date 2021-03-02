<template>
  <div>
    <HelloWorld msg="vue3 & vue-router4 & vue-router4"></HelloWorld>
    <p>
      <router-link to="/">Home</router-link> | 
      <router-link to="/test">Test</router-link>
    </p>
    <router-view></router-view>
  </div>
  
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from './components/HelloWorld.vue';

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

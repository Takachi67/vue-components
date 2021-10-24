<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <accordion>
    <template v-slot:button>
      <button class="test">Salut !</button>
    </template>
    <template v-slot:content>On me voit</template>
  </accordion>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Accordion from './components/Accordion.vue';

export default defineComponent({
  name: 'App',
  components: {
    Accordion
  }
});
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

.test {
  width: 500px;
}
</style>

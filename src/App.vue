<template>
  <div id="app">
    <ValidationObserver>

      <ValidationProvider rules="required|min:5" v-slot="{ errors }">

        <el-input-number v-model="num"></el-input-number>
        <span>{{ errors[0] }}</span>

      </ValidationProvider>

    </ValidationObserver>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      num: 0,
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

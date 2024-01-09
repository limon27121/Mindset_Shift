<template lang="">
  <div>
    <Header/>
    <router-view></router-view>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue';
import Header from '@/components/LayOut/Header'
export default {
  components: {
    HelloWorld,
    Header
  },
}
</script>
<style >
body {
  margin: 0;
}
  
</style>
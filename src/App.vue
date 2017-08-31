<template>
  <div id="app">
      <img class="logo-vnw" src="./assets/imagens/vainaweb.svg">
      <router-view></router-view>
  </div>
</template>

<script>
import Travado from '@/components/Travado'

export default {
  name: 'app'
}
</script>

<style scoped>
  #app {
    min-width: 100%;
    min-height: 100vh;
    background-color: #F60;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .logo-vnw{
    z-index: 100;
    width: 14%;
    
    position: absolute;  
    top: 6vh;
    left: 3.5%;
  }
</style>

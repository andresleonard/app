<template>
  <div>
    <SideBar/>
    <Content/>
  </div>
</template>


<script>
import SideBar from './components/SideBar.vue'
import Content from './components/Content.vue'
import Login from './components/Login.vue'

export default{
  name: 'App',
  components: {
    SideBar,
    Content,
    Login
  },
  mounted(){
  }
}

</script>


<style scoped>

</style>

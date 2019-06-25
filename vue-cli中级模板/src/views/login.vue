<template>
  <div class="home">
    <button  type="button" @click = "reg(0)">登录</button>
    <button  type="button" @click = "reg(1)">注册</button>
  </div>
</template>

<script>
  export default {
    name: 'login',
    methods:{
      reg(data){
        this.$router.push('/home/list')
      }
    }
  };
</script>
<style scoped>
  html{background-color: antiquewhite}
</style>

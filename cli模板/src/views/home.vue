<template>
  <div class="home">
    <div>
      <router-link :to="{name: 'list'}">新闻列表</router-link>
      <router-link :to="{name: 'user'}">用户信息</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'home',
};
</script>
<style scoped>
  html{background-color:#42b983}
</style>

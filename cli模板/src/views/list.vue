<template>
  <div class="Fu">
    dasdsa
    <ul>
      <li v-for="(v,index) in lists_page" :key="index">
        {{v.title}}--{{v.content}}
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '@/store'
  export default {
    name: 'list',
    store,
    computed:{
      lists_page(){
        return store.state.lists
      }
    }
  };
</script>
<style scoped>
  html{background-color: antiquewhite}
</style>

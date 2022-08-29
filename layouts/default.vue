<template>
  <div class="main-app-container">
    <app-header />
    <nuxt class="page-container"/>
    <app-footer />
  </div>
</template>
  
<script>
import AppHeader from "~/components/app-header.vue"
import AppFooter from "~/components/app-footer.vue"
  
export default {
  components: {
    AppHeader,
    AppFooter,
  }  
}
</script>
  
<style lang="scss" scoped>
.main-app-container {
  height: 100%;  

  .page-container {
    padding: 0;
    min-height: calc(100vh - 125px);
  }
}

</style>  

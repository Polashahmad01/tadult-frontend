<template>
  <div class="container-xl">
    <app-loading-spinner />
  </div>  
</template>
  
<script>
import AppLoadingSpinner from "~/components/app-loading-spinner.vue"
  
export default {
  name: 'AuthPage',
  components: {
    AppLoadingSpinner,
  },
  middleware: 'redirect',
}
</script>
  
<style lang="scss" scoped>
.container-xl {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 64px);
}
</style>
  
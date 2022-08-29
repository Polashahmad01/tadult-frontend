<template>
  <div class="container-xl">
    <app-sign-in />
  </div>  
</template>
  
<script>
import AppSignIn from "~/components/app-signin.vue"
  
export default {
  name: 'SigninPage',
  components: {
    AppSignIn,
  }
}
</script>
  
<style lang="scss" scoped>
.container-xl {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
  
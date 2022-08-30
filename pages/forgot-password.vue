<template>
  <div class="container-xl">
    <app-forgot-password />
  </div>
</template>
  
<script>
import AppForgotPassword from "~/components/app-forgot-password.vue"
  
export default {
  name: 'ForgotPasswordPage',
  components: {
    AppForgotPassword
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
 
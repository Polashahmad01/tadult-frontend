<template>
  <div class="container-xl">
    <app-new-password />
  </div>  
</template>
  
<script>
import AppNewPassword from "~/components/app-new-password.vue"
  
export default {
  name: 'NewPasswordPage',
  components: {
    AppNewPassword,
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
  
<template>
  <div class="container-xl">
    <app-signup-as-user />
  </div>  
</template>
  
<script>
import AppSignupAsUser from "~/components/app-signup-as-user.vue"
  
export default {
  name: 'SignupAsUserPage',
  components: {
    AppSignupAsUser,
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
  
<template>
  <div class="container-xl">
    <app-user-type />
  </div>  
</template>
  
<script>
import AppUserType from "~/components/app-user-type.vue"
  
export default {
  name: 'SignupTypePage',
  components: {
    AppUserType,
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

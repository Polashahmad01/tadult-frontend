<template>
  <div class="container-xl">
    <app-signup-as-content-creator />
  </div>  
</template>
  
<script>
import AppSignupAsContentCreator from "~/components/app-signup-as-content-creator.vue"
  
export default {
  name: 'SignupAsContentCreatorPage',
  components: {
    AppSignupAsContentCreator,
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
  
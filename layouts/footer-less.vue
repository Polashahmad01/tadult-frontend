<template>
  <div class="main-app-container">
    <app-header />
    <nuxt />
  </div>
</template>
  
<script>
import AppHeader from "~/components/app-header.vue"
  
export default {
  components: {
    AppHeader,
  }
}
</script>
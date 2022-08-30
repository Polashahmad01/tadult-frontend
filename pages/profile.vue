<template>
  <div class="container-xl">
    <app-edit-profile />
  </div>  
</template>
  
<script>
import AppEditProfile from "~/components/app-edit-profile.vue"
  
export default {
  name: 'ProfilePage',
  components: {
    AppEditProfile,
  },
  middleware: 'authenticated'
}
</script>

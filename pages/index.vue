<template>
  <div class="container-xl">
    <h1>Home Page</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'footer-less',
  middleware: 'authenticated',
}
</script>

<template>
  <h1>Home Page</h1>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'footer-less',
  middleware: 'authenticated',
}
</script>
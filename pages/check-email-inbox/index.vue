<template>
  <div class="container-xl">
    <div class="card">
        <p>Hi there, Thanks for creating an account with us.</p>
        <h1>Please check your email inbox</h1>
        <p>Be sure to check SPAM folder as well</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkEmailInbox",
}
</script>

<style lang="scss">
@import '~/styles/styles.scss';

.container-xl {
  margin: auto;
  display: grid;
  place-items: center;

  .card {
    background: $secondary-background-color;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    border-radius: 10px;
    padding: 1.5rem 2rem;
    @include responsive(phone) {
      padding: 3rem 1.5rem;
    }

    p {
      color: $black-color;
      font-size: 16px;
      transition: all 0.3s ease-in-out;
      @include responsive(phone) {
        font-size: 12px;
      }
    }

    h1 {
      color: $black-color;
      font-size: 30px;
      @include responsive(phone) {
        font-size: 1rem;
      }
    }
  }
}
</style>

<template>
  <div class="container-xl">
    <div class="card">
        <h1>Your email has been verified</h1>
        <p>You can now sign in with your new account</p>
        <nuxt-link to="/signin">Sign In Now</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
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
      margin-bottom: 0.5rem;
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

    a {
      color: $green-color;
      transition: all 0.3s ease-in-out;
      &:hover {
      color: $black-color;
      }
    }
  }
}
</style>

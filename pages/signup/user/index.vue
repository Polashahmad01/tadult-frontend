<template>
  <div class="container-xl">
    <form class="card">
      <p>Welcome to <span>TAdult</span></p>
      <h1>Sign up as a user</h1>
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input type="text" name="fullName">
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" name="username">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" name="email">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" name="password">
      </div>
      <div class="form-group">
        <label for="dob">Date of Birth</label>
        <input type="date" name="dob">
      </div>
      <div class="form-group">
        <button type="submit">Submit</button>
      </div>
      <div class="form-group">
        <p>Already have an account? <nuxt-link to="/signin">Sign In</nuxt-link></p>
      </div>
    </form>
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
      padding: 2rem 3.2rem;
      @include responsive(phone) {
        padding: 2.5rem;
      }

      p {
        color: $black-color;
        margin-bottom: -0.5rem;
        font-size: 16px;
        transition: all 0.3s ease-in-out;
        @include responsive(phone) {
          font-size: 12px;
        }

        span {
          color: $green-color;
          letter-spacing: 2px;
          font-weight: 600;
          transition: all 0.3s ease-in-out;

          &:hover {
            color: $black-color;
          }
        }
      }

      h1 {
        color: $black-color;
        font-size: 30px;
        margin-bottom: 0.5rem;
        padding-right: 2rem;
        @include responsive(phone) {
          font-size: 1.2rem;
        }
      }

      .form-group {
        display: flex;
        flex-direction: column;
        position: relative;
        
        label {
          color: $black-color;
          margin-bottom: 0.3rem;
          @include responsive(phone) {
            margin-bottom: 0.2rem;
            font-size: 12px;
          }
        }

        input {
          padding: 0.8rem 1rem;
          border-radius: 5px;
          border: 1px solid #ededed;
          margin-bottom: 0.5rem;
          outline: none;
          @include responsive(phone) {
            padding: 0.6rem 1rem;
          }

          &:focus {
            border: 1px solid #023047;
          }
        }

        button {
          padding: 0.7rem 0;
          border-radius: 5px;
          margin-top: 0.5rem;
          text-align: center;
          letter-spacing: 2px;
          background-color: $black-color;
          color: #fff;
          font-weight: 400;
          font-size: 16px;
          border: 1px solid #ededed;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          @include responsive(phone) {
            padding: 0.6rem 0;
          }

          &:hover {
            background: $green-color;
            color: $black-color;
          }
        }

        p {
            text-align: center;
            margin-top: 1rem;
            font-size: 14px;

            a {
                color: $green-color;
                transition: all 0.3s ease-in-out;
                &:hover {
                color: $black-color;
                }
            }
        }
      }
    }
}
</style>

<template>
  <div class="form-card">
    <form @submit.prevent="handleFormSubmit">
      <div class="form-group">
        <h1>Forgot password</h1>
        <p>
          Don't worry! It happens. Please enter the address <br>
          associated with your account.
        </p>
      </div>  

      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" class="base-input-xl" type="email" placeholder="john.doe@gmail.com">
      </div>

      <div class="form-group">
        <button class="base-button-xl" type="submit">Reset password</button>
      </div>

      <div class="form-group">
        <nuxt-link class="back-to-login" to="/signin">Back to log in</nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
import { sendPasswordResetEmail } from "firebase/auth"
import auth from "~/plugins/fireinit"

export default {
  data() {
    return {
      email: ""  
    }
  },
  methods: {
    toastify(msg, actionText) {
      this.$toasted.show(msg, {
        theme: "toasted-primary",
        position: "bottom-center",
        duration: 5000,
        action: {
          text: actionText,
          onClick: (e, toastObject) => {
            toastObject.goAway(0);
          }
        }
      });
    },
    handleFormSubmit() {
      if(!this.email) {
        this.toastify('The email address is badly formatted', 'Try Again')
        // eslint-disable-next-line no-useless-return
        return
      }  

      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          this.toastify('Password reset email sent!', 'Ok')
          this.$router.push({ name: 'signin' })  
        })
        .catch(() => {
          this.toastify(`User with the email ${this.email} not found`, 'Try Again')  
        })
    }
  }  
}
</script>

<style lang="scss" scoped>
@import '~/styles/styles.scss';

.form-card {
  background: $secondary-background-color;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 10px;
  padding: 3rem 2rem;
  @include responsive(phone) {
    padding: 2rem auto;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;

    h1 {
      color: $black-color;
      font-size: 30px;
      @include responsive(phone) {
        font-size: 1.5rem;
      }  
    }

    p {
      color: $black-color;
      margin-bottom: -0.5rem;
      font-size: 14px;
      margin-bottom: 1rem;
      @include responsive(phone) {
        font-size: 12px;
      }  
    }

    label {
      color: $black-color;
      margin-bottom: 0.3rem;  
    }

    input {
      margin-bottom: 1rem;
      
      @include responsive(phone) {
        padding: 0.7rem 1rem;
      }
      
      &:focus {
        border: 1px solid #023047;
      }  
    }

    button {
      text-align: center;
      letter-spacing: 2px;
      background-color: $black-color;
      color: #fff;
      font-weight: 400;
      font-size: 16px;  
      transition: all 0.3s ease-in-out;
      @include responsive(phone) {
        padding: 0.6rem 0;
      }
      &:hover {
        background: $green-color;
        color: $black-color;
      }  
    }

    .back-to-login {
      text-align: center;
      margin-top: 1rem;
      font-size: 14px;
      color: $green-color;
      font-weight: 600;
      transition: all 0.4s ease-in-out;
      &:hover {
        color: $black-color;
      }  
    }
  }
}
</style>

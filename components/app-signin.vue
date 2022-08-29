<template>
  <div class="form-card">
    <form @submit.prevent="handleLoginForm">

      <div class="form-group">
        <p>Welcome back</p>
        <h1>Login to your account</h1>
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" class="base-input-xl" type="email" placeholder="john.doe@gmail.com">
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" class="base-input-xl" :type="passwordType">
        <svg v-if="isShowPassword" class="password-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" @click="toggleShowAndHidePassword">
          <path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"/>
        </svg>
        <svg v-else class="password-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" @click="toggleShowAndHidePassword">
          <path d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM223.1 149.5L313.4 220.3C317.6 211.8 320 202.2 320 191.1C320 180.5 316.1 169.7 311.6 160.4C314.4 160.1 317.2 159.1 320 159.1C373 159.1 416 202.1 416 255.1C416 269.7 413.1 282.7 407.1 294.5L446.6 324.7C457.7 304.3 464 280.9 464 255.1C464 176.5 399.5 111.1 320 111.1C282.7 111.1 248.6 126.2 223.1 149.5zM320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L177.4 235.8C176.5 242.4 176 249.1 176 255.1C176 335.5 240.5 400 320 400C338.7 400 356.6 396.4 373 389.9L446.2 447.5C409.9 467.1 367.8 480 320 480H320z"/>
        </svg>
      </div>

      <div class="form-group">
        <nuxt-link class="forgot-password" to="/forgot-password">Forgot password?</nuxt-link>
      </div>

      <div class="form-group">
        <button class="base-button-xl" type="submit">Login</button>
      </div>

      <div class="form-group">
        <p class="signup">Don't have an account? <nuxt-link to="/signup">Sign up for free</nuxt-link></p>
      </div>
    </form>
  </div>  
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "~/plugins/fireinit";

export default {
  data() {
    return {
      email: "",
      password: "",  
      passwordType: "password",
      isShowPassword: false,  
    }
  },
  methods: {
    toggleShowAndHidePassword() {
      if(this.passwordType === "password") {
        this.passwordType = "text"
        this.isShowPassword = true
      } else {
        this.passwordType = "password"
        this.isShowPassword = false
      } 
    },
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
    handleLoginForm() {
      if(!this.email || !this.password || this.password.length < 6) {
        this.toastify("Please enter email and password", "Try Again")
        // eslint-disable-next-line no-useless-return
        return
      }  

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.toastify("Successfully logged in", "Ok")
          this.$router.push({ name: 'index' })  
        })
        .catch(() => {
          this.toastify('Sorry, the email address and or password are not correct', 'Try Again')  
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
    position: relative;

    p {
      color: $black-color;
      margin-bottom: -0.5rem;
      font-size: 16px;
      @include responsive(phone) {
        font-size: 14px;
      }  
    }

    h1 {
      color: $black-color;
      font-size: 30px;
      margin-bottom: 1rem;
      @include responsive(phone) {
        font-size: 1.5rem;
      }  
    }

    label {
      color: $black-color;
      margin-bottom: 0.3rem;
      @include responsive(phone) {
        font-size: 14px;
      }  
    }

    input {
      margin-bottom: 0.5rem;
      padding-right: 3rem;
      @include responsive(phone) {
        padding: 0.7rem 1rem;
      }

      &:focus {
        border: 1px solid #023047;
      }  
    }

    .forgot-password {
      align-self: flex-end;
      color: $green-color;
      font-size: 14px;
      font-weight: 500;
      margin: 0.5rem 0;
      transition: all 0.3s ease-in-out;
      @include responsive(phone) {
        font-size: 14px;
        margin: 0.4rem 0;
      }
      &:hover {
        color: $black-color;
      }  
    }

    button {
      letter-spacing: 2px;
      background-color: $black-color;
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      margin-top: 0.5rem;
      text-align: center;
      transition: all 0.3s ease-in-out;
      @include responsive(phone) {
        padding: 0.6rem 0;
      }

      &:hover {
        background: $green-color;
        color: $black-color;
      }  
    }

    .signup {
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

    .password-icon {
      position: absolute;
      top: 64%;  
      right: 0%; 
      transform: translate(-50%, -50%);
      cursor: pointer;
      width: 1.5rem;  
    }
  }
}
</style>

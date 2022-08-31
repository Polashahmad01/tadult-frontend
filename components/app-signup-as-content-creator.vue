<template>
  <form @submit.prevent="handleFormSubmit">
    <p>Welcome to <span>TAdult</span></p>
    <h1>Sign up as creator</h1>
      
    <div v-if="isShowFormFirstPart">
      <div class="form-group">
        <label for="firstName">First Name</label>
        <input v-model="firstName" type="text" class="base-input-xl">
      </div>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input v-model="lastName" type="text" class="base-input-xl">
      </div>
      <div class="form-group">
        <label for="dateOfBirth">Date of Birth</label>
        <input v-model="dateOfBirth" type="date" class="base-input-xl">
      </div>
      <div class="form-group">
        <p class="base-button-xl btn" @click="handleFormPart">Continue</p>
      </div>  
    </div>
  
    <div v-if="isShowFormSecondPart">
      <div class="form-group">
        <label for="userName">Username</label>
        <input v-model="userName" type="text" class="base-input-xl">
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" class="base-input-xl">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" class="base-input-xl">
      </div>
      <div class="form-group">
        <button class="base-button-xl" type="submit">Submit</button>
      </div>
    </div>
      
    <div class="form-group">
      <p>Already have an account? <nuxt-link to="/signin">Sign In</nuxt-link></p>
    </div>
    
  </form>  
</template>

<script>
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth"
import auth from "~/plugins/fireinit"

export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      dateOfBirth: "",  
      userName: "",
      email: "",
      password: "",
      isShowFormFirstPart: true,  
      isShowFormSecondPart: false,
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
    handleFormPart() {
      if(!this.firstName) {
        this.toastify('Please fill the first name field', 'Try Again')
        return
      } else if (!this.lastName) {
        this.toastify('Please fill the last name field', 'Try Again')
        return
      } else if(!this.dateOfBirth) {
        this.toastify('Please fill the date of birth field', 'Try Again')
        return
      }
        
      this.isShowFormFirstPart = false
      this.isShowFormSecondPart = true  
    },
    handleFormSubmit() {
      if(!this.userName) {
        this.toastify('Please fill the username field', 'Try Again')
        // eslint-disable-next-line no-useless-return
        return
      } else if(!this.email) {
        this.toastify('Please fill the email field', 'Try Again')
        // eslint-disable-next-line no-useless-return
        return
      } else if(!this.password) {
        this.toastify('Please fill the password field', 'Try Again')
        // eslint-disable-next-line no-useless-return
        return
      }

      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const signupAsContentCreatorWithEmailAndPassword = async () => {
            const payload = {
              firstName: this.firstName,
              lastName: this.lastName,
              dateOfBirth: this.dateOfBirth,
              userName: this.userName,
              _id: userCredential.user.uid,
              accountType: "Content-Creator",
            }

            await this.$axios.post("/persons", payload);
          }
          
          signupAsContentCreatorWithEmailAndPassword()
          sendEmailVerification(auth.currentUser)
            .then(() => {
              this.toastify(`A verification email has been sent. Please check your email inbox.`, "Ok")
              this.$store.dispatch('setUsername', this.userName);  
              this.$router.push({ name: 'signin' })  
            })           
        })
        .catch(() => {
          this.toastify('The email address and or password is badly formatted', "Try Again")
        })
    }
  }  
}
</script>

<style lang="scss" scoped>
@import '~/styles/styles.scss';

form {
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
    margin-bottom: 0.8rem;
    padding-right: 2rem;
    @include responsive(phone) {
      font-size: 1.2rem;
    }
  }

  .form-group {
    display: flex;
    flex-direction: column;

    label {
      color: $black-color;
      margin-bottom: 0.3rem;
      @include responsive(phone) {
        margin-bottom: 0.2rem;
        font-size: 12px;
      }   
    }

    input {
      margin-bottom: 0.8rem;

      &:focus {
        border: 1px solid #023047;
      }  
    }

    button,
    .btn {
      letter-spacing: 3px;
      border: 2px solid $black-color;
      font-size: 14px;
      background-color: $black-color;
      color: white;
      transition: all 0.3s ease-in-out;
      @include responsive(phone) {
        padding: 0.6rem 0.6rem;
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 12px;
      } 

      &:hover {
        opacity: 0.8;
        background-color: $green-color;
        color: $black-color;
        border: 2px solid $green-color;
      }  
    }

    p {
      margin-top: 0.8rem ;
      text-align: center;  

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
</style>

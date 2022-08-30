<template>
  <div class="form-wrapper">
    <div class="show-change-form" @click="toggleIsShowLoginInfo">
      <h3>Email Address</h3>
      <p>Change email address on your profile</p>
    </div>
  
    <form v-if="isShowLoginInfo" @submit.prevent="handleEmailForm">
      <div class="form-group">
        <label for="email">Email*</label>
        <input v-model="email" class="base-input-xl" type="email" placeholder="john.doe@gmail.com">
      </div>
      <button class="base-button-xl" type="submit">CHANGE EMAIL</button>
    </form>
  
    <hr>
    <div class="show-change-form" @click="toggleIsShowChangePassword">
      <h3>Change Password</h3>  
      <p>Create a password that is at list 6 characters long</p>
    </div>
  
    <form v-if="isShowChangePassword" @submit.prevent="handlePasswordForm">
      <div class="form-group">
        <label for="currentPassword">Current password*</label>
        <input v-model="oldPassword" type="password" class="base-input-xl" placeholder="Old password">
      </div>
      <div class="form-group">
        <label for="newPassword">New password*</label>
        <input v-model="newPassword" type="password" class="base-input-xl" placeholder="New password">
      </div>
      <div class="form-group">
        <label for="confirPassword">Confirm new password</label>
        <input v-model="confirmPassword" type="password" class="base-input-xl" placeholder="New password again">
      </div>
      <button class="base-button-xl">CHANGE PASSWORD</button>
    </form>
  </div>
</template>

<script>
import { updateEmail, updatePassword } from "firebase/auth"
import auth from "~/plugins/fireinit"

export default {
  data() {
    return {
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",  
      isShowLoginInfo: false,
      isShowChangePassword: false,  
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
    toggleIsShowLoginInfo() {
      this.isShowLoginInfo = !this.isShowLoginInfo  
    },
    toggleIsShowChangePassword() {
      this.isShowChangePassword = !this.isShowChangePassword  
    },
    handleEmailForm() {
      if(!this.email) {
        this.toastify('Please fill the email field', 'Try Again')
        // eslint-disable-next-line no-useless-return
        return
      }
      
      updateEmail(auth.currentUser, this.email)
        .then(() => {
          this.toastify('Email successfully updated!', 'Ok')  
          this.email = ""
        })
        .catch(() => {
          this.toastify('An error occurred', 'Try Again')  
        })
    },
    handlePasswordForm() {
      if(!this.oldPassword) {
        this.toastify('Please fill the current password field', 'Try Again')
        // eslint-disable-next-line no-useless-return
        return 
      }
      if(!this.newPassword) {
        this.toastify('Please fill the new password field', 'Try Again')
        // eslint-disable-next-line no-useless-return
        return
      }
      if(!this.confirmPassword) {
        this.toastify('Please fill the confirm password field', 'Try Again')
        // eslint-disable-next-line no-useless-return
        return 
      }
      if(this.newPassword !== this.confirmPassword) {
        this.toastify(`Password didn't match`, `Try Again`)
      } else if(this.newPassword.length < 6 || this.confirmPassword.length < 6) {
        this.toastify(`Password must be at list 6 characters long`, 'Try Again')
      }

      if(this.newPassword === this.confirmPassword && this.newPassword.length > 5 && this.confirmPassword.length > 5) {
        updatePassword(auth.currentUser, this.confirmPassword)
          .then(() => {
            this.toastify("Password Successfully Updated", "Ok");
            this.oldPassword = ""
            this.newPassword = ""
            this.confirmPassword = ""
          })
          .catch((error) => {
            this.toastify(error.message, 'Try Again')
          })
      }
    }
  }  
}
</script>

<style lang="scss" scoped>
@import '~/styles/styles.scss';

.form-wrapper {
  padding: 30px 0;  
  margin: 0 30px;
  
  .show-change-form {
    cursor: pointer;

    h3 {
      font-weight: 400;
      font-size: 15px;
      @include responsive(phone) {
        font-size: 14px;
      }  
    }

    p {
      font-size: 14px;
      opacity: 0.4;
      margin: 10px auto;
      margin-bottom: 20px;  
      @include responsive(phone) {
        font-size: 13px;
      }  
    }
  }

  hr {
    border: 0;
    border-top: 1px solid #eeeeee;
    margin-bottom: 15px;
  }

  form {

    .form-group {
      display: flex;
      flex-direction: column;
      margin-left: 30px; 
      
      label {
        font-size: 14px;
        font-weight: 400;
        color:#332c49;
        margin-bottom: 0.5rem;
        opacity: 0.8;
      }

      input {
        margin-bottom: 1.5rem;
        margin-right: 2rem;

        &:focus {
          border: 1px solid #023047;
        }
      }
    }

    button {
      margin-left: 30px;
      margin-bottom: 1.5rem;
      letter-spacing: 3px;
      border: 1px solid #05AF50;
      font-size: 13px;
      background-color: #05AF50;
      color: white;
      transition: all 0.3s ease-in-out;
      @include responsive(phone) {
        padding: 0.6rem 0.6rem;
        font-weight: 500;
        letter-spacing: 1px;
        font-size: 12px;
      } 

      &:hover {
        opacity: 0.6;
        background-color: #fff;
        color: #05AF50;
      }  
    }
  }
}
</style>

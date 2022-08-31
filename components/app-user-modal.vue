<template>
  <div class="modal" @click="closeModal">
    <nuxt-link to="/profile">Edit</nuxt-link>
    <img src="~/static/img/user.png" alt="user profile"> 
    <p>Polash Ahmad</p>
    <hr> 
    <button @click="handleUserSignout">Sign out</button>
  </div>
</template>
  
<script>
import { signOut } from "firebase/auth"
import auth from "~/plugins/fireinit"

export default {
  methods: {
    closeModal() {
      this.$emit("close")
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
    handleUserSignout() {
      signOut(auth)
        .then(() => {
          this.toastify('Sign-out successful', 'Ok')
          this.$router.push({ name: 'signin' })
        })
        .catch(() => {
          this.toastify('Unable to Sign-out. An error occurred', 'Try Again')  
        })
      document.querySelector('.modal').style.display = "none"    
    }
  }
}
</script>
  
<style lang="scss" scoped>
.modal {
  width: 300px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 6px 12px rgb(0 0 0 / 18%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
    
  a {
    align-self: flex-end;
    margin: 20px 15px 0 30px;
    font-size: 0.8rem;
    color: #000000;
  }
  
  img {
    display: block;
    margin: auto;
    height: 55px;
    width: 55px;
  }
  
  p {
    text-align: center;
    margin: 0.5rem auto;
    font-weight: 400;
  }
  
  hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 0;
    border-top: 1px solid #eeeeee;
  }
  
  button {
    border: 0;
    background: none;
    font-size: 0.9rem;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 20px;
    transition: all 0.3s ease-in-out;
    &:hover {
      opacity: 0.4;
    }
  }
  
  ::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background: #fff;
    transform: rotate(45deg);
    border-right: none;
    border-bottom: none;
    border-left: 1px solid rgba(0, 0, 0, 0.15);
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    bottom: 100%;
    right: 48px;
    top: -8px;
  }
}
</style>

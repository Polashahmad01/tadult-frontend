<template>
  <header>
    <div class="container-xl">
      <div class="logo">
        <nuxt-link to="/">
          <h1><span>T</span>Adult</h1>
        </nuxt-link>
      </div>  

      <form v-if="user" class="search" @submit.prevent="searchPosts">
        <input type="text" class="base-input" placeholder="I'm Feeling Lucky">
        <button type="submit" class="base-button">
          <i class="search-icon fa fa-search filter-enabled"></i>
        </button>
      </form>
      
      <div class="hamburger" @click="toggleMobileMenu">
        <div :class="{ hamburger__line1 : isShowMobileMenu }" class="hamburger__line"></div>
        <div :class="{ hamburger__line2 : isShowMobileMenu }" class="hamburger__line"></div>
        <div :class="{ hamburger__line3 : isShowMobileMenu }" class="hamburger__line"></div>
      </div>

      <div v-if="!user" :class="{ show__mobile__menu : isShowMobileMenu }" class="header__navigator">
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <nuxt-link class="nav__link" to="/signin">Sign In</nuxt-link>  
            </li>
            <li class="nav__item">
              <nuxt-link class="nav__link" to="/signup">Sign Up</nuxt-link>  
            </li>
          </ul>  
        </nav>
      </div>

      <div v-if="user" :class="{ show__mobile__menu : isShowMobileMenu }" class="logged__in__menu">
        <nav class="nav">
          <ul class="nav__list">
            <li class="nav__item">
              <nuxt-link class="nav__link" to="/profile">Profile</nuxt-link>
            </li>
          </ul>  
        </nav>
      </div>
      
      <div v-if="user" class="profile" @click="toggleShowUserModal" @close="toggleShowUserModal">
        <img src="~/static/img/user.png" alt="user profile">
      </div>

      <div v-if="isShowUserModal" class="user-modal">
        <app-user-modal />
      </div>
      
    </div>
  </header>  
</template>

<script>
import AppUserModal from "~/components/app-user-modal.vue"
    
export default {
  components: {
    AppUserModal,
  },
  data() {
    return {
      isShowMobileMenu: false,
      isShowUserModal: false, 
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isShowMobileMenu = !this.isShowMobileMenu  
    },
    searchPosts() {
      return 0  
    },
    toggleShowUserModal() {
      this.isShowUserModal = !this.isShowUserModal
    }
  }  
}
</script>

<style lang="scss" scoped>
// Import Front-Awesome
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
@import '~/styles/styles.scss';

header {
  background-color: $secondary-background-color;
  border: 1px solid $border-color;
  box-shadow: 0 3px 6px 0 rgba(51, 44, 73, 0.06);  
  
  .container-xl {
    display: flex;  
    justify-content: space-between;
    align-items: center;
    padding: 15px 14px;
    position: relative;
    @include responsive(tablet-portrait) {
      padding: 15px 30px;  
    }

    .logo {
      
      h1 {
        font-weight: 600;
        font-size: 1.5rem;
        letter-spacing: 2px;
        color: $green-color;
        transition: all 0.3s ease-in;

        span {
          color: $black-color;  
        }

        &:hover {
          color: $black-color;  

          span {
            color: $green-color;
          }
        }
      }  
    }

    .search {
      align-self: center;
      position: relative;
      width: 50%;
      @include responsive(phone) {
        display: none;
      }
      
      input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
        width: 100%;

        &:focus {
          border: 1px solid #023047;  
        }
      }

      button {
        position: absolute;
        border-left: none;
        border-top-left-radius: 0;  
        border-bottom-left-radius: 0;
        border: 1px solid #ededed;
        background: none;
      }
    }

    .hamburger {
      @include responsive(phone) {
        align-self: flex-end;  
        justify-self: center;
        cursor: pointer;

        &__line {
          width: 30px;
          height: 2px;
          margin: 0 0 8px 0;
          background-color: $black-color;
          transition: 800ms, opacity 500ms ease-in-out;  
        }

        &__line1 {
          transform: rotateZ(-405deg) translate(-5px, 10px);  
        }

        &__line2 {
          opacity: 0;
        }

        &__line3 {
          transform: rotateZ(405deg) translate(-4px, -10px);
        }
      }
    }

    .header__navigator {
      @include responsive(phone) {
        position: absolute;
        background-color: $black-color;
        height: 100vh;
        width: 70vw;  
        top: -1px;
        left: -1px;
        overflow-x: hidden;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid $border-color;
        z-index: 10;
      }
      
      .nav {

        .nav__list {
          display: flex;
          gap: 3rem;  
          @include responsive(phone) {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
          }
        }

        .nav__item {
          list-style: none;  

          .nav__link {
            color: $black-color;
            transition: all 0.3s ease-in-out;

            &:hover {
              color: $green-color;  
            }

            @include responsive(phone) {
              color: $text-white;
              transition: all 0.3s ease-in-out; 
              
              &:hover {
                color: $green-color;
              }
            }
          }
        }
      }
    }

    .logged__in__menu {
      display: none;

      @include responsive(phone) {
        position: absolute;
        background-color: $black-color;
        height: 100vh;
        width: 70vw;  
        top: -1px;
        left: -1px;
        overflow-x: hidden;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 1px solid $border-color;
        z-index: 10;

        .nav {
          
          .nav__list {
            display: flex;
            gap: 3rem;
            @include responsive(phone) {
              flex-direction: column;
              gap: 1rem;
              align-items: center;   
            }

            .nav__item {
              list-style: none;  

              .nav__link {
                color: $black-color;
                transition: all 0.3s ease-in-out;

                &:hover {
                  color: $green-color; 
                }

                @include responsive(phone) {
                  color: $text-white;
                  transition: all 0.3s ease-in-out;   

                  &:hover {
                    color: $green-color;
                  }
                }
              }
            }
          }  
        }
      }
    }

    .show__mobile__menu {
      visibility: visible;
    }

    .profile {
      @include responsive(phone) {
        display: none;  
      }  

      img {
        border: none;
        width: 35px;  
        object-fit: contain;
        cursor: pointer;
        display: block;
        margin: auto;
      }
    }

    .user-modal {
      position: fixed;
      top: 63px;
      right: 55px;  
    }
  }


}
</style>

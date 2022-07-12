<template>
  <header>
    <div class="container-xl">
      <div class="logo">
        <h1><span>T</span>Adult</h1>
      </div>
      <div @click="toggleMenu" class="hamburger">
        <div :class="{ hamburger__line1 : isShowMenu }" class="hamburger__line"></div>
        <div :class="{ hamburger__line2 : isShowMenu }" class="hamburger__line"></div>
        <div :class="{ hamburger__line3 : isShowMenu }" class="hamburger__line"></div>
      </div>
      <div :class="{ visibility__visible : isShowMenu }" class="header__navigator">
        <nav class="navbar">
          <ul class="navbar__list">
            <li class="navbar__item">
              <nuxt-link class="navbar__link" to="#">Sign In</nuxt-link>
            </li>
            <li class="navbar__item">
              <nuxt-link class="navbar__link" to="#">Sign Up</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isShowMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/styles/styles.scss';

header {
  background-color: $secondary-background-color;
  border: 1px solid $border-color;
  box-shadow: 0 3px 6px 0 rgba(51, 44, 73, 0.06);

  .container-xl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    padding: 15px 14px;
    position: relative;
    @include responsive(tablet-portrait) {
      padding: 15px 30px;
    }

    .logo {
      h1 {
        font-size: 1.5rem;
        color: $green-color;
        letter-spacing: 2px;
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
        top: -1px;
        left: -1px;
        height: 100vh;
        width: 70vw;
        background: $green-color;
        overflow-x: hidden;
        visibility: hidden;
        transition: all 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .navbar {

        .navbar__list {
          display: flex;
          gap: 3rem;
          @include responsive(phone) {
            flex-direction: column;
            gap: 1rem;
          }

          .navbar__item {
            list-style: none;

            .navbar__link {
              color: $black-color;
              transition: all 0.3s ease-in-out;
  
              &:hover {
                color: $green-color;
              }

              @include responsive(phone) {
                color: $text-white;
                transition: all 0.3s ease-in-out;

                &:hover {
                  color: $black-color;
                }
              }
            }
          }
        }
      }
    }

    .visibility__visible {
      visibility: visible;
    }
  }
}
</style>

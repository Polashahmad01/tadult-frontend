<template>
  <div class="container-xl">
    <div class="card">
        <p>Welcome to <span>TAdult</span></p>
        <h1>Choose a user type</h1>
        <div class="form-group">
          <nuxt-link to="/signup/user">Sign up as a user</nuxt-link>
          <div class="tooltip">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0416 24.7917H18.9583V16.0417H16.0416V24.7917ZM17.5 2.91669C9.44267 2.91669 2.91663 9.44273 2.91663 17.5C2.91663 25.5573 9.44267 32.0834 17.5 32.0834C25.5572 32.0834 32.0833 25.5573 32.0833 17.5C32.0833 9.44273 25.5572 2.91669 17.5 2.91669ZM17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5C5.83329 11.0688 11.0687 5.83335 17.5 5.83335C23.9312 5.83335 29.1666 11.0688 29.1666 17.5C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM16.0416 13.125H18.9583V10.2084H16.0416V13.125Z" fill="#00b150"/>
            </svg>
            <span class="tooltip-text">User can solely consume and enjoy content. A user cannot upload content.</span>
          </div>
        </div>
        <div class="form-group">
          <p class="divide">or</p>
        </div>
        <div class="form-group">
          <nuxt-link to="/signup/content-creator">Sign up as a content creator</nuxt-link>
          <div class="tooltip">
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0416 24.7917H18.9583V16.0417H16.0416V24.7917ZM17.5 2.91669C9.44267 2.91669 2.91663 9.44273 2.91663 17.5C2.91663 25.5573 9.44267 32.0834 17.5 32.0834C25.5572 32.0834 32.0833 25.5573 32.0833 17.5C32.0833 9.44273 25.5572 2.91669 17.5 2.91669ZM17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5C5.83329 11.0688 11.0687 5.83335 17.5 5.83335C23.9312 5.83335 29.1666 11.0688 29.1666 17.5C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM16.0416 13.125H18.9583V10.2084H16.0416V13.125Z" fill="#00b150"/>
            </svg>
            <span class="tooltip-text">Content creators can upload, consume and enjoy content.</span>
          </div>
        </div>
        <div class="form-group">
          <p class="have-account">Already have an account? <nuxt-link class="have-account" to="/signin">Sign In</nuxt-link></p>
        </div>
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
    padding: 3rem 2rem;
    @include responsive(phone) {
        padding: 2rem auto;
    }

    p {
      color: $black-color;
      margin-bottom: -0.5rem;
      font-size: 16px;
      transition: all 0.3s ease-in-out;
      @include responsive(phone) {
        font-size: 14px;
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
      margin-bottom: 1rem;
      padding-right: 2rem;
      @include responsive(phone) {
        font-size: 1.5rem;
      }
    }

    .form-group {
      display: flex;
      position: relative;

      &:hover {
        svg{
          path {
            fill: #023047;
          }
        }
      }

      p {
        color: $black-color;
        margin: auto;
      }

      .divide {
        margin-bottom: 0.5rem;
      }

      .have-account {
        width: none;
        padding: 0;
        border: none;
        font-size: 15px;

        &:hover {
          border: none;
        }
      }

      a {
        border: 1px solid #ededed;
        width: 100%;
        text-align: center;
        border-radius: 5px;
        padding: 0.8rem 1rem;
        color: $green-color;
        font-weight: 400;
        margin-bottom: 0.7rem;
        padding-right: 2rem;
        @include responsive(phone) {
          margin-right: 0.8rem;
        }

        &:hover {
            border: 1px solid $black-color;
            color: $black-color;
        }
      }

      svg {
        padding-left: 0.5rem;
        position: absolute;
        top: 42%;  
        right: 0%; 
        transform: translate(-50%, -50%);
        cursor: pointer;
      }

      .tooltip {
        position: relative;
        display: inline-block;

        .tooltip-text {
          visibility: hidden;
          max-width: 320px;
          font-size: 11px;
          background-color: black;
          color: #fff;
          text-align: center;
          border-radius: 6px;
          padding: 5px 0;
          position: absolute;
          z-index: 1;
          bottom: 85%;
          left: 50%;
          margin-left: -340px;
          &::after {
            content: "";
            position: absolute;
            top: 100%;
            right: 3%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: black transparent transparent transparent;
          }
        }

        &:hover .tooltip-text {
          visibility: visible;
        }
      }
    }
  }
}
</style>

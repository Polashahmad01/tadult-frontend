<template>
  <div class="container-xl">
    <div class="card-wrapper">
      <div class="form-text">
        <p>Welcome to <span>TAdult</span></p>
        <h1>Choose a user type</h1>
      </div>
      <nuxt-link class="form-group" to="/signup/user">
        <div class="link">Sign up as a user</div>
        <div class="tooltip">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0416 24.7917H18.9583V16.0417H16.0416V24.7917ZM17.5 2.91669C9.44267 2.91669 2.91663 9.44273 2.91663 17.5C2.91663 25.5573 9.44267 32.0834 17.5 32.0834C25.5572 32.0834 32.0833 25.5573 32.0833 17.5C32.0833 9.44273 25.5572 2.91669 17.5 2.91669ZM17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5C5.83329 11.0688 11.0687 5.83335 17.5 5.83335C23.9312 5.83335 29.1666 11.0688 29.1666 17.5C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM16.0416 13.125H18.9583V10.2084H16.0416V13.125Z" fill="#00b150"/>
          </svg>
          <span class="tooltip-text">User can solely consume and enjoy content. A user cannot upload content.</span>
        </div>
      </nuxt-link>
        
      <div class="text">
        <p>or</p>
      </div>
  
      <nuxt-link class="form-group" to="/signup/content-creator">
        <div class="link">Sign up as a content creator</div>
        <div class="tooltip">
          <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0416 24.7917H18.9583V16.0417H16.0416V24.7917ZM17.5 2.91669C9.44267 2.91669 2.91663 9.44273 2.91663 17.5C2.91663 25.5573 9.44267 32.0834 17.5 32.0834C25.5572 32.0834 32.0833 25.5573 32.0833 17.5C32.0833 9.44273 25.5572 2.91669 17.5 2.91669ZM17.5 29.1667C11.0687 29.1667 5.83329 23.9313 5.83329 17.5C5.83329 11.0688 11.0687 5.83335 17.5 5.83335C23.9312 5.83335 29.1666 11.0688 29.1666 17.5C29.1666 23.9313 23.9312 29.1667 17.5 29.1667ZM16.0416 13.125H18.9583V10.2084H16.0416V13.125Z" fill="#00b150"/>
          </svg>
          <span class="tooltip-text">Content creators can upload, consume and enjoy content.</span>
        </div>
      </nuxt-link>
  
      <div class="text">
        <p class="have-account">Already have an account? <nuxt-link class="have-account" to="/signin">Sign In</nuxt-link></p>
      </div>
  
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
@import '~/styles/styles.scss';

.card-wrapper {
  background: $secondary-background-color;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border-radius: 10px;
  padding: 3rem 2rem;
  @include responsive(except-mobile) {
    padding: 2rem 1rem;
    @include responsive(phone) {
      padding: 2rem 1.5rem;
    }
  }
  
  .form-text {
    color: $black-color;
    margin-bottom: -0.5rem;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    @include responsive(phone) {
      font-size: 14px;
    }

    p {
      color: $black-color;
      
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
      margin-bottom: 1.5rem;
      padding-right: 2rem; 
      @include responsive(phone) {
        font-size: 1.5rem;
      }  
    }
  }

  .form-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.7rem 1rem;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ededed;
    position: relative;

    .link {
      color: $green-color;
      margin: auto;  
    }

    .tooltip {
      position: relative;
      display: inline-block;  

      svg {
        width: 30px;
        display: block;
        margin: auto;
        @include responsive(phone) {
          margin-left: 0.5rem;
        }

        path {
          fill: #00b150;
        }
      }
    }

    .tooltip-text {
      visibility: hidden;
      max-width: 320px;
      font-size: 11px;
      background-color: black;
      color: #fff;
      text-align: center;
      border-radius: 6px;
      padding: 7px 10px;
      position: absolute;
      bottom: 105%;
      left: 50%;
      margin-left: -305.5px; 
      
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

    &:hover {
      border: 1px solid #023047;  
    }
  }

  .text {
    text-align: center;

    p {
      margin: 0.7rem auto ;  

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


<template>
  <div class="profile-wrapper">
    <h1>Edit Profile</h1>
    <div class="profile-info-wrapper">
      <div class="card-link">
        <p @click="toggleIsProfileDetailLinkActive">Personal Details</p>
        <div :class="{line : isProfileDetailLinkActive }"></div>
      </div>
      <div class="card-link">
        <p @click="toggleActiveLink">Login Info</p>
        <div :class="{line : isLinkActive }"></div>
      </div>  
    </div>
    <div class="form-wrapper">
      <app-personal-details v-if="isProfileDetailLinkActive" />  
      <app-login-info v-if="isLinkActive" />
    </div>
  </div>
</template>

<script>
import AppPersonalDetails from "~/components/app-personal-details.vue"
import AppLoginInfo from "~/components/app-login-info.vue"

export default {
  comments: {
    AppPersonalDetails,
    AppLoginInfo
  },
  data() {
    return {
      isLinkActive: false,
      isProfileDetailLinkActive: true  
    }
  },
  methods: {
    toggleActiveLink() {
      this.isLinkActive = !this.isLinkActive
      this.isProfileDetailLinkActive = !this.isProfileDetailLinkActive  
    },
    toggleIsProfileDetailLinkActive() {
      this.isProfileDetailLinkActive = !this.isProfileDetailLinkActive
      this.isLinkActive = !this.isLinkActive  
    }
  }  
}
</script>

<style lang="scss" scoped>
@import '~/styles/styles.scss';

.profile-wrapper {
  padding-top: 1rem;
  padding-bottom: 1rem;
  @include responsive(phone) {
    margin: auto 1rem;
  }
  
  h1 {
    font-size: 32px;
    padding: 20px;
    color: #fff;
    background-color: #01B050;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-weight: 400;
    @include responsive(phone) {
      font-size: 1.5rem;  
    }
  }

  .profile-info-wrapper {
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-top: 10px;
    background-color: #ffffff;

    .card-link {
      position: relative;  

      p {
        margin-left: 30px;
        margin-top: 20px;
        margin-bottom: 20px;
        color: #312a46;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.16px;
        opacity: 0.6;
        cursor: pointer;
        @include responsive(phone) {
          font-size: 14px;  
        }
      }

      .line {
        width: 44px;
        border-width: 2px;
        border-radius: 2px;
        border-style: solid;
        border-color: #05AF50;
        background-color: #05AF50;
        margin-left: 30px
      }
    }
  }

  .form-wrapper {
    background-color: #ffffff;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>

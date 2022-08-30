<template>
  <div class="form-wrapper">
    <div class="show-change-form" @click="toggleIsShowPersonalDetail">
      <h3>Personal information</h3>  
      <p>Change personal information on your profile</p>
    </div>
  
    <form v-if="isShowPersonalDetail">
      <div class="form">
        <div class="form-group">
          <label for="firstName">First Name</label>  
          <input class="base-input-xl" type="text">
        </div>
        <div class="form-group">
          <label for="dob">Date of Birth</label>  
          <input class="base-input-xl" type="date">
        </div>
      </div>
      <div class="form">
        <div class="form-group">
          <label for="lastName">Last Name</label>  
          <input class="base-input-xl" type="text">
        </div>
        <div class="form-group">
          <label for="profilePicture">Profile Picture</label>  
          <input type="file">
        </div>
        <div class="save-form">
          <nuxt-link to="/">CANCEL</nuxt-link>
          <button>SAVE & EXIT</button>
        </div> 
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShowPersonalDetail: false,  
    }
  },
  methods: {
    toggleIsShowPersonalDetail() {
      this.isShowPersonalDetail = !this.isShowPersonalDetail  
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

  form {
    display: flex;
    justify-content: space-between;
    @include responsive(phone) {
      flex-direction: column;  
    }

    .form {
      display: flex;
      flex-direction: column;
      width: 100%;  

      .form-group {
        display: flex;
        flex-direction: column;

        label {
          font-size: 14px;
          font-weight: 400;
          color:#332c49;
          margin-bottom: 0.5rem;  
        }

        input {
          margin-right: 1rem;
          margin-bottom: 1rem;

          &:focus {
            border: 1px solid #023047;
          }  
        }

        input[type="file"] {
          padding: 0.7rem 1rem;
          outline: none;
          border-radius: 5px;
          border: 1px solid #ededed; 
        }
      }

      .save-form {
        align-self: flex-end;
        margin-right: 16px;
        margin-top: 0.7rem;
        @include responsive(phone) {
          display: flex; 
        }

        a {
          background: white;
          color: #05AF50;
          margin-right: 2rem;
          border: 1px solid #05AF50; 
          padding: 0.68rem 1rem;
          border-radius: 4px;
          letter-spacing: 3px;
          align-self: center;
          font-weight: 600;
          transition: all 0.3s ease-in-out;
          @include responsive(phone) {
            padding: 0.6rem 0.6rem;
            font-weight: 500;
            letter-spacing: 1px;
            font-size: 12px;
          }
          
          &:hover {
            background-color: #05AF50;
            opacity: 0.8;
            color: #fff;
          }  
        }

        button {
          text-align: center;
          cursor: pointer;
          border-radius: 4px;
          letter-spacing: 3px;
          border: 1px solid #05AF50;
          background-color: #05AF50;
          font-size: 14px;
          padding: 0.8rem 1rem;  
          color: #fff;
          font-weight: 600;
          transition: all 0.3s ease-in;
          @include responsive(phone) {
            padding: 0.6rem 0.6rem;
            font-weight: 500;
            letter-spacing: 1px;
            font-size: 12px;
          }  

          &:hover {
            background: #fff;
            opacity: 0.8;
            color: #05AF50;
          }  
        }
      }
    }
  }
}
</style>

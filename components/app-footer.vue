<template>
  <div class="footer-container">
    <div class="container-xl">
      <p>Copyright &copy; 2022 - <span class="footer-t">T</span><span class="footer-adult">Adult</span></p>  
      <ul class="social-icons">
        <li>
          <a href="https://facebook.com/polashahmad01" target="_blank">
            <i class="fab fa-facebook"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/polashahmad01" target="_blank">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/polashahmad01" target="_blank">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/polashahmad01" target="_blank">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCYpAK2zyf2mnJI9RJZP59IQ" target="_blank">
            <i class="fab fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style lang="scss" scoped>
// Import Font Awesome
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css');
@import '~/styles/styles.scss';

.footer-container {
  background-color: $secondary-background-color;
  border: 1px solid $border-color;
  box-shadow: 0 3px 6px 0 rgba(51, 44, 73, 0.06);
  
  .container-xl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 14px;
    @include responsive(tablet-portrait) {
      margin: 0 15px;
    }
    @include responsive(phone) {
      flex-direction: column-reverse;
    }

    p {
      font-size: 0.8rem;
      color: $black-color;
      @include responsive(phone) {
        margin-top: 1rem;
      }  
    }

    .footer-t {
      color: $green-color;
      font-weight: 600;
      letter-spacing: 2px;
      transition: all 0.3s ease-in-out;
      &:hover {
        color: $black-color;
      }  
    }

    .footer-adult {
      color: $black-color;
      letter-spacing: 2px;
      font-weight: 600;
      transition: all 0.3s ease-in;
      &:hover {
        color: $green-color;
      }  
    }

    .social-icons {
      display: flex;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      
      li {

        a {
          padding: 0.8rem;
          cursor: pointer;
          border: 1px solid #454e56;
          height: 25px;
          width: 25px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;  
        }
      }
    }
  }
}
</style>

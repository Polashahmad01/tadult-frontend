<template>
  <div class="spinner">
    <div class="dot-pulse"></div>
  </div>  
</template>
  
<script>
export default {
  
}
</script>
  
  <style lang="scss" scoped>
  @charset "UTF-8";
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
  }
  .dot-pulse {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #00b150;
    color: #00b150;
    box-shadow: 9999px 0 0 -5px #00b150;
    -webkit-animation: dot-pulse 1.5s infinite linear;
    animation: dot-pulse 1.5s infinite linear;
    -webkit-animation-delay: 0.25s;
    animation-delay: 0.25s;
  }
  .dot-pulse::before,
  .dot-pulse::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #00b150;
    color: #00b150;
  }
  .dot-pulse::before {
    box-shadow: 9984px 0 0 -5px #00b150;
    -webkit-animation: dot-pulse-before 1.5s infinite linear;
    animation: dot-pulse-before 1.5s infinite linear;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
  .dot-pulse::after {
    box-shadow: 10014px 0 0 -5px #00b150;
    -webkit-animation: dot-pulse-after 1.5s infinite linear;
    animation: dot-pulse-after 1.5s infinite linear;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }
  @-webkit-keyframes dot-pulse-before {
    0% {
      box-shadow: 9984px 0 0 -5px #00b150;
    }
    30% {
      box-shadow: 9984px 0 0 2px #00b150;
    }
    60%,
    100% {
      box-shadow: 9984px 0 0 -5px #00b150;
    }
  }
  @keyframes dot-pulse-before {
    0% {
      box-shadow: 9984px 0 0 -5px #00b150;
    }
    30% {
      box-shadow: 9984px 0 0 2px #00b150;
    }
    60%,
    100% {
      box-shadow: 9984px 0 0 -5px #00b150;
    }
  }
  @-webkit-keyframes dot-pulse {
    0% {
      box-shadow: 9999px 0 0 -5px #00b150;
    }
    30% {
      box-shadow: 9999px 0 0 2px #00b150;
    }
    60%,
    100% {
      box-shadow: 9999px 0 0 -5px #00b150;
    }
  }
  @keyframes dot-pulse {
    0% {
      box-shadow: 9999px 0 0 -5px #00b150;
    }
    30% {
      box-shadow: 9999px 0 0 2px #00b150;
    }
    60%,
    100% {
      box-shadow: 9999px 0 0 -5px #00b150;
    }
  }
  @-webkit-keyframes dot-pulse-after {
    0% {
      box-shadow: 10014px 0 0 -5px #00b150;
    }
    30% {
      box-shadow: 10014px 0 0 2px #00b150;
    }
    60%,
    100% {
      box-shadow: 10014px 0 0 -5px #00b150;
    }
  }
  @keyframes dot-pulse-after {
    0% {
      box-shadow: 10014px 0 0 -5px #00b150;
    }
    30% {
      box-shadow: 10014px 0 0 2px #00b150;
    }
    60%,
    100% {
      box-shadow: 10014px 0 0 -5px #00b150;
    }
  }
  </style>
  
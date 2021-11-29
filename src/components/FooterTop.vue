<template>
  <div class="footerTop">
    <div class="container">
      <div class="row d-flex">
        <div class="logo">
          <a href="#">
            <img src="../assets/img/logotype-2-150x25.png" alt="logotype-2" />
          </a>
        </div>
        <div class="menu">
          <a href="">HOME</a>
          <a href="">ABOUT</a>
          <a href="">PROJECTS</a>
          <a href="">SERVICES</a>
          <a href="">BLOG</a>
          <a href="">CONTACT</a>
        </div>
        <div class="icons">
          <a href="">INSTAGRAM</a>
          <a href="">LINKEDIN</a>
          <a href="">FACEBOOK</a>
          <a href="">TWITTER</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";

.menu {
  a {
    font-size: 1rem;
    text-decoration: none;
    color: $text-footer;
    padding: 0 0.5rem;
  }
  a:hover {
    color: white;
  }
}
.icons {
  a {
    font-size: 1rem;
    text-decoration: none;
    color: white;
    padding: 0 0.5rem;
  }
}
</style>
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
          <a href="">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="social_icon"
            />
          </a>
          <a href="">
            <font-awesome-icon
              :icon="['fab', 'linkedin-in']"
              class="social_icon"
            />
          </a>
          <a href="">
            <font-awesome-icon
              :icon="['fab', 'facebook-f']"
              class="social_icon"
            />
          </a>
          <a href="">
            <font-awesome-icon :icon="['fab', 'twitter']" class="social_icon" />
          </a>
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
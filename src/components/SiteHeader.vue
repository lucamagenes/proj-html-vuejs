<template>
  <header>
    <nav class="container d-flex">
      <div class="logo">
        <img
          src="../assets/img/logotype.png"
          alt="logo-brand-name"
          height="20"
        />
      </div>
      <div class="right d-flex">
        <div class="navLink" v-for="link in navLink" :key="link">
          <a href="#">{{ link }} </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navLink: ["HOME", "ABOUT", "PROJECTS", "SERVICES", "BLOG", "CONTACT"],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";

nav {
  height: 40px;
  justify-content: space-between;
  align-items: flex-end;

  a {
    margin-left: 2rem;
    text-decoration: none;
    color: $text-not-hover;
  }
  a:hover {
    color: $text-primry;
  }
}
</style>
<template>
  <div class="post">
    <div class="post-img" :style="backgroundImage"></div>
    <div class="post-text">
      <div class="info d-flex">
        <p>{{ item.date }}</p>
        <p>{{ item.by }}</p>
      </div>
      <div class="title">
        <p>{{ item.title }}</p>
      </div>
      <div class="text">
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    backgroundImage() {
      return {
        "background-image": "url(" + require("../assets/img" + this.item.image),
      };
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";

.post {
  width: 700px;
  height: 600px;
  position: relative;
  .post-img {
    width: 100%;
    height: 80%;
    background-position: center;
    background-size: cover;
  }
  .post-text {
    width: 80%;
    position: absolute;
    right: 0;
    bottom: 0;
    background-color: white;
    padding: 3rem 10rem 3rem 4rem;
    .info {
      color: red;
      gap: 2rem;
      margin-bottom: 1rem;
    }
    .title {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    .text {
      color: $text-dark-p;
    }
  }
}
</style>
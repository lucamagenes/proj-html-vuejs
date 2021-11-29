<template>
  <div class="customer">
    <div class="text">
      <div class="desc">{{ item.description }}</div>
      <div class="name">{{ item.name }}</div>
      <div class="company">{{ item.company }}</div>
    </div>
    <div class="layer" :style="backgroundImage"></div>
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

.customer {
  width: 415px;
  height: 300px;
  position: relative;
  .text {
    position: absolute;
    top: 0;
    left: 0;
    padding: 3rem 4rem;
    .name {
      font-weight: 700;
      font-size: 1.3rem;
      margin-bottom: 0.5rem;
    }
    .desc {
      font-weight: 300;
      margin-bottom: 2rem;
    }
    .company {
      font-size: 0.8rem;
    }
  }

  .layer {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }
}
.customer:hover .layer {
  opacity: 1;
}
.customer:hover .text {
  color: white;
}
</style>
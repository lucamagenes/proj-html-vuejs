<template>
  <div class="card" :style="backgroundImage">
    <div class="layer">
      <div class="text">
        <div class="title">{{ item.title }}</div>
        <div class="desc">{{ item.description }}</div>
      </div>
      <div class="add">
        <font-awesome-icon :icon="['fas', 'plus']" class="icon" />
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

.card {
  width: 415px;
  height: 300px;
  background-position: center;
  background-size: cover;
  .layer {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    width: 100%;
    height: 100%;
    background-color: #f81d3ad4;
    position: relative;
    .text {
      position: absolute;
      bottom: 1rem;
      left: 1rem;
      .title {
        color: $text-primary;
        font-weight: 700;
        font-size: 1.3rem;
      }
      .desc {
        color: #ffffffb0;
      }
    }
    .add {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: $background-dark-blue;
      color: white;
      cursor: pointer;
      p {
        vertical-align: middle;
      }
    }
  }
}
.card:hover .layer {
  opacity: 1;
}
</style>
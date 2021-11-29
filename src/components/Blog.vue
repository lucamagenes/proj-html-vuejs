<template>
  <div class="blog">
    <div class="container">
      <div class="description">
        <div class="small-title d-flex">
          <div class="green-line"></div>
          <p>BLOG</p>
        </div>
        <div class="title">
          <h2>THE RECENT NEWS YOU MUST READ IT</h2>
        </div>
        <div class="button">
          <div class="view-all">
            <button class="btn btn-green">VIEW ALL</button>
          </div>
        </div>
      </div>
      <PostList />
    </div>
  </div>
</template>

<script>
import PostList from "./PostList.vue";

export default {
  components: {
    PostList,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";

.blog {
  padding: 6rem 0;
  .description {
    margin: auto;
    padding-right: 6rem;
    position: relative;

    .small-title {
      align-items: flex-end;
      margin-bottom: 2rem;
      .green-line {
        width: 45px;
        height: 1px;
        border: 1px solid #ffc318;
        margin-right: 1rem;
      }
      p {
        color: $text-primary;
        vertical-align: baseline;
      }
    }
    .title {
      color: $text-primary;
      margin-bottom: 2rem;
      h2 {
        font-size: 40px;
        line-height: 40px;
      }
    }
    .button {
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
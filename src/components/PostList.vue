<template>
  <div class="post-list">
    <ul>
      <li v-for="(post, i) in posts" :key="i">
        <Post :item="post" />
      </li>
    </ul>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  data() {
    return {
      posts: [
        {
          image:
            "/startup-business-people-and-strategy-board-PAJ3P9K-1390x1042.jpg",
          date: "July 4, 2019",
          by: "by paul",
          title: "Canadian Consulting Firm acquired by UK Giant",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a When, while lovely valley teems with vapour around",
        },
        {
          image:
            "/business-people-working-together-on-project-and-5FHSKBL-1390.jpg",
          date: "July 4, 2019",
          by: "by paul",
          title: "Canadian Consulting Firm acquired by UK Giant",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a When, while lovely valley teems with vapour around",
        },
      ],
    };
  },
  components: {
    Post,
  },
};
</script>

<style lang="scss">
ul {
  list-style: none;
  display: flex;
  justify-content: space-between;
}
</style>
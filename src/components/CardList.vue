<template>
  <div class="card-list">
    <ul>
      <li v-for="(card, i) in cards" :key="i">
        <Card :item="card" />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  data() {
    return {
      cards: [
        {
          image: "/DRY-1-790x592.jpg",
          title: "Purinky Products",
          description: "uncategorized",
        },
        {
          image: "/221bf0b7-8134-43bb-936a-5acbe42db64a-790x592.jpg",
          title: "Purinky Products",
          description: "uncategorized",
        },
        {
          image: "/z1el4c4p-790x592.jpg",
          title: "Purinky Products",
          description: "uncategorized",
        },
      ],
    };
  },
  components: {
    Card,
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
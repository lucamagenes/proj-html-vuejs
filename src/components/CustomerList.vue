<template>
  <div class="customer-list">
    <ul>
      <li v-for="(customer, i) in customers" :key="i">
        <Customer :item="customer" />
      </li>
    </ul>
  </div>
</template>

<script>
import Customer from "./Customer.vue";

export default {
  data() {
    return {
      customers: [
        {
          image: "/oliver-ragfelt-488196-2.jpg",
          name: "Vera Duncan",
          company: "Amazon Inc.",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a When, while lovely valley teems with vapour around",
        },
        {
          image: "/oliver-ragfelt-488196-unsplash.jpg",
          name: "Vera Duncan",
          company: "Amazon Inc.",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a When, while lovely valley teems with vapour around",
        },
        {
          image: "/12679.jpg",
          name: "Vera Duncan",
          company: "Amazon Inc.",
          description:
            "When, while lovely valley teems with vapour around meand eridian sun strikes the upper impenetrable foliage of my trees, and but a When, while lovely valley teems with vapour around",
        },
      ],
    };
  },
  components: {
    Customer,
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
<template>
  <div class="testimonial">
    <div class="container">
      <div class="description-dx">
        <div class="small-title d-flex">
          <p>TESTIMONIAL</p>
          <div class="green-line"></div>
        </div>
        <div class="title">
          <h2>
            WHAT'S THE CUSTOMER SAY <br />
            ABOUT OUR WORK
          </h2>
        </div>
      </div>
    </div>
    <div class="container-dx">
      <CustomerList />
    </div>
  </div>
</template>

<script>
import CustomerList from "./CustomerList.vue";
export default {
  components: {
    CustomerList,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";

.testimonial {
  margin-bottom: 6rem;
  .description-dx {
    margin: auto;
    padding-right: 6rem;
    text-align: right;

    .small-title {
      align-items: flex-end;
      justify-content: end;
      margin-bottom: 2rem;
      .green-line {
        width: 45px;
        height: 1px;
        border: 1px solid #35ffbf;
        margin-left: 1rem;
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
    .buttons {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      gap: 1rem;
      button {
        background-color: #5e5d87;
        border: none;
        padding: 0.5rem;
        color: white;
      }
    }
  }
  .container-dx {
    width: 95%;
    margin-left: auto;
    background-color: white;
  }
}
</style>
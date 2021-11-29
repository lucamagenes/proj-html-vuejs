<template>
  <div class="carousell">
    <div class="container">
      <div class="description-sx">
        <div class="small-title d-flex">
          <div class="green-line"></div>
          <p>PROJECT</p>
        </div>
        <div class="title">
          <h2>
            OUR EXPERT TRUSTED CONSULTANT <br />
            HELP CLIENTS
          </h2>
        </div>
        <div class="buttons">
          <div class="next">
            <button>
              <font-awesome-icon
                :icon="['fas', 'long-arrow-alt-left']"
                class="icon"
              />
            </button>
          </div>
          <div class="prev">
            <button>
              <font-awesome-icon
                :icon="['fas', 'long-arrow-alt-right']"
                class="icon"
              />
            </button>
          </div>
        </div>
      </div>
      <CardList />
    </div>
  </div>
</template>

<script>
import CardList from "./CardList.vue";
export default {
  components: {
    CardList,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";

.carousell {
  margin: 6rem 0;
  .description-sx {
    margin: auto;
    padding-right: 6rem;
    position: relative;

    .small-title {
      align-items: flex-end;
      margin-bottom: 2rem;
      .green-line {
        width: 45px;
        height: 1px;
        border: 1px solid #35ffbf;
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
}
</style>
<template>
  <footer>
    <FooterTop />
    <div class="container">
      <hr />
      <div class="row d-flex">
        <div class="termAndPrivacy">
          <a href="#">Term of use</a>
          <a href="#">Privacy Environmental Policy</a>
        </div>
        <div class="copyright">
          <p>Copyright © 2020 Phlox Consulting. All Right Reserved.</p>
        </div>
      </div>
    </div>
    <div class="btn-group d-flex" v-show="visible">
      <div class="up">
        <a href="#" @click="moveUp">
          <font-awesome-icon
            :icon="['fas', 'long-arrow-alt-up']"
            class="icon"
          />
        </a>
      </div>
      <div class="message">
        <a href="#">
          <font-awesome-icon :icon="['far', 'comment']" class="icon" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterTop from "./FooterTop.vue";
export default {
  data() {
    return {
      visible: false,
    };
  },
  components: {
    FooterTop,
  },
  methods: {
    moveUp() {
      window.scroll({
        top: 0,
      });
    },
    scrollListener() {
      this.visible = window.scrollY > 800;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
footer {
  color: $text-footer;
  hr {
    border-color: #787887;
  }
  .row {
    justify-content: space-between;
    align-items: flex-end;
    margin: 3rem 0;
    font-size: 0.8rem;
    padding: 0 0.5rem;
    .termAndPrivacy {
      a {
        display: block;
        text-decoration: none;
        color: $text-footer;
      }
      a:hover {
        color: white;
      }
    }
  }
  .btn-group {
    position: fixed;
    right: 0;
    bottom: 3rem;
    padding-right: 0.5rem;
    gap: 0.5rem;
    align-items: center;
    a {
      text-decoration: none;
      vertical-align: middle;
    }
    .up {
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      background-color: white;
      border: 0.5px solid black;
      border-radius: 100%;
      a {
        color: black;
      }
    }
    .message {
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: $background-chat-icon;
      border-radius: 100%;
      a {
        color: white;
      }
    }
  }
}
</style>
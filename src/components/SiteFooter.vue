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
    <div class="btn-group d-flex">
      <div class="up">
        <a href="#">UP</a>
      </div>
      <div class="message">
        <a href="#">MSG</a>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterTop from "./FooterTop.vue";
export default {
  components: {
    FooterTop,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";
footer {
  color: $text-footer;
  position: relative;
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
    position: absolute;
    right: 0;
    bottom: 0;
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
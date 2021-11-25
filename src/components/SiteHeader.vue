<template>
  <div class="hero">
    <header>
      <nav class="container d-flex">
        <div class="logo">
          <img
            src="../assets/img/logotype.png"
            alt="logo-brand-name"
            height="20"
          />
        </div>
        <div class="right d-flex">
          <div class="navLink" v-for="link in navLink" :key="link">
            <a href="#">{{ link }} </a>
          </div>
        </div>
      </nav>
    </header>
    <div class="call-to container">
      <div class="small-title d-flex">
        <div class="green-line"></div>
        <p>ALWAYS THE BEST WAY YOU NEED IT</p>
      </div>
      <div class="title">
        <h1>
          THE BEST <br />
          BUSINESS <br />
          CONSULTING
        </h1>
      </div>
      <div class="btn-group">
        <div class="read-more">
          <button class="btn btn-green">READ MORE</button>
        </div>
        <div class="play-btn">
          <button>Py</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLink: ["HOME", "ABOUT", "PROJECTS", "SERVICES", "BLOG", "CONTACT"],
    };
  },
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";

.hero {
  background-image: url("../assets/img/portrait-of-young-architect-woman-on-meeting-KFZCE3A.jpg");
  background-repeat: no-repeat;
  background-position-x: right;
  background-size: 65%;
  header {
    nav {
      height: 40px;
      justify-content: space-between;
      align-items: flex-end;

      a {
        margin-left: 2rem;
        text-decoration: none;
        color: $text-not-hover;
      }
      a:hover {
        color: $text-primry;
        font-weight: 500;
      }
    }
  }
  .call-to {
    padding-top: 200px;
    padding-bottom: 200px;

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
        color: $text-primry;
        vertical-align: baseline;
      }
    }
    .title {
      color: $text-primry;
      h1 {
        font-size: 100px;
        line-height: 80px;
      }
    }
    .btn-group {
      margin-top: 2rem;
      display: flex;

      .read-more {
        margin-right: 2rem;
      }
      .play-btn {
        button {
          padding: 1rem;
          color: $text-green;
          background-color: transparent;
          border: 1px solid white;
          border-radius: 100%;
        }
        button:hover {
          color: $button-red;
        }
      }
    }
  }
}
</style>
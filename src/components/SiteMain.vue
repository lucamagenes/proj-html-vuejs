<template>
  <main>
    <div class="bg-white">
      <div class="container-dx">
        <div class="title d-flex">
          <h3>OUR CONSULTANT CAN HELP YOU</h3>
          <div class="green-line"></div>
        </div>
      </div>
      <div class="container-sm">
        <div class="row d-flex">
          <div class="col d-flex">
            <div class="icon">
              <img
                src="../assets/img/cropped-cropped-icon-270x270.png"
                alt="cropped-cropped-icon"
              />
            </div>
            <div class="text">
              <h4>STATISTICAL CONSULTING</h4>
              <p>
                When, while lovely valley teems with vapour around meand eridian
                sun strikes the upper impenetrable foliage of my trees, and but
                a
              </p>
            </div>
          </div>
          <div class="col d-flex">
            <div class="icon">
              <img
                src="../assets/img/cropped-cropped-icon-270x270.png"
                alt="cropped-cropped-icon"
              />
            </div>
            <div class="text">
              <h4>DIGITAL CONSULTING</h4>
              <p>
                When, while lovely valley teems with vapour around meand eridian
                sun strikes the upper impenetrable foliage of my trees, and but
                a
              </p>
            </div>
          </div>
          <div class="col d-flex">
            <div class="icon">
              <img
                src="../assets/img/cropped-cropped-icon-270x270.png"
                alt="cropped-cropped-icon"
              />
            </div>
            <div class="text">
              <h4>BANKING CONSULTING</h4>
              <p>
                When, while lovely valley teems with vapour around meand eridian
                sun strikes the upper impenetrable foliage of my trees, and but
                a
              </p>
            </div>
          </div>
          <div class="col d-flex">
            <div class="icon">
              <img
                src="../assets/img/cropped-cropped-icon-270x270.png"
                alt="cropped-cropped-icon"
              />
            </div>
            <div class="text">
              <h4>ENTERPRISE CONSULTING</h4>
              <p>
                When, while lovely valley teems with vapour around meand eridian
                sun strikes the upper impenetrable foliage of my trees, and but
                a
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AboutUs />
    <Project />
    <Testimonial />
    <Blog />
    <GetStarted />
  </main>
</template>

<script>
import AboutUs from "./AboutUs.vue";
import Project from "./Project.vue";
import Testimonial from "./Testimonial.vue";
import Blog from "./Blog.vue";
import GetStarted from "./GetStarted.vue";

export default {
  components: {
    AboutUs,
    Project,
    Testimonial,
    Blog,
    GetStarted,
  },
};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";

.bg-white {
  background-color: $background-white;
  padding: 6rem 0;
  .container-dx {
    width: 80%;
    margin-left: auto;
    padding-bottom: 5rem;
    .title {
      justify-content: space-between;
      align-items: center;
      .green-line {
        width: 75%;
        border: 1px solid #ffc318;
      }
    }
  }
  .container-sm {
    width: 60%;
    margin: auto;
    .row {
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 6rem;

      .col {
        width: 40%;

        .icon {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          background-color: $button-red;
          margin-right: 2rem;
          img {
            height: 100%;
          }
        }
        .text {
          h4 {
            font-size: 20px;
          }
          p {
            color: $text-dark-p;
          }
        }
      }
    }
  }
}
</style>
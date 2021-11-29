<template>
  <div>
    <div class="jumbo d-flex">
      <img
        src="../assets/img/business-people-working-together-on-project-and-5FHSKBL.jpg"
        alt="business-people-working-together-on-project"
        height="750"
      />
      <div class="description">
        <div class="small-title d-flex">
          <div class="green-line"></div>
          <p>ABOUT US</p>
        </div>
        <div class="title">
          <h2>
            WE MAKE YOUR <br />
            STARTEGY WORK
          </h2>
        </div>
        <div class="text">
          <p>
            When, while lovely valley teems with vapour around meand eridian sun
            strikes the upper impenetrable foliage of my trees, and but a When,
            while lovely valley teems with vapour around meand eridian sun
            strikes the upper impenetrable foliage of my trees, and but a When,
            while lovely valley teems with vapour around meand eridian sun
            strikes the upper impenetrable foliage of my trees, and but a When,
            while lovely valley teems with vapour around meand eridian sun
          </p>
        </div>
      </div>
    </div>
    <div class="container-sx">
      <div class="call-to d-flex">
        <div class="call-title">
          <h3>WE HELP TO DELIVER THE BUSINESS CASE</h3>
        </div>
        <div class="call-text">
          <p>
            When, while lovely valley teems with vapour around meand eridian sun
            strikes the upper impenetrable foliage of my trees, and but a When,
            while lovely valley teems with vapour around
          </p>
        </div>
      </div>
      <div class="get-started">
        <button class="btn btn-red">GET STARTED</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";

.jumbo {
  width: 100%;
  .description {
    margin: auto;
    padding-left: 4rem;
    padding-right: 6rem;

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
        font-size: 60px;
        line-height: 50px;
      }
    }
    .text {
      color: $text-not-hover;
      width: 75%;
    }
  }
}
.container-sx {
  width: 95%;
  margin-right: auto;
  background-color: $background-green;
  position: relative;

  .call-to {
    width: 60%;
    margin: auto;
    padding: 5rem 0;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;

    .call-title {
      width: 35%;
      font-size: 25px;
    }
    .call-text {
      width: 45%;
    }
  }
  .get-started {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
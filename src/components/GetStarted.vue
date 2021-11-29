<template>
  <div class="get-started">
    <img
      src="../assets/img/business-people-working-together-on-project-and-B3MZ4TX.jpg"
      alt="business-people-working-together-on-project"
    />
    <div class="call-to">
      <div class="title">
        <h2>LET'S TSALK ABOUT WORK</h2>
      </div>
      <div class="description">
        <p>
          A wonderful serenity has taken possession Far far <br />
          away, behind the world mountains.
        </p>
      </div>
      <div class="started">
        <button class="btn btn-blue">GET STARTED</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/scss/common.scss";

.get-started {
  margin-top: 5rem;
  position: relative;
  img {
    width: 100%;
  }
  .call-to {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    .title {
      font-size: 30px;
    }
    .description {
      font-size: 1.3rem;
      margin-bottom: 2rem;
    }
  }
}
</style>
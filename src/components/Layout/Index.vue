<template>
  <div id="app">
    <TawkHeader />
    <div class="layout">
      <main class="container">
        <div class="content">
          <!-- main content rendered here -->
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import TawkHeader from "../Header/Index.vue";

export default {
  components: {
    TawkHeader,
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
#app {
  .layout {
    background-color: $bg-gray;
    height: 100vh;
  }
  .container {
    .content {
      padding-top: 60px;
      padding-bottom: 99px;
    }
  }
}
</style>

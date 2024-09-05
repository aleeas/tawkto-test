<template>
  <div id="app">
    <TawkHeader @search="handleSearch"/>
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
  name: 'LayoutComponent',
  components: {
    TawkHeader,
  },

  data() {
    return {
      searchQuery: ""
    };
  },
  methods: {
    handleSearch(query) {
      // Navigate to the search results page with the query as a URL parameter
      this.$router.push({ name: 'searchResults', query: { q: query } });
    }
  }
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

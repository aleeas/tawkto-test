<template>
  <div id="app">
    <TawkHeader @search="handleSearch" />
    <div class="layout">
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import TawkHeader from "../Shared/Header/Index.vue";

export default {
  components: {
    TawkHeader,
  },

  methods: {
    handleSearch(query) {
      // Navigate to the search results page with the query as a URL parameter
      this.$router.push({ name: "searchResults", query: { q: query } });
 
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
#app {
  .layout {
    background-color: $bg-gray;
    height: 100%;
    .loading {
      text-align: center;
    }
  }
}

</style>

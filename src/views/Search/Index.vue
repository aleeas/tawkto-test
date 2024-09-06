<template>
  <div>
    <div v-if="isLoading" class="loader-wrapper"><span class="loader"></span></div>
    <div v-if="filteredCategories.length === 0 && !isLoading" class="loader-wrapper">
      <div class="text-center">
        <img src="/assets/images/file-text.svg" alt="file-text" height="120"/>
        <p>No Data Available</p>
      </div>
    </div>
    <div class="container" v-else>
      <div class="content">
        <div class="card-container">
          <Card
            v-for="card in filteredCategories"
            :key="card.id"
            :data="card"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/Shared/Card/Index.vue";
import apiClient from "../../utils/api";

export default {
  name: "SearchComponent",
  components: {
    Card,
  },

  data() {
    return {
      filteredCategories: [],
      isLoading: false,
    };
  },

  watch: {
    "$route.query.q": "performSearch",
  },
  mounted() {
    this.performSearch();
  },
  methods: {
    performSearch() {
      this.isLoading = true;
      const query = this.$route.query.q;
      apiClient
        .get(`/api/search/${query}`)
        .then((response) => {
          const dataSorting = response.data.sort((a, b) => a.order - b.order);
          this.filteredCategories = dataSorting.filter(
            (category) => category.enabled
          );
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.loader-wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

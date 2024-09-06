<template>
  <div>
    <div class="container">
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
import Card from "../../components/Card/Index.vue";
import apiClient from "../../utils/api";

export default {
  name: "SearchComponent",
  components: {
    Card,
  },

  data() {
    return {
      filteredCategories: [],
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
        });
    },
  },
};
</script>


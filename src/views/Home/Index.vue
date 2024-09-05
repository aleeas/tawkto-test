<template>
  <div>
    <div class="card-container">
      <Card v-for="card in filteredCategories" :key="card.id" :data="card" />
    </div>
  </div>
</template>

<script>
import Card from "../../components/Card/Index.vue";
import apiClient from "../../utils/api";

export default {
  name: "HomeComponent",
  components: {
    Card,
  },

  data() {
    return {
      cardData: [],
    };
  },
  computed: {
    filteredCategories() {
      return this.cardData.filter(category => category.enabled);
    },
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      apiClient
        .get("/api/categories")
        .then((response) => {
          this.cardData = response.data.sort((a, b) => a.order - b.order);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>

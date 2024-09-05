<template>
  <div class="card-container">
    <Card v-for="card in sortedCategories" :key="card.id" :data="card" />
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
    sortedCategories() {
      return this.cardData.sort((a, b) => a.order - b.order);
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
          // console.log("Data:", response.data);
          this.cardData = response.data;
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

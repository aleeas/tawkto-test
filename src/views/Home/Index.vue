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
import TawkHeader from "../../components/Header/Index.vue";

export default {
  name: "HomeComponent",
  components: {
    Card,
    TawkHeader,
  },

  data() {
    return {
      cardData: [],
    };
  },
  computed: {
    filteredCategories() {
      return this.cardData.filter((category) => category.enabled);
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
.container {
  .content {
    padding-top: 60px;
    padding-bottom: 60px;
    .card-container {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }
  }
}
</style>

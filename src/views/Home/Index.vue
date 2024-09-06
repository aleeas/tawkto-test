<template>
  <div>
    <div v-if="isLoading" class="text-center"><span class="loader"></span></div>
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
import TawkHeader from "../../components/Shared/Header/Index.vue";

export default {
  name: "HomeComponent",
  components: {
    Card,
    TawkHeader,
  },

  data() {
    return {
      cardData: [],
      isLoading: false,
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
      this.isLoading = true;
      apiClient
        .get("/api/categories")
        .then((response) => {
          this.cardData = response.data.sort((a, b) => a.order - b.order);
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


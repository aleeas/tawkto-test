<template>
  <div class="container">
    <div class="content">
      <BreadCrumbs :data="detailData"/>
      <div class="wrapper">
         <CardDetail :data="detailData"/>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "../../../components/Breadcrumbs/Index.vue";
import CardDetail from "../../../components/Card/Detail.vue";
import apiClient from "../../../utils/api";

export default {
  components: {
    BreadCrumbs,
    CardDetail
  },
  data() {
    return {
      detailData: {}
    };
  },
  mounted() {
    // You can fetch data based on the ID here
    // For example: this.fetchData(this.id);
    this.fetchData();
  },
  methods: {
    // Example method to fetch data
    fetchData() {
      apiClient
        .get(`/api/category/${this.$route.params.id}`)
        .then((response) => {
            console.log(response.data)
          this.detailData = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
    .wrapper{
        display: flex;
        gap: 60px;
        justify-content: space-between;
    }
</style>

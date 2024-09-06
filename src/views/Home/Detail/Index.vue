<template>
  <div class="container">
    <div class="content">
      <BreadCrumbs :data="detailData" />
      <div class="wrapper">
        <CardDetail :data="detailData" />
        <div class="detail-list">
          <CardDetailList
            v-for="article in articleData"
            :data="article"
            :key="article.id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "../../../components/Breadcrumbs/Index.vue";
import CardDetail from "../../../components/Card/Detail.vue";
import CardDetailList from "../../../components/Card/DetailList.vue";
import { PUBLISHED } from "../../../constant/data-constant";
import apiClient from "../../../utils/api";

export default {
  components: {
    BreadCrumbs,
    CardDetail,
    CardDetailList,
  },
  data() {
    return {
      detailData: {},
      articleData: [],
    };
  },
  mounted() {
    this.fetchData();
    this.fetchDataArticle();
  },
  methods: {
    fetchData() {
      apiClient
        .get(`/api/category/${this.$route.params.id}`)
        .then((response) => {
          this.detailData = response.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },

    fetchDataArticle() {
      apiClient
        .get(`/api/articles`)
        .then((response) => {
          const data = response.data.filter(
            (data) => data.status === PUBLISHED
          );
          this.articleData = data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  gap: 60px;
  .detail-list{
    display: flex;
    flex: 1;
    gap: 18px;
    flex-direction: column;
  }
}
</style>

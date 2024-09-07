<template>
  <div>
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
    <div class="others-category">
      <div class="container">
        <div class="content">
          <h4>Other categories</h4>
          <div>
            <Carousel
              :perPage="3"
              :perPageCustom="responsive"
              :navigationEnabled="true"
              navigationNextLabel='<span class="next-arrow"><i class="fas fa-chevron-circle-right fa-2x"></i></span>'
              navigationPrevLabel='<span class="prev-arrow"><i class="fas fa-chevron-circle-left fa-2x"></i></span>'
              class="carousel-slide"
            >
              <Slide v-for="category in filteredCategories" :key="category.id">
                <Card :data="category" />
              </Slide>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from "../../../components/Shared/Breadcrumbs/Index.vue";
import Card from "../../../components/Shared/Card/Index.vue";
import CardDetail from "../../../components/Shared/Card/Detail.vue";
import CardDetailList from "../../../components/Shared/Card/DetailList.vue";
import { PUBLISHED } from "../../../constant/data-constant";
import apiClient from "../../../utils/api";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    BreadCrumbs,
    Card,
    CardDetail,
    CardDetailList,
    Carousel,
    Slide,
  },
  data() {
    return {
      detailData: {},
      articleData: [],
      categories: [],
      responsive: [
        [320, 1],
        [360, 1],
        [400, 1],
        [500, 2],
        [700, 2],
        [768, 3],
      ],
    };
  },
  mounted() {
    Promise.all([
      this.fetchData(),
      this.fetchDataArticle(),
      this.fetchDataCategories(),
    ]).catch((error) => console.error("Error fetching data:", error));
  },
  computed: {
    filteredCategories() {
      return this.categories.filter((category) => category.enabled);
    },
  },
  methods: {
    async fetchData() {
      try {
        const { id } = this.$route.params;
        const response = await apiClient.get(`/api/category/${id}`);
        this.detailData = response.data;
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    },

    async fetchDataCategories() {
      try {
        const response = await apiClient.get(`/api/categories`);
        this.categories = response.data.sort((a, b) => a.order - b.order);
      } catch (error) {
        console.error("Error fetching categories data:", error);
      }
    },

    async fetchDataArticle() {
      try {
        const response = await apiClient.get(`/api/articles`);
        const data = response.data.filter((data) => data.status === PUBLISHED);
        this.articleData = data;
      } catch (error) {
        console.error("Error fetching articles data:", error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../scss/variables";
.wrapper {
  display: flex;
  gap: 60px;
  .detail-list {
    display: flex;
    width: 100%;
    gap: 18px;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    display: block;
    .detail-list {
      max-width: 98%;
    }
  }
}
.others-category {
  border-top: 1px solid #eeeeee;
  h4 {
    text-align: center;
    color: $text-gray;
    font-size: 20px;
    margin-top: 0;
  }
  .content {
    padding-top: 20px;
  }
}
.carousel-slide {
  .card {
    @media (max-width: 1152px) {
      max-width: 60%;
      margin: auto;
    }
  }
}
</style>

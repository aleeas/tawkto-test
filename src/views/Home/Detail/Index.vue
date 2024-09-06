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
              :perPageCustom="[
                [360, 1],
                [400, 1],
                [480, 1],
                [1024, 3],
              ]"
              :navigationEnabled="true"
              navigationNextLabel='<span style="color: #bbb;"><i class="fas fa-chevron-circle-right fa-2x"></i></span>'
              navigationPrevLabel='<span style="color: #bbb;"><i class="fas fa-chevron-circle-left fa-2x"></i></span>'
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
      slickOptions: {
        // Add your slick options here
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    };
  },
  mounted() {
    this.fetchData();
    this.fetchDataArticle();
    this.fetchDataCategories();
  },
  computed: {
    filteredCategories() {
      return this.categories.filter((category) => category.enabled);
    },
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

    fetchDataCategories() {
      apiClient
        .get(`/api/categories`)
        .then((response) => {
          this.categories = response.data.sort((a, b) => a.order - b.order);
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
@import "../../../scss/variables";
.wrapper {
  display: flex;
  gap: 60px;
  .detail-list {
    display: flex;
    flex: 1;
    gap: 18px;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    display: block;
    .detail-list {
      max-width: 93%;
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
</style>

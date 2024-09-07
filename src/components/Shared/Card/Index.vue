<template>
  <div class="card carousel" @click="goToDetail(data.id)">
    <IconComponent :icon="data.icon" />
    <h4>{{ data.title }}</h4>
    <div class="description">
      <h5>{{ data.totalArticle }} articles</h5>
      <div class="updated-on">
        Last update {{ daysAgo(data.updatedOn) }} days ago
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import IconComponent from "../Icon/Index.vue";

export default {
  name: "CardComponent",
  components: {
    IconComponent,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  methods: {
    daysAgo(date) {
      const now = moment.utc(); // Use UTC for current date
      const pastDate = moment.utc(date); // Parse the date as UTC
      return now.diff(pastDate, "days");
    },
    goToDetail(id) {
      this.$router.push({ name: "detail", params: { id } });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.card {
  text-align: center;
  border: 1px solid #eeeeee;
  padding: 36px 32px;
  height: 220px;
  width: 100%;
  max-width: 315px;
  background: $bg-white-color;
  border-radius: $border-radius;
  cursor: pointer;
  h4 {
    font-size: 20px;
    line-height: 24px;
    color: $text-black;
  }
  h5 {
    color: $green;
    margin-bottom: 0;
    font-weight: normal;
  }
  .description {
    text-align: center;
    .updated-on {
      color: $text-gray;
      font-size: 11px;
    }
  }

  @media (min-width: 1024px) and (max-width: 1280px) {
    max-width: 24.5%;
  }
  @media (min-width: 821px) and (max-width: 1023px) {
    max-width: 22.4%;
  }
  @media (max-width: 820px) {
    max-width: 38.5%;
  }
  @media (max-width: 780px) {
    max-width: 38%;
  }
  @media (max-width: 768px) {
    max-width: 33.7%;
    margin: auto;
  }

  @media (max-width: 500px) {
    max-width: 100%;
    padding: 10px;
  }
}
</style>

<template>
  <div class="card">
    <IconComponent :icon="data.icon" />
    <h4>{{ data.title }}</h4>
    <div class="description">
      <h5>{{ data.totalArticle }} articles</h5>
      <div class="updated-on">Last update {{ daysAgo(data.updatedOn) }} days ago</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import IconComponent from "../../components/Icon/Index.vue";
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
      return now.diff(pastDate, 'days');
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../scss/variables";
.card {
  text-align: center;
  flex: 1 1 33.333%;
  border: 1px solid #eeeeee;
  padding: 36px 32px;
  height: 220px;
  max-width: 315px;
  background: $bg-white-color;
  border-radius: $border-radius;
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
  @media (min-width: 576px) {
    flex: 1 1 50%; // 2 items per row on small screens
  }
}
</style>

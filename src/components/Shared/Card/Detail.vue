<template>
  <div class="card">
    <div class="card-content">
      <div class="right-side">
        <img src="/assets/images/file-text.svg" alt="file-text" />
        <span>{{ data.totalArticle }}</span>
      </div>
      <IconComponent v-if="data.icon" :icon="data.icon" />
      <h4>{{ data.title }}</h4>
      <div class="description">
        <div class="updated-on">
          Updated {{ daysAgo(data.updatedOn) }} days ago
        </div>
      </div>
    </div>

    <div class="card-info">
      <i class="fas fa-info-circle"></i>
      <p>{{ data.description }}</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import IconComponent from "../Icon/Index.vue";

export default {
  name: "CardDetailComponent",
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
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.card {
  text-align: center;
  flex: 1;
  border: 1px solid #eeeeee;
  height: 100%;
  max-width: 280px;
  background: $bg-white-color;
  border-radius: $border-radius;
  cursor: pointer;

  .card-content {
    padding: 16px 30px;
    .right-side {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
      span{
        color:$text-gray
      }
    }
  }

  .card-info {
    margin-top: 19px;
    padding: 19px 30px 30px;
    border-top: 1px solid #eeeeee;

    i {
      color: $green;
    }

    p {
      font-size: 13px;
      color: $text-gray;
    }
  }

  h4 {
    font-size: 20px;
    line-height: 24px;
    color: $text-black;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  h5 {
    color: $green;
    margin-bottom: 5px;
    font-weight: normal;
  }

  .description {
    text-align: center;

    .updated-on {
      color: $text-gray;
      font-size: 11px;
    }
  }
  @media (max-width: 600px) {
    max-width: 93%;
    margin-bottom: 20px;
  }
}
</style>

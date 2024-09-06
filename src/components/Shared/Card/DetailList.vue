<template>
  <div class="card">
    <div class="card-content">
      <div class="list-content">
        <img src="/assets/images/file-text.svg" alt="file-text" />
        <div>
          <h4>{{ data.title }}</h4>
          <p>Updated {{ formattedDate }}</p>
        </div>
      </div>
      <div><i class="fas fa-chevron-right"></i></div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "CardDetailListComponent",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    formattedDate() {
      // Use moment.js to format the date
      return moment(this.data.updatedOn).format("MMM, D YYYY");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.card {
  border: 1px solid #eeeeee;
  height: 100%;
  width: 100%;
  background: $bg-white-color;
  border-radius: $border-radius;
  cursor: pointer;
  .card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 30px;
    .list-content {
      display: flex;
      gap: 30px;
      p{
        margin-top:5px;
        color:$text-gray;
        font-size: 11px;
      }
    }
    h4 {
      font-size: 20px;
      color: #373737;
      margin-bottom: 0;
      margin-top: 5px;
    }
  }
}
</style>

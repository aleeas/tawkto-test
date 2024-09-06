<template>
  <nav class="breadcrumb">
    <ul>
      <li>
        <router-link to="/" class="link-path"> All categories </router-link>
      </li>
      <li>
        <span class="disabled-path">{{ data.title }}</span>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "BreadcrumbsComponent",
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../../scss/variables";
.breadcrumb {
  ul {
    list-style-type: none;
    display: flex;
    gap: 4px;
    align-items: center;
    padding: 0;
    li {
      // Target the last li that follows another specific li
      &:last-of-type::after {
        content: "";
      }

      // Apply styles to all li except the last one
      &:not(:last-of-type)::after {
        font-family: "Font Awesome 5 Free";
        content: "\f054";
        color: #d3d3d3;
        font-size: 12px;
        margin: 0 10px;
      }
    }
  }
  .link-path {
    font-size: 13px;
    color: $green;
  }
  .disabled-path {
    color: $text-gray;
    font-size: 13px;
  }
}
</style>

<template>
  <div class="icon-container">
    <img :src="iconImage" :alt="icon" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    const listPath = [
      { id: "play", path: "/assets/images/play.svg" },
      { id: "comment", path: "/assets/images/message-circle.png" },
      { id: "desktop", path: "/assets/images/monitor.svg" },
      { id: "link", path: "/assets/images/link.svg" },
      { id: "gem", path: "/assets/images/advanced_features.svg" },
      { id: "shopping-cart", path: "/assets/images/shopping-cart.svg" },
    ];
    return {
      listPath,
    };
  },
  computed: {
    iconImage() {
      return this.listPath.find((x) => x.id === this.icon).path;
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  text-align: center;
  padding: 20px;
}

</style>

<template>
  <div class="icon-container">
    <img :src="iconImage" :alt="altText" />
  </div>
</template>

<script>
export default {
  name: 'IconComponent',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      listPath: [
        { id: "play", path: "/assets/images/play.svg" },
        { id: "comment", path: "/assets/images/message-circle.png" },
        { id: "desktop", path: "/assets/images/monitor.svg" },
        { id: "link", path: "/assets/images/link.svg" },
        { id: "gem", path: "/assets/images/advanced_features.svg" },
        { id: "shopping-cart", path: "/assets/images/shopping-cart.svg" },
      ],
    };
  },
  computed: {
    iconImage() {
      const icon = this.listPath.find((x) => x.id === this.icon);
      return icon ? icon.path : '/assets/images/default-icon.svg'; 
    },
    altText() {
      return `Icon for ${this.icon}`; 
    },
  },
};
</script>

<style lang="scss" scoped>
.icon-container {
  text-align: center;
  padding: 20px;

  img {
    height: auto;
  }
}
</style>

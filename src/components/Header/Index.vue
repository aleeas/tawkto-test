<template>
  <div id="header-wrapper">
    <div id="header-text">
      <h1>Knowledge base doesn't have to be boring</h1>
      <h3>Everything you need to manage your messaging</h3>
    </div>
    <div class="header-search">
      <form method="POST" @submit.prevent="handleSearch">
        <input
          type="text"
          placeholder="Search for answers"
          v-model="searchQuery"
        />
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit('search', this.searchQuery);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
#header-wrapper {
  background: $bg-white-color;
  padding-bottom: 74px;
  margin-bottom: 74px;
  #header-text {
    text-align: center;
    font-family: $font-family;
    color: $text-black;
    padding: 20px;

    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 34px;
      line-height: 41px;
    }

    h3 {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
    }
  }
  .header-search {
    form {
      display: flex;
      align-items: center;
      max-width: 720px;
      margin: auto;
      width: 100%;
      input {
        flex: 1;
        padding: $input-padding;
        border: 1px solid #ccc;
        border-right: 0;
        border-radius: $border-radius 0 0 $border-radius;
        outline: none;
        &::placeholder {
          color: $text-gray;
        }
      }

      button {
        padding: $button-padding;
        background-color: $green;
        color: $button-color;
        border: 1px solid $green;
        border-radius: 0 $border-radius $border-radius 0;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
          background-color: darken($green, 10%);
        }
      }
    }
  }
}
</style>

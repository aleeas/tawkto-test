<template>
  <div id="header-wrapper">
    <div id="header-text">
      <h1>Knowledge base doesn't have to be boring</h1>
      <h3>Everything you need to manage your messaging</h3>
    </div>
    <div class="header-search">
      <div class="input-with-button">
        <input type="text" placeholder="Search for answers" />
        <button type="button"><i class="fas fa-search"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../scss/variables";
#header-wrapper {
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
    .input-with-button {
      display: flex;
      align-items: center;
      max-width: 720px;
      margin: auto;
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

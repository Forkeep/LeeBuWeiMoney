<template>
  <div class="new">
    <button>新增标签</button>
  </div>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class New extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  .new {
    display: flex;
    padding: 8px 0 8px 10px;

    button {
      border-color: transparent;
      border-bottom: 1px solid #aaa;
      background-color: transparent;
      color: #AAA;
      font-size: 12px;
    }
  }

</style>
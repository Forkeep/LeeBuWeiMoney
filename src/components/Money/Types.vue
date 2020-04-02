<template>
  <ul class="types">
    <li class="income selected">收入</li>
    <li class="cost">支出</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";

  .types {
    background-color: #c4c4c4;
    display: flex;
    align-items: center;

    li {
      padding: 16px 0 16px 0;
      flex-grow: 1;
      display: flex;
      justify-content: center;
      font-size: 24px;
      position: relative;
      &.selected::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: #333;
      }
    }

    .income {
    }

    .cost {
    }

  }
</style>
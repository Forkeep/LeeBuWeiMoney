<template>
  <ul class="types">
    <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Types extends Vue {
    @Prop(String) readonly name: string | undefined;
    @Prop(String) readonly type!: string;

    selectType(type: string) {
      this.$emit('update:type', type);
    }
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



  }
</style>
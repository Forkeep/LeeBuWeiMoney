<template>
  <LayoutNav class="statistics-wrapper">
    <ul class="inout-tab">
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
    <div class="inout-content">
      <ol class="record-oneDay">
        <li class="record-header"><span>今天日期</span><span>90元</span></li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
      </ol>
      <ol class="record-oneDay">
        <li class="record-header"><span>今天日期</span><span>90元</span></li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
      </ol>
      <ol class="record-oneDay">
        <li class="record-header"><span>今天日期</span><span>90元</span></li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
        <li>20</li>
      </ol>
    </div>
  </LayoutNav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Statistics extends Vue {
  }
</script>


<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .statistics-wrapper ::v-deep .content {
    flex-direction: column;

    .inout-tab {
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;

      li {
        @extend %outerShadow;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
      }

      li.selected {
        background-color: #c4c4c4;
      }
    }

    .inout-content {
      overflow: auto;
      flex-grow: 1;
      li{
        padding: 0 20px 0 20px;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-content: center;
      }
      li.record-header{
        background-color: #f5f5f5;
        span{
          border: 1px solid red;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }





</style>
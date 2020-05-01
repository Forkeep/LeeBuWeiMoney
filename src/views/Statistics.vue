<template>
  <LayoutNav class="statistics-wrapper">
    <ul class="inout-tab">
      <li :class=" tab_type === '-' ? 'selected' :'' " @click="tab_type = '-'">支出</li>
      <li :class=" tab_type === '+' ? 'selected' :'' " @click="tab_type = '+'">收入</li>
    </ul>
    <div class="inout-content">
      <ol class="record-oneDay">
        <li class="record-header" v-for="item in currentRecord" :key="item.key">
          <span>今天日期</span>
          <span>90元</span>
          {{item}}
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
      </ol>
      <ol class="record-oneDay">
        <li class="record-header"><span>今天日期</span><span>90元</span></li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
      </ol>
      <ol class="record-oneDay">
        <li class="record-header"><span>今天日期</span><span>90元</span></li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
      </ol>
      <ol class="record-oneDay">
        <li class="record-header"><span>今天日期</span><span>90元</span></li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
        <li>
          <div class="money-message">
            <span class="label">吃</span>
            <span class="note">备注</span>
          </div>
          <span class="money">90元</span>
        </li>
      </ol>
    </div>
  </LayoutNav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import dayjs from 'dayjs';

  const api = dayjs();
  console.log(api);
  @Component
  export default class Statistics extends Vue {
    tab_type = '-';

    get currentRecord() {
      this.$store.commit('deepCloneRecordList');
      this.$store.commit('getCurrentList', this.tab_type);
      console.log(this.$store.state.currentList);
      console.log(this.$store.state.groupRecord);
      return this.$store.state.currentList;
    }
  }
</script>


<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";

  .statistics-wrapper ::v-deep .content {
    flex-direction: column;

    .inout-tab {
      min-height: 64px;
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
        .money-message{
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .money{
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
      li.record-header{
        background-color: #f5f5f5;
        span{
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }





</style>
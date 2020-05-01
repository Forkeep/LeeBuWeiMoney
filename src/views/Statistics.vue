<template>
  <LayoutNav class="statistics-wrapper">
    <ul class="inout-tab">
      <li :class=" tab_type === '-' ? 'selected' :'' " @click="tab_type = '-'">支出</li>
      <li :class=" tab_type === '+' ? 'selected' :'' " @click="tab_type = '+'">收入</li>
    </ul>
    <div class="inout-content">
      <ol class="record-oneDay" v-for="(records,index) in groupRecord" :key="records.key">
        <li class="record-header">
          <span>{{beautify(index)}}</span>
          <span>￥90</span>
        </li>
        <li v-for="item in records" :key="item.key">
          <div class="money-message">
            <span class="label">{{item.tags.length === 0 ? '无': outputLabel(item.tags)}}</span>
            <span class="note">{{item.notes}}</span>
          </div>
          <span class="money">￥{{item.amount}}</span>
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

    get groupRecord() {
      this.currentRecord;
      return this.$store.state.groupRecord;
    }

    outputLabel(labelList: string[]) {
      let label = '';
      for (let i = 0; i < labelList.length; i++) {
        label += '、' + labelList[i];
      }
      return label.slice(1);
    }

    beautify(string: string) {
      const day = dayjs(string);
      const now = dayjs();
      if (day.isSame(now, 'day')) {
        return '今天';
      } else if (day.isSame(now.subtract(1, 'day'), 'day')) {
        return '昨天';
      } else if (day.isSame(now.subtract(2, 'day'), 'day')) {
        return '前天';
      }else {
        return day.format('YYYY年M月D日');
      }
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

        .money-message {
          display: flex;
          align-items: center;
          justify-content: center;

          .note {
            margin-left: 5px;
            color: #666666;
            font-size: 12px;
          }
        }

        .money {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }

      li.record-header {
        background-color: #f5f5f5;
        font-weight: 700;

        span {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }





</style>
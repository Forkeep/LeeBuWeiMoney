<template>
  <LayoutNav>
    <div class="labels-wrapper">
      <ul class="labels-list">
        <li v-for="label in labelsList" :key="label"><span>{{label}}</span>
          <Icon name="right"/>
        </li>

      </ul>
      <div class="zhanwei">
        <div class="add-labels">
          <button @click="createLabel">新增标签</button>
        </div>
      </div>
    </div>

  </LayoutNav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {labelModel} from '@/models/LabelsModel';

  @Component
  export default class Labels extends Vue {
    labelsList = labelModel.fetch();

    createLabel() {
      const newLabel = window.prompt('请输入新标签名');
      labelModel.saveLabel(this.labelsList, newLabel as string);
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .labels-wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .labels-list {
      li {
        border-bottom: 1px solid #eee;
        display: flex;
        margin: 0 0 0 16px;
        padding: 8px 16px 8px 0;
        justify-content: space-between;
        align-items: center;

        span {
          font-size: 18px;
        }
      }
    }

    .zhanwei {
      min-height: 120px;
      flex-grow: 1;
      background-color: #f1f1f1;
      position: relative;

      .add-labels {
        @extend %outerShadow;
        padding: 5px 8px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 64px;
        background-color: #666;

        button{
          border: 1px solid transparent;
          background-color: #666;
          color: whitesmoke;
        }
      }
    }
  }
</style>
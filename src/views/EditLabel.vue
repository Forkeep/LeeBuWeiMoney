<template>
  <LayoutNav class="edit-label">
    <div class="edit-wrapper">
      <div class="edit-label-head">
        <Icon name="left" class="back" @click="goBack"/>
        <span>编辑标签</span>
      </div>
      <div class="label-name">
        <span class="name">标签名:</span>
        <span class="item">{{currentLabel}}</span>
      </div>
      <div class="del-label">
        <button @click="deleteLabel">删除标签</button>
      </div>
    </div>
  </LayoutNav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {labelModel} from '@/models/LabelsModel';

  @Component
  export default class EditLabel extends Vue {
    currentLabel = '';

    created() {
      this.currentLabel = this.$route.params.label;
      const labels = labelModel.fetch();
      const delLabel = labels.filter(t => t === this.currentLabel)[0];
      if (delLabel) {
        console.log(delLabel);
      } else {
        this.$router.replace('/404');
      }
    }

    goBack() {
      this.$router.back();
    }

    deleteLabel() {
      labelModel.deleteLabel(this.currentLabel);
      this.$router.back();
    }
  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/helper.scss";
  .edit-label {
    .edit-wrapper {
      flex-grow: 1;
      background-color: #f1f1f1;

      .edit-label-head {
        padding: 10px 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: relative;
        background-color: white;

        .back {
          position: absolute;
          left: 10px;
        }
      }

      .label-name {
        padding: 8px 0;
        margin-top: 10px;
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 0.5px solid #cccccc;
        background-color: white;

        .name {
          margin-left: 10px;
        }

        .item {
          margin-left: 10px;
        }
      }

      .del-label {

        @extend %outerShadow;
        padding: 5px 8px;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 80vh;
        background-color: #666;

        button {
          border: 1px solid transparent;
          background-color: #666;
          color: whitesmoke;
        }
      }

    }
  }
</style>
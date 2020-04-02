<template>
  <div class="tags-wrapper">
    <div class="tags">
      <div class="placeholder"></div>
      <ul>
        <li v-for="tag in tagsSource" :key="tag" @click="toggle(tag)" :class="{selected:selectedTags.indexOf(tag)>=0}">
          {{tag}}
        </li>

      </ul>
    </div>
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
  </div>


</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    @Prop() readonly tagsSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
    }

    createTag() {
      const newTag = window.prompt('请输入标签名');
      if (this.tagsSource) {
        if (this.tagsSource.indexOf(newTag as string) >= 0) {
          alert('此标签已存在');
          return;
        }
        this.$emit('update:tagsSource', [...this.tagsSource, newTag]);
      }

    }


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

  .tags {
    max-height: 30vh;
    flex-grow: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;

    .placeholder {
      flex-grow: 1;
    }

    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      li {
        margin: 3px 5px 3px 5px;
        background-color: #ddd;
        padding: 0 5px;
        min-width: 50px;
        max-height: 24px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.selected {
          background-color: $color-highlight;
        }
      }

    }
  }

</style>
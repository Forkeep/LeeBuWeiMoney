<template>
  <div class="tags">
    <div class="placeholder"></div>
    <ul>
      <li v-for="tag in tagsSource" :key="tag" @click="toggle(tag)" :class="{selected:selectedTags.indexOf(tag)>=0}">
        {{tag}}
      </li>

    </ul>
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
      if (index>=0){
        this.selectedTags.splice(index,1)
      }else {
        this.selectedTags.push(tag);
      }
    }

  }
</script>

<style lang="scss" scoped>
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";
  .tags {
    flex-grow: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
    .placeholder{
      flex-grow: 1;
    }
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;

      li {
        margin: 3px 5px 3px 5px;
        background-color: #ddd;
        width: 50px;
        max-height: 24px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        &.selected{
         background-color: $color-highlight;
        }
      }

    }
  }

</style>
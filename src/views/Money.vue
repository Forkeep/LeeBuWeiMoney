<template>
  <LayoutNav class="layout-nav">
    <NumberPad/>
    <Types />
    <Notes/>
    <Tags :tags-source.sync="tagsSource"/>
  </LayoutNav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Labels from '@/views/Labels.vue';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';

  @Component({
    components: {Tags, Notes, Types, NumberPad, Labels}
  })
  export default class Money extends Vue {
    tagsSource: string[] | undefined = ['衣','食','住','行','玩'];

  }
</script>

<style lang="scss">
  .layout-nav  .content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>


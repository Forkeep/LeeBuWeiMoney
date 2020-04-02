<template>
  <LayoutNav class="layout-nav">
    {{record}}
    <NumberPad @update:value="onUpdateAmount"/>
    <Types :type.sync="record.type" />
    <Notes @update:value="onUpdateNotes"/>
    <Tags :tags-source.sync="tagsSource" @update:value="onUpdateTags"/>
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

  type Record = {
    tags: string[];
    type: string;
    notes: string;
    amount: number;
  }

  @Component({
    components: {Tags, Notes, Types, NumberPad, Labels}
  })
  export default class Money extends Vue {
    tagsSource: string[] | undefined = ['衣', '食', '住', '行', '玩'];
    record: Record = {tags: [], type: '-', notes: ' ', amount: 0};

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }

    onUpdateType(value: string) {
      this.record.type = value;
    }


  }
</script>

<style lang="scss">
  .layout-nav  .content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>


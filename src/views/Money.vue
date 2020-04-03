<template>
  <LayoutNav class="layout-nav">
    {{recordList}}
    <NumberPad @update:value="onUpdateAmount" @save="saveOneRecord"/>
    <Types :type.sync="record.type"/>
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
  import {model} from '@/model';

  @Component({
    components: {Tags, Notes, Types, NumberPad, Labels}
  })
  export default class Money extends Vue {
    tagsSource: string[] | undefined = ['衣', '食', '住', '行', '玩'];
    record: RecordItem = {tags: [], type: '-', notes: ' ', amount: 0, createDate: undefined};
    recordList = model.fetch();

    onUpdateTags(value: string[]) {
      this.record.tags = value;
    }

    onUpdateNotes(value: string) {
      this.record.notes = value;
    }

    onUpdateAmount(value: string) {
      this.record.amount = parseFloat(value);
    }


    saveOneRecord() {
      const deepClone = model.deepClone(this.record);
      deepClone.createDate = new Date();
      this.recordList.push(deepClone);
      if (this.recordList) {
        model.saveRecord(this.recordList);
      }
    }

  }
</script>

<style lang="scss">
  .layout-nav  .content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>


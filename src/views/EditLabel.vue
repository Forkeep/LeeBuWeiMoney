<template>
  <LayoutNav>

  </LayoutNav>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import {labelModel} from '@/models/LabelsModel';

  @Component
  export default class EditLabel extends Vue {
    created() {
      const currentLabel = this.$route.params.label;
      const labels = labelModel.fetch();
      const delLabel =  labels.filter(t => t === currentLabel)[0];
      if (delLabel){
        console.log(delLabel)
      }else {
        this.$router.replace('/404')
      }



    }
  }
</script>

<style lang="scss" scoped>

</style>
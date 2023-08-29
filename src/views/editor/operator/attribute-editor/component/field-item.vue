<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    props: {
      label: {
        type: String,
        default: ''
      }
    }
  })
</script>

<template>
  <div class="field-item">
    <div class="label">{{ label }}</div>
    <slot></slot>
  </div>
</template>

<style lang="scss">
  .field-item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & + & {
      margin-top: 20px;
    }

    .label {
      width: 70px;
      font-size: 14px;
      color: rgb(0 0 0 / 60%);
      flex-shrink: 0;
    }
  }
</style>

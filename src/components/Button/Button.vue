<template>
  <button
    class="ZH-button"
    :class="{
      [`ZH-button--${type}`]: type,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled || loading,
      'is-loading': loading,
      [`ZH-button--${size}`]: size,
      'is-circle': circle,
    }"
    :disabled="disabled || loading"
    ref="_ref"
  >
    <ZH-Icon icon="spinner" spin v-if="loading" />
    <ZH-Icon :icon="icon" v-else-if="icon" />
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<!-- 插槽用于插入值 -->
<!-- 禁用状态需要针对button禁用 -->
<!-- 这里采用v-else-if是为了当同时设置了loading和icon时loading的优先级更高 -->
<!-- v-if="$slots.default"表示默认插槽中的内容 -->
<script setup>
import propObj from './props'
import { ref } from 'vue'
const _ref = ref(null)
defineOptions({
  name: 'ZH-Button',
})
defineProps(propObj)
// 将refBtn暴露出去
defineExpose({
  ref: _ref,
})
</script>

<style lang="scss" scoped>
</style>
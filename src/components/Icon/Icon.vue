<template>
  <i class="ZH-icon" :class="{ [`ZH-icon--${type}`]: type }">
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>
<!-- 这里是动态绑定多个属性所以采用v-bind= -->
<!--这个是font-awesome为我们提供的组件，我们需要对这个组件进行二次封装  -->
<!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
<script setup>
import propObj from './props'
import { computed } from 'vue'
import { omit } from 'lodash-es'
// 定义组件的配置
defineOptions({
  name: 'ZH-Icon',
})
// 定义组件的属性
const props = defineProps(propObj)
// 因为type属性也会传递到font-awesome-icon组件上，所以我们需要过滤掉
const filteredProps = computed(() => omit(props, ['type']))
</script>

<style lang="scss" scoped>
</style>
<template>
  <!-- 这是最外层容器，会有一个默认的宽度 270px，但是如果用户传递的宽度，那么就使用用户传递的 -->
  <div class="ZH-card" :style="width ? { width: width + 'px' } : {}">
    <!-- 1. 卡片图片 -->
    <div
      class="ZH-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <!-- 2. 卡片描述 两种显示方式-->
    <div v-if="summary" class="ZH-card-summary">
      {{ summary }}
    </div>
    <!-- 匿名插槽的内容 -->
    <div v-else class="ZH-card-summary">
      <slot />
    </div>
    <!-- 3. 卡片的 footer -->
    <!-- 最后的 footer 仅仅提供一个插槽，至于内容以及样式由用户自己来决定 -->
    <div class="ZH-card-footer" v-if="$slots.footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<!-- 注意这个封装的card和elementui不同，这个相当于是业务card,样式是固定的.但是又没有使用第三方UI组件-->
<script setup>
import propObj from './props'
defineOptions({
  name: 'ZHCard',
})
defineProps(propObj)
</script>

<style lang="scss" scoped>
</style>
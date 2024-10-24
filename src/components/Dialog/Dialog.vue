<template>
  <!-- 使用vue内置组件 -->
  <transition name="dialog-fade">
    <!-- 外层容器 -->
    <div v-show="visible" class="ZH-dialog_wrapper">
      <!-- 这一层控制对话框的高度和宽度 -->
      <div class="ZH-dialog" :style="{ width, marginTop: top }">
        <!-- 头部 -->
        <div class="ZH-dialog_header">
          <slot name="title">
            <span class="ZH-dialog_title">{{ title }}</span>
          </slot>
          <!-- 关闭按钮 -->
          <button class="ZH-dialog_headerbtn" @click="clickHandle">
            <ZH-Icon icon="xmark" />
          </button>
        </div>
        <!-- 中间内容部分就是默认插槽 -->
        <div class="ZH-dialog_body">
          <slot />
        </div>
        <!-- 底部部分也是一个插槽，是一个具名插槽 -->
        <div class="ZH-dialog_footer" v-if="$slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>
<!-- 在 Vue.js 中，<transition> 组件的 name 属性用于指定 CSS 动画或过渡的前缀。这个前缀将用于生成一组特定的 CSS 类，从而为元素的进入和离开状态提供样式。
    作用当你设置 name="dialog-fade" 时，Vue 会自动生成一组 CSS 类，具体如下：
    进入时：
    dialog-fade-enter: 元素进入时应用的类。
    dialog-fade-enter-active: 元素进入时的过渡效果类。
    dialog-fade-enter-to: 元素进入完成后的类（通常是 dialog-fade-enter 的结束状态）。
    离开时：
    dialog-fade-leave: 元素离开时应用的类。
    dialog-fade-leave-active: 元素离开时的过渡效果类。
    dialog-fade-leave-to: 元素离开完成后的类（通常是 dialog-fade-leave 的结束状态）。 -->
<script setup>
import propObj from './props'
defineOptions({
  name: 'ZH-Dialog',
})
defineProps(propObj)
// 子组件向父组件传递信息，父组件在子组件上绑定事件，子组件触发事件
const emit = defineEmits(['close'])
const clickHandle = () => {
  emit('close')
}
</script>

<style lang="scss" scoped>
</style>
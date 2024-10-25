<template>
  <!-- 最外层的元素 -->
  <div class="ZH-dropdown">
    <!-- 触发元素,继承的属性也需要写上 -->
    <ZH-Tooltip
      :trigger="trigger"
      :placement="placement"
      :openDelay="openDelay"
      :closeDelay="closeDelay"
      :manual="manual"
      @visible-change="visibleChangeHandler"
      ref="tooltipRef"
    >
      <!-- 匿名插槽是点击的内容 -->
      <slot />
      <!-- 具名插槽具体的提示内容 -->
      <template #content>
        <ul class="ZH-dropdown__menu">
          <template v-for="item in menuOptions" :key="item.key">
            <!-- 需要支持配置，用户可以设置分割线 -->
            <li v-if="item.divider" class="divider-placeholder"></li>
            <li
              class="ZH-dropdown__item"
              :class="{
                'is-disabled': item.disabled,
              }"
              :id="`dropdown-item-${item.key}`"
              @click="item.disabled ? null : itemClick(item)"
            >
              <RenderVNode :v-node="item.label" />
            </li>
          </template>
        </ul>
      </template>
    </ZH-Tooltip>
  </div>
</template>

<script setup>
import propObj from './props'
import { ref } from 'vue'
import RenderVNode from '../Common/RenderVnode'
defineOptions({
  name: 'ZH-Dropdown',
})
const props = defineProps(propObj)
const emit = defineEmits(['select', 'visible-change'])
// 触发父元素的事件
const itemClick = item => {
  emit('select', item)
  //   现在需要增加一个判断如果存在hideAfterClick属性，说明需要在点击之后关闭下拉选着框
  //   需要的是触发Tooltip的关闭
  props.hideAfterClick && tooltipRef.value.hide()
}

const visibleChangeHandler = e => {
  // Tooltip的visible-change事件会传递一个参数，这个参数就是当前Tooltip的显示状态
  // 继续向根外层传递这个状态
  emit('visible-change', e)
}
const tooltipRef = ref(null)
defineExpose({
  hide: () => {
    tooltipRef.value.hide()
  },
  show: () => {
    tooltipRef.value.show()
  },
})
</script>

<style lang="scss" scoped>
.bar {
  color: red;
  font-style: italic;
}
</style>
<template>
  <h1 class="row-title">不同方向</h1>
  <div class="row">
    <ZH-Tooltip
      content="this is a test"
      placement="top"
      @visible-change="handle"
    >
      <ZH-Button type="primary">top</ZH-Button>
    </ZH-Tooltip>
    <ZH-Tooltip content="this is a test" placement="bottom">
      <ZH-Button type="warning">bottom</ZH-Button>
    </ZH-Tooltip>
    <ZH-Tooltip content="this is a test" placement="left">
      <ZH-Button type="danger">left</ZH-Button>
    </ZH-Tooltip>
    <ZH-Tooltip content="this is a test" placement="right">
      <ZH-Button type="success">right</ZH-Button>
    </ZH-Tooltip>
  </div>
  <h1 class="row-title">切换触发模式</h1>
  <div class="row">
    <ZH-Tooltip content="this is a test" placement="top" trigger="click">
      <ZH-Button type="primary">top</ZH-Button>
    </ZH-Tooltip>
    <ZH-Tooltip content="this is a test" placement="bottom" trigger="click">
      <ZH-Button type="warning">bottom</ZH-Button>
    </ZH-Tooltip>
    <ZH-Tooltip content="this is a test" placement="left" trigger="click">
      <ZH-Button type="danger">left</ZH-Button>
    </ZH-Tooltip>
    <ZH-Tooltip content="this is a test" placement="right" trigger="click">
      <ZH-Button type="success">right</ZH-Button>
    </ZH-Tooltip>
  </div>
  <h1 class="row-title">手动触发模式</h1>
  <div class="row">
    <ZH-Tooltip
      content="this is a test"
      placement="right"
      manual
      ref="tooltipRef"
    >
      <ZH-Button type="primary">right</ZH-Button>
    </ZH-Tooltip>
  </div>
  <div class="row">
    <ZH-Button @click="openHandler">打开提示框</ZH-Button>
    <ZH-Button @click="closeHandler">关闭提示框</ZH-Button>
  </div>
  <h1 class="row-title">延时触发</h1>
  <div class="row">
    <ZH-Tooltip
      content="this is a test"
      placement="top"
      :open-delay="2000"
      :close-delay="2000"
      @visible-change="handle"
    >
      <ZH-Button type="primary">top</ZH-Button>
    </ZH-Tooltip>
    <ZH-Tooltip
      content="this is a test"
      placement="bottom"
      :open-delay="2000"
      :close-delay="2000"
    >
      <ZH-Button type="warning">bottom</ZH-Button>
    </ZH-Tooltip>
    <ZH-Tooltip
      content="this is a test"
      placement="left"
      :open-delay="2000"
      :close-delay="2000"
    >
      <ZH-Button type="danger">left</ZH-Button>
    </ZH-Tooltip>
    <ZH-Tooltip
      content="this is a test"
      placement="right"
      :open-delay="2000"
      :close-delay="2000"
    >
      <ZH-Button type="success">right</ZH-Button>
    </ZH-Tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tooltipRef = ref(null)
const handle = isShow => {
  if (isShow) console.log('提示框显示')
  else console.log('提示框隐藏')
}

const openHandler = () => {
  // 用户要手动打开
  tooltipRef.value.show()
}
const closeHandler = () => {
  // 用户要手动关闭
  tooltipRef.value.hide()
}
</script>

<style lang="scss" scoped></style>


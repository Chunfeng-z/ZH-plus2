<template>
  <h1 class="row-title">普通展示</h1>
  <div class="row">
    <ZH-Button>默认按钮</ZH-Button>
    <ZH-Button type="primary">主要按钮</ZH-Button>
    <ZH-Button type="info">信息按钮</ZH-Button>
    <ZH-Button type="success">成功按钮</ZH-Button>
    <ZH-Button type="warning">警告按钮</ZH-Button>
    <ZH-Button type="danger">危险按钮</ZH-Button>
  </div>
  <h1 class="row-title">朴素按钮</h1>
  <div class="row">
    <ZH-Button plain>默认按钮</ZH-Button>
    <ZH-Button type="primary" plain>主要按钮</ZH-Button>
    <ZH-Button type="info" plain>信息按钮</ZH-Button>
    <ZH-Button type="success" plain>成功按钮</ZH-Button>
    <ZH-Button type="warning" plain>警告按钮</ZH-Button>
    <ZH-Button type="danger" plain>危险按钮</ZH-Button>
  </div>
  <h1 class="row-title">圆角按钮</h1>
  <div class="row">
    <ZH-Button round>默认按钮</ZH-Button>
    <ZH-Button type="primary" round>主要按钮</ZH-Button>
    <ZH-Button type="info" round>信息按钮</ZH-Button>
    <ZH-Button type="success" plain round>成功按钮</ZH-Button>
    <ZH-Button type="warning" plain round>警告按钮</ZH-Button>
    <ZH-Button type="danger" plain round>危险按钮</ZH-Button>
  </div>
  <h1 class="row-title">禁用状态</h1>
  <div class="row">
    <ZH-Button disabled>默认按钮</ZH-Button>
    <ZH-Button type="primary" disabled>主要按钮</ZH-Button>
    <ZH-Button type="info" disabled>信息按钮</ZH-Button>
    <ZH-Button type="success" disabled>成功按钮</ZH-Button>
    <ZH-Button type="warning" disabled>警告按钮</ZH-Button>
    <ZH-Button type="danger" disabled>危险按钮</ZH-Button>
  </div>
  <h1 class="row-title">等待状态</h1>
  <div class="row">
    <ZH-Button loading>默认按钮</ZH-Button>
    <ZH-Button type="primary" loading>主要按钮</ZH-Button>
    <ZH-Button type="info" loading>信息按钮</ZH-Button>
    <ZH-Button type="success" loading round>成功按钮</ZH-Button>
    <ZH-Button type="warning" loading round>警告按钮</ZH-Button>
    <ZH-Button type="danger" loading round>危险按钮</ZH-Button>
  </div>
  <h1 class="row-title">图标按钮</h1>
  <div class="row">
    <ZH-Button icon="file">默认按钮</ZH-Button>
    <ZH-Button type="primary" icon="gear" loading>主要按钮</ZH-Button>
    <ZH-Button type="info" icon="folder" plain>信息按钮</ZH-Button>
    <ZH-Button type="success" icon="bug" plain>成功按钮</ZH-Button>
    <ZH-Button type="warning" icon="code" round>警告按钮</ZH-Button>
    <ZH-Button type="danger" icon="cube" round>危险按钮</ZH-Button>
  </div>
  <h1 class="row-title">不同尺寸的按钮</h1>
  <div class="row">
    <ZH-Button icon="file" size="small">默认按钮</ZH-Button>
    <ZH-Button type="primary" icon="gear" size="small">主要按钮</ZH-Button>
    <ZH-Button type="info" icon="folder" plain>信息按钮</ZH-Button>
    <ZH-Button type="success" icon="bug" plain>成功按钮</ZH-Button>
    <ZH-Button type="warning" icon="code" plain size="large"
      >警告按钮</ZH-Button
    >
    <ZH-Button type="danger" icon="cube" plain size="large">危险按钮</ZH-Button>
  </div>
  <h1 class="row-title">圆形按钮</h1>
  <div class="row">
    <ZH-Button type="danger" circle>验</ZH-Button>
    <ZH-Button type="primary" icon="gear" circle></ZH-Button>
    <ZH-Button type="info" icon="folder" circle plain></ZH-Button>
    <ZH-Button type="success" icon="bug" circle plain></ZH-Button>
    <ZH-Button type="warning" icon="code" circle disabled></ZH-Button>
    <ZH-Button type="danger" icon="cube" circle disabled></ZH-Button>
  </div>
  <h1 class="row-title">按钮事件</h1>
  <div class="row">
    <ZH-Button type="primary" @click="clickHandler" ref="btnRef"
      >主要按钮</ZH-Button
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'

const btnRef = ref(null)
// Vue3属性透传事件设置在组件上会传递到组件内部的根元素上
function clickHandler() {
  window.alert('按钮被点击了')
  console.log(btnRef.value.ref)
}
</script>

<style lang="scss" scoped>
</style>